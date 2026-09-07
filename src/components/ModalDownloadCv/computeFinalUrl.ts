export const computeFinalUrl = (pdfPath: string, envBaseUrl: string) => {
  let sanitizedBase = envBaseUrl;

  if (sanitizedBase.includes('/qas')) {
    sanitizedBase = sanitizedBase.replace(/\/qas\/?$/, '');
  }

  if (!sanitizedBase.endsWith('/')) {
    sanitizedBase = `${sanitizedBase}/`;
  }

  const cleanPath = pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath;
  return `${sanitizedBase}${cleanPath}`;
};
