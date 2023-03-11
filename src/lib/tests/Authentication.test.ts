import { LoginViewModel } from '../main/view-models/LoginViewModel';

describe('Login', function () {
    let viewModel: LoginViewModel;

    beforeEach(() => {
        viewModel = new LoginViewModel();
    });

    it('should have an empty email at first', function () {
        expect(viewModel.email).toBe('');
    });

    it('should be able to change the email value', function () {
        viewModel.setEmail('some value');

        expect(viewModel.email).toBe('some value');
    });

    it('given an invalid email, should get an invalid email error', function () {
        viewModel.setEmail('invalid email');

        expect(viewModel.errors.email).toBe('invalid-email-format');
    });

    it('given a valid email, should not get en error', function () {
        viewModel.setEmail('valid@email.com');

        expect(viewModel.errors.email).toBeUndefined();
    });

    it('should have an empty password at first', function () {
        expect(viewModel.password).toBe('');
    });

    it('should be able to change the password value', function () {
        viewModel.setPassword('some value');

        expect(viewModel.password).toBe('some value');
    });

    it('given an invalid short password, should get a short password error', function () {
        viewModel.setPassword('short');

        expect(viewModel.errors.password).toBe('short-password');
    });

    it('given a password of 6 characters at least, should not get en error', function () {
        viewModel.setPassword('tall.password');

        expect(viewModel.errors.password).toBeUndefined();
    });

    it('should not start loading before submitting', function () {
        expect(viewModel.loading).toEqual(false);
    });

    it('should start loading after submitting', function () {
        viewModel.submit();

        expect(viewModel.loading).toEqual(true);
    });
});
