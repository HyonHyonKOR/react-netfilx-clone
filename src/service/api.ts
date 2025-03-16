const BASE_PATH = "https://api.themoviedb.org/3";

const AUTH = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGMwZjhiZWVjM2VlMTgwOWQ2YmUxNjA2NWU1MzhiZCIsIm5iZiI6MTcyNTUwMDI3Mi4yODkzNTEsInN1YiI6IjY2ZDkwODM3Y2VkNGMwYmYxMzA5N2NhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0tZZInq28FcACRj8qgml7CLemCm3CR463sMdFQi5Azk",
  },
};

export interface ITrendingMovie {
  adult: boolean;
  video: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface ITrendingTVSeries {
  adult: boolean;
  video: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  origin_country: string[];
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface ITrendingAll {
  page: number;
  results: (ITrendingMovie | ITrendingTVSeries)[];
  total_pages: number;
  total_results: number;
}

export function getTrendsAll() {
  return fetch(`${BASE_PATH}/trending/all/day?language=us-US?`, AUTH).then(
    (response) => response.json()
  );
}

export function isTrendingMovie(
  target: ITrendingMovie | ITrendingTVSeries
): target is ITrendingMovie {
  return "title" in target;
}

export function renderTrendingResultType(
  target: ITrendingMovie | ITrendingTVSeries
) {
  if (isTrendingMovie(target)) {
    return target.title;
  } else {
    return target.name;
  }
}

export function search(keyword: string): Promise<any> {
  return fetch(
    `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`,
    AUTH
  ).then((response) => response.json());
}
