import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
        this.loginAlert = this.loginAlert.bind(this);
    }

    usernameChange(name) {
        this.setState({ username: name })
    }

    passwordChange(password) {
        this.setState({ password: password })
    }
    loginAlert() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                Username
                <input onChange={e => this.usernameChange(e.target.value)}></input>
                Password
                <input onChange={e => this.passwordChange(e.target.value)}></input>
                <button onClick={this.loginAlert}>Login</button>
            </div>
        )
    }
}

export default Login;