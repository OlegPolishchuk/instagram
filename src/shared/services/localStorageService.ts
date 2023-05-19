export const localStorageService = {
  setItem(title: string, item: any) {
    localStorage.setItem(title, JSON.stringify(item));
  },

  getItem(title: string) {
    const value = localStorage.getItem(title) || '';

    return JSON.parse(value);
  },

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  },

  getToken() {
    return JSON.parse(localStorage.getItem('token') || '');
  },

  removeToken() {
    localStorage.removeItem('token');
  },

  removeItem(itemTitle: string) {
    localStorage.removeItem(itemTitle);
  },
};
