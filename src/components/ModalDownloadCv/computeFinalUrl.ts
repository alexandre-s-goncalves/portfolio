export const computeFinalUrl = (pdfPath: string, envBaseUrl: string) => {
  const baseUrl = envBaseUrl.endsWith('/') ? envBaseUrl : `${envBaseUrl}/`;
  const cleanPath = pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath;
  return `${baseUrl}${cleanPath}`;
};
