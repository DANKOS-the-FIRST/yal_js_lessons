class LoginSuperAdminSession {
    #login = 'admin'
    #pwd = 'admin'
    #loggedIn = false
    #ip

    constructor(userIp) {
        this.#ip = userIp
    }

    loginAttempt(login, pwd) {
        this.#checkLoginAttemption(login, pwd)
        if (this.#login === login && this.#pwd === pwd) this.#loggedIn = true
    }

    #checkLoginAttemption(login, pwd) {
        try {
            this.#validateLogin(login)
            this.#validatePassword(pwd)
        } catch (err) {
            console.log('Login attemption failed!')
            if (err instanceof ValidationError) {
                console.log('Login and password must be strings with more then 4 symbols!')
            } else {
                console.log('Not validation error occurred!')
            }
            console.log(err.message)
        }
        console.log('logged in = ' + this.#loggedIn)
    }

    #validateLogin(login) {
        console.log(typeof login)
        if (typeof login != 'string') throw new ValidationError("Login must be a string!")
        if (login.length < 5) throw new ValidationError("Login must be more then 4 characters!")
    }

    #validatePassword(pwd) {
        if (typeof pwd != 'string') throw new ValidationError("Password must be a string!")
        if (pwd.length < 5) throw new ValidationError("Password must be more then 4 characters!")
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let loginSession = new LoginSuperAdminSession('31213dsa')
loginSession.loginAttempt(1, 2)