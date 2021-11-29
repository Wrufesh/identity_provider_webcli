import { Component } from 'react';

import {ReactComponent as Eye} from 'icons/eye.svg'
import {ReactComponent as EyeOff} from 'icons/eye-off.svg'

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
            {showPassword: !this.state.showPassword})
    }

    onChange = (e: React.FormEvent<HTMLInputElement>, inputName: string): void => {
        let update: {[key: string]: any} = {}
        update[inputName] = e.currentTarget.value
        this.setState(update as Pick<MyState, keyof MyState>);
    };

    render() {
        return <div className="">
            <div className="flex flex-col">
                <label>Email</label>
                <div className="flex h-8 focus:ring focus:border-blue-300">
                    <input 
                        className="w-full focus:outline-none"
                        type="email" 
                        value={this.state.email} 
                        onChange={(e) => this.onChange(e, 'email')} 
                    />    
                </div>
                
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <div className="flex h-8">
                    <input 
                        className="w-full focus:outline-none"
                        type={this.state.showPassword ? 'text' : 'password'} 
                        value={this.state.password} 
                        onChange={(e) => this.onChange(e, 'password')} 
                    />
                    {this.state.showPassword ? 
                      <Eye className="w-8 h-8" onClick={this.toggleShowPassword}/> : 
                      <EyeOff className="w-8 h-8" onClick={this.toggleShowPassword}/>}
                </div>
            </div>
        </div>
    }
}

export default Login;