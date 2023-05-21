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
    const token = localStorage.getItem('token') || null;

    return JSON.parse(token as string);
  },

  removeToken() {
    localStorage.removeItem('token');
  },

  removeItem(itemTitle: string) {
    localStorage.removeItem(itemTitle);
  },
};
