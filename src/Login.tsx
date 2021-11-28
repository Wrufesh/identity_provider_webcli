import { Component, ReactElement } from 'react';

import {ReactComponent as Eye} from '@/icons/eye.svg'
import {ReactComponent as EyeOff} from '@/icons/eye-off.svg'

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

    toggleShowPassword(): void{
        this.state.showPassword = !this.state.showPassword
    }

    onChange = (e: React.FormEvent<HTMLInputElement>, inputName: string): void => {
        let update: {[key: string]: any} = {}
        update[inputName] = e.currentTarget.value
        this.setState(update as Pick<MyState, keyof MyState>);
    };

    passwordInputType(): string {
        if (this.state.showPassword){
            return 'text'
        } else {
            return 'password'
        }
    }

    getPasswordFieldIcon(): ReactElement{
        if (this.state.showPassword){
            return <EyeOff />
        } else {
            return <Eye />
        }
    }

    render() {
        return <div className="w-2/4">
            <div className="flex flex-col">
                <label>Email</label>
                <input 
                    type="email" 
                    value={this.state.email} 
                    onChange={(e) => this.onChange(e, 'email')} 
                />
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <div className="flex">
                    <input 
                        type={this.passwordInputType()} 
                        value={this.state.password} 
                        onChange={(e) => this.onChange(e, 'password')} 
                    />
                    {this.getPasswordFieldIcon()}
                </div>
            </div>
        </div>
    }
}

export default Login;