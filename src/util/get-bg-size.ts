export const getBackgroundSize = (width: number, height: number) => {
    if (width >= 1025 || (width >= 768 && width <= 1024 && width > height)) {
      return BackgroundSize.DESKTOP;
    } else if (width >= 768 && width <= 1024 && height > width) {
      return BackgroundSize.TABLET;
    } else if ((width >= 1 && width <= 480) || (width >= 481 && width <= 767)) {
      return BackgroundSize.MOBILE;
    }
};

export enum BackgroundSize {
    DESKTOP = "desktop",
    MOBILE = "mobile",
    TABLET = "tablet"
}