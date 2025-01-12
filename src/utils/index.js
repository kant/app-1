const isWindow = typeof window !== 'undefined';

const HAVE_SESSION = isWindow ? localStorage.getItem('accessToken') !== null : false;

const slugify = (str) => str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

const isPlural = (element) => {
  if (element.length > 1) {
    return true;
  }
  return false;
};

const getStorageItem = (key) => {
  if (isWindow) {
    return localStorage.getItem(key);
  }
  return null;
};

const removeStorageItem = (key) => {
  if (isWindow) {
    return localStorage.removeItem(key);
  }
  return null;
};

const getExtensionName = (key) => {
  // from: https://github.com/example/ipynbrepo/prob_stats.ipynb
  // to: ipynb
  const extExtractor = /(?:\.([^.]+))?$/;
  return extExtractor.exec(key)[1];
};

export {
  isWindow,
  HAVE_SESSION,
  slugify,
  isPlural,
  getStorageItem,
  getExtensionName,
  removeStorageItem,
};
