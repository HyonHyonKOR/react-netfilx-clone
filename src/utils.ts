export function makeImagePath(photoId: string, format?: string) {
  return `https://image.tmdb.org/t/p/${
    format ? format : "original"
  }/${photoId}`;
}
