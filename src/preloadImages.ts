const preloadedImages = new Set<string>();
const preloadedLinks = new Set<string>();

function normalizeImageUrl(url: string) {
  if (typeof window === 'undefined') {
    return url;
  }

  try {
    return new URL(url, window.location.href).href;
  } catch {
    return url;
  }
}

type PreloadImagesOptions = {
  addPreloadLinks?: boolean;
};

export function preloadImages(imageUrls: readonly string[], options: PreloadImagesOptions = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const { addPreloadLinks = false } = options;

  imageUrls.forEach((imageUrl) => {
    if (!imageUrl) {
      return;
    }

    const normalizedUrl = normalizeImageUrl(imageUrl);

    if (addPreloadLinks && !preloadedLinks.has(normalizedUrl)) {
      const existingPreloadLink = document.head.querySelector<HTMLLinkElement>(`link[rel="preload"][as="image"][href="${normalizedUrl}"]`);
      if (!existingPreloadLink) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = normalizedUrl;
        document.head.appendChild(preloadLink);
      }

      preloadedLinks.add(normalizedUrl);
    }

    if (!preloadedImages.has(normalizedUrl)) {
      const preloadedImage = new Image();
      preloadedImage.decoding = 'async';
      preloadedImage.src = normalizedUrl;
      preloadedImages.add(normalizedUrl);
    }
  });
}
