const defaultHtmlFontSize = 16;
const htmlFontSize = Number(
  getComputedStyle(document.documentElement).fontSize?.replace("px", "") ||
    defaultHtmlFontSize
);

export const pxToRem = (size: string | number): string => {
  // used on cases like pxToRem('1px 1px 1px 1px')
  if (typeof size === "string") {
    return size
      .split(" ")
      .map((token) => pxToRem(Number(token.replace("px", ""))))
      .join(" ");
  }

  return `${+size / htmlFontSize}rem`;
};

export const identityParseFn = (v: string) => v;