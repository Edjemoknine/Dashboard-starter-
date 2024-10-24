const configOverride = (window as any).configOverride ?? {};

const baseAppUrl = import.meta.env.VITE_API_URL ?? 'https://dialekta-dz.com/api';

export const config = {
  baseAppUrl,
  defaultAppLang: 'fr',
  supportedLanguages: ['en', 'ar', 'fr'],
  
  ...configOverride,
};
