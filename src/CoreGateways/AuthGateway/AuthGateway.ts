type Token = string;

export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthGateway {
  login(body: LoginBody): Promise<Token>;
  // signup(body: SignupBody): Promise<Token>;
}
