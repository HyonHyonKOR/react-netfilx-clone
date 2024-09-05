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
  id: string;
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
  id: string;
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
  results: ITrendingMovie[] | ITrendingTVSeries[];
  total_pages: number;
  total_results: number;
}

export function getTrendsAll() {
  return fetch(`${BASE_PATH}/trending/all/week?language=en-US?`, AUTH).then(
    (response) => response.json()
  );
}

export function isTrendingMovie(
  target: ITrendingMovie | ITrendingTVSeries
): target is ITrendingMovie {
  return (target as ITrendingMovie).title !== undefined;
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

/*
{
    "page": 1,
    "results": [
        {
            "backdrop_path": "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
            "id": 1022789,
            "title": "Inside Out 2",
            "original_title": "Inside Out 2",
            "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
            "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                16,
                10751,
                12,
                35
            ],
            "popularity": 1605.708,
            "release_date": "2024-06-11",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 3296
        },
        {
            "backdrop_path": "/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg",
            "id": 1032823,
            "title": "Trap",
            "original_title": "Trap",
            "overview": "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
            "poster_path": "/jwoaKYVqPgYemFpaANL941EF94R.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                80,
                53
            ],
            "popularity": 1308.217,
            "release_date": "2024-07-31",
            "video": false,
            "vote_average": 6.532,
            "vote_count": 743
        },
        {
            "backdrop_path": "/NNC08YmJFFlLi1prBkK8quk3dp.jpg",
            "id": 84773,
            "name": "The Lord of the Rings: The Rings of Power",
            "original_name": "The Lord of the Rings: The Rings of Power",
            "overview": "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
            "poster_path": "/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
            "media_type": "tv",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10759,
                10765,
                18
            ],
            "popularity": 4179.57,
            "first_air_date": "2022-09-01",
            "vote_average": 7.343,
            "vote_count": 2699,
            "origin_country": [
                "US"
            ]
        },
        {
            "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
            "id": 945961,
            "title": "Alien: Romulus",
            "original_title": "Alien: Romulus",
            "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
            "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                878
            ],
            "popularity": 824.291,
            "release_date": "2024-08-13",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 849
        },
        {
            "backdrop_path": "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
            "id": 718821,
            "title": "Twisters",
            "original_title": "Twisters",
            "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
            "poster_path": "/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                12,
                53
            ],
            "popularity": 1143.472,
            "release_date": "2024-07-10",
            "video": false,
            "vote_average": 7,
            "vote_count": 1236
        },
        {
            "backdrop_path": "/mKOBdgaEFguADkJhfFslY7TYxIh.jpg",
            "id": 365177,
            "title": "Borderlands",
            "original_title": "Borderlands",
            "overview": "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.",
            "poster_path": "/865DntZzOdX6rLMd405R0nFkLmL.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                878,
                35,
                12,
                53
            ],
            "popularity": 1045.258,
            "release_date": "2024-08-07",
            "video": false,
            "vote_average": 5.721,
            "vote_count": 305
        },
        {
            "backdrop_path": "/lkmkNVFGsRVKZs1MqKbE6zabXc4.jpg",
            "id": 1226578,
            "title": "Longlegs",
            "original_title": "Longlegs",
            "overview": "FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.",
            "poster_path": "/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                80,
                27,
                53
            ],
            "popularity": 766.415,
            "release_date": "2024-07-10",
            "video": false,
            "vote_average": 6.703,
            "vote_count": 675
        },
        {
            "backdrop_path": "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
            "id": 533535,
            "title": "Deadpool & Wolverine",
            "original_title": "Deadpool & Wolverine",
            "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
            "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                35,
                878
            ],
            "popularity": 3225.2,
            "release_date": "2024-07-24",
            "video": false,
            "vote_average": 7.753,
            "vote_count": 2618
        },
        {
            "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
            "id": 519182,
            "title": "Despicable Me 4",
            "original_title": "Despicable Me 4",
            "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
            "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                16,
                10751,
                35,
                28
            ],
            "popularity": 1351.672,
            "release_date": "2024-06-20",
            "video": false,
            "vote_average": 7.23,
            "vote_count": 1418
        },
        {
            "backdrop_path": "/9Piw6Zju39bn3enIDLZzPfjMTBR.jpg",
            "id": 102621,
            "name": "KAOS",
            "original_name": "KAOS",
            "overview": "As discord reigns on Mount Olympus and almighty Zeus spirals into paranoia, three mortals are destined to reshape the future of humankind.",
            "poster_path": "/dDBTUSl3tRsOeKC1jZugBSFHy9I.jpg",
            "media_type": "tv",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                35,
                10765,
                18
            ],
            "popularity": 719.389,
            "first_air_date": "2024-08-29",
            "vote_average": 7.3,
            "vote_count": 65,
            "origin_country": [
                "GB"
            ]
        },
        {
            "backdrop_path": "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
            "id": 786892,
            "title": "Furiosa: A Mad Max Saga",
            "original_title": "Furiosa: A Mad Max Saga",
            "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
            "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                12,
                878
            ],
            "popularity": 509.957,
            "release_date": "2024-05-22",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 2946
        },
        {
            "backdrop_path": "/woH18JkZMYhMSWqtHkPA4F6Gd1z.jpg",
            "id": 239287,
            "name": "Terminator Zero",
            "original_name": "ターミネーター 0",
            "overview": "A warrior from a post-apocalyptic future travels to 1997 to protect an AI scientist being hunted by an unfeeling — and indestructible — cyborg.",
            "poster_path": "/v4sbn6IsJGAIZNHjdB4CprvS7zo.jpg",
            "media_type": "tv",
            "adult": false,
            "original_language": "ja",
            "genre_ids": [
                16,
                10765,
                10759
            ],
            "popularity": 541.556,
            "first_air_date": "2024-08-29",
            "vote_average": 7.643,
            "vote_count": 56,
            "origin_country": [
                "US",
                "JP"
            ]
        },
        {
            "backdrop_path": "/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg",
            "id": 917496,
            "title": "Beetlejuice Beetlejuice",
            "original_title": "Beetlejuice Beetlejuice",
            "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
            "poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                35,
                27,
                14,
                9648
            ],
            "popularity": 763.466,
            "release_date": "2024-09-04",
            "video": false,
            "vote_average": 7.667,
            "vote_count": 24
        },
        {
            "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
            "id": 348,
            "title": "Alien",
            "original_title": "Alien",
            "overview": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
            "poster_path": "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                878
            ],
            "popularity": 252.298,
            "release_date": "1979-05-25",
            "video": false,
            "vote_average": 8.154,
            "vote_count": 14431
        },
        {
            "backdrop_path": "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
            "id": 37854,
            "name": "One Piece",
            "original_name": "ワンピース",
            "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
            "poster_path": "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
            "media_type": "tv",
            "adult": false,
            "original_language": "ja",
            "genre_ids": [
                10759,
                35,
                16
            ],
            "popularity": 183.212,
            "first_air_date": "1999-10-20",
            "vote_average": 8.719,
            "vote_count": 4591,
            "origin_country": [
                "JP"
            ]
        },
        {
            "backdrop_path": "/qkEnklEGDFy4TRVhuHFn2DI2BP6.jpg",
            "id": 930600,
            "title": "The Deliverance",
            "original_title": "The Deliverance",
            "overview": "Ebony Jackson, a struggling single mother fighting her personal demons, moves her family into a new home for a fresh start. But when strange occurrences inside the home raise the suspicions of Child Protective Services and threaten to tear the family apart, Ebony soon finds herself locked in a battle for her life and the souls of her children.",
            "poster_path": "/og1FteMFRInoQnlZeWqEn8XpXHh.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                53
            ],
            "popularity": 170.922,
            "release_date": "2024-08-16",
            "video": false,
            "vote_average": 6.375,
            "vote_count": 144
        },
        {
            "backdrop_path": "/fypydCipcWDKDTTCoPucBsdGYXW.jpg",
            "id": 653346,
            "title": "Kingdom of the Planet of the Apes",
            "original_title": "Kingdom of the Planet of the Apes",
            "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
            "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                878,
                12,
                28
            ],
            "popularity": 559.484,
            "release_date": "2024-05-08",
            "video": false,
            "vote_average": 7.139,
            "vote_count": 2756
        },
        {
            "backdrop_path": "/zB0g0VaRKHfRrvBT4ouHK5W967W.jpg",
            "id": 956842,
            "title": "Fly Me to the Moon",
            "original_title": "Fly Me to the Moon",
            "overview": "Sparks fly in all directions as marketing maven Kelly Jones, brought in to fix NASA's public image, wreaks havoc on Apollo 11 launch director Cole Davis' already difficult task of putting a man on the moon. When the White House deems the mission too important to fail, Jones is directed to stage a fake moon landing as backup, and the countdown truly begins.",
            "poster_path": "/gjk8YdXpItoC1in53FCrZMFIuBx.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10749,
                35
            ],
            "popularity": 206.368,
            "release_date": "2024-07-10",
            "video": false,
            "vote_average": 7,
            "vote_count": 409
        },
        {
            "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
            "id": 94997,
            "name": "House of the Dragon",
            "original_name": "House of the Dragon",
            "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            "poster_path": "/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
            "media_type": "tv",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "popularity": 1237.878,
            "first_air_date": "2022-08-21",
            "vote_average": 8.393,
            "vote_count": 4846,
            "origin_country": [
                "US"
            ]
        },
        {
            "backdrop_path": "/9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg",
            "id": 1079091,
            "title": "It Ends with Us",
            "original_title": "It Ends with Us",
            "overview": "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
            "poster_path": "/4TzwDWpLmb9bWJjlN3iBUdvgarw.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10749,
                18
            ],
            "popularity": 775.952,
            "release_date": "2024-08-07",
            "video": false,
            "vote_average": 6.856,
            "vote_count": 246
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
}

*/
