class NetworkError extends Error {
  constructor() {
    super('Network Error, Failed to send the request');
  }
}

export { NetworkError };
