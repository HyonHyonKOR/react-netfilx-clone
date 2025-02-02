import { useEffect } from "react";

export const usePreloadImages = (images: string[]) => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);
};
