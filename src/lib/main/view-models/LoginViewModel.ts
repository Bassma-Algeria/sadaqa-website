class LoginViewModel {
    private _email: string = '';
    private _password: string = '';
    private _loading: boolean = false;

    private _errors: { email?: string; password?: string } = {};

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get loading() {
        return this._loading;
    }

    get errors() {
        return { ...this._errors };
    }

    setEmail(email: string) {
        this._email = email;

        if (!this.validEmail(email)) this._errors.email = 'invalid-email-format';
        else this._errors.email = undefined;
    }

    setPassword(password: string) {
        this._password = password;

        if (!this.validPassword(password)) this._errors.password = 'short-password';
        else this._errors.password = undefined;
    }

    submit() {
        this._loading = true;
    }

    private validEmail(email: string): boolean {
        const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        return EMAIL_REGEX.test(email);
    }

    private validPassword(password: string): boolean {
        return password.length >= 6;
    }
}

export { LoginViewModel };
