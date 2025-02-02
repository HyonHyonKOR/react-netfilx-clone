export function makeImagePath(photoId: string, format?: string) {
  return `https://image.tmdb.org/t/p/${
    format ? format : "original"
  }/${photoId}`;
}

export function makeLargeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/w1280${id}`;
}

export function makeSmallImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/w500${id}`;
}
