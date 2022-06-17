type Token = string;

export interface LoginBody {
  email: string;
  password: string;
}

export interface NormalUserSignupBody {
  firstName: string;
  lastName: string;
  wilaya: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AssociationSignupBody {
  associationName: string;
  wilaya: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  associationDocuments: File[];
}

export interface AuthGateway {
  login(body: LoginBody): Promise<Token>;
  normalUserSignup(body: NormalUserSignupBody): Promise<Token>;
  associationSignup(body: AssociationSignupBody): Promise<Token>;
}
