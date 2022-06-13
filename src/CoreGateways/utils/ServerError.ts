class ServerError extends Error {
  public readonly error: any;

  constructor(message: any) {
    super(message);
  }
}

export { ServerError };
