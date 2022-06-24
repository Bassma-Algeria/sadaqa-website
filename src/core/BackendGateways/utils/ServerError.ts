class ServerError extends Error {
  public readonly error: any;

  constructor(error: any) {
    super('Server Error');
    this.error = error;
  }
}

export { ServerError };
