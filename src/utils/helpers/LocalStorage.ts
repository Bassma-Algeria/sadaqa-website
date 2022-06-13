type Item = 'token';

class LocalStorage {
  static save(key: Item, data: string): void {
    localStorage.setItem(key, data);
  }

  static get(key: Item): string | null {
    return localStorage.getItem(key);
  }
}

export { LocalStorage };
