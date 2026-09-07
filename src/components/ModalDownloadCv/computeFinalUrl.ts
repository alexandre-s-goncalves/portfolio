export const computeFinalUrl = (pdfPath: string, envBaseUrl: string) => {
  let sanitizedBase = envBaseUrl
    .replace(/\/qas\/?$/, '')
    .replace(/\/main\/?$/, '');

  if (!sanitizedBase.endsWith('/')) {
    sanitizedBase = `${sanitizedBase}/`;
  }

  const cleanPath = pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath;
  return `${sanitizedBase}${cleanPath}`;
};
