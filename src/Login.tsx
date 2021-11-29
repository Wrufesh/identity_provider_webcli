import { Component } from 'react';

import { ReactComponent as Eye } from 'icons/eye.svg'
import { ReactComponent as EyeOff } from 'icons/eye-off.svg'

import InputField from 'components/InputField';

type MyProps = {};
type MyState = {
    showPassword: Boolean;
    email: string;
    password: string;
};

class Login extends Component<MyProps, MyState> {
    state: MyState = {
        showPassword: false,
        email: '',
        password: ''
    }

    toggleShowPassword = (): void => {
        this.setState(
            { showPassword: !this.state.showPassword })
    }

    render() {
        return <div className="">
            <div className="flex flex-col">
                <label>Email</label>
                <InputField
                    type="text"
                    value={this.state.email}
                    onChange={(value: string) => this.setState({ email: value })}
                />

            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <InputField
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={(value: string) => this.setState({ password: value })}
                    controlSlot={this.state.showPassword ?
                        <Eye className="w-8 h-8" onClick={this.toggleShowPassword} /> :
                        <EyeOff className="w-8 h-8" onClick={this.toggleShowPassword} />}
                />
            </div>
        </div>
    }
}

export default Login;