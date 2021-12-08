import { Component } from 'react';

import { ReactComponent as Eye } from 'icons/eye.svg'
import { ReactComponent as EyeOff } from 'icons/eye-off.svg'

import InputField from 'components/InputField';
import Button from 'components/Button';

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
        return <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="p-6 w-2/3 max-w-md">
                <div className="flex flex-col py-2">
                    {/* <p className="pb-3 text-3xl font-semibold">Sign in</p> */}
                    <InputField
                        type="text"
                        value={this.state.email}
                        onChange={(value: string) => this.setState({ email: value })}
                        placeholder="Enter your email here."
                    />

                </div>
                <div className="flex flex-col py-2">
                    <InputField
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={(value: string) => this.setState({ password: value })}
                        placeholder="Enter your password here."
                        controlSlot={this.state.showPassword ?
                            <Eye
                                className="m-2 w-8 h-8 text-gray-700 fill-current"
                                onClick={this.toggleShowPassword} /> :
                            <EyeOff
                                className="m-2 w-8 h-8 text-gray-700 fill-current"
                                onClick={this.toggleShowPassword} />}
                    />
                </div>
                <Button className="mt-5 mb-1 h-12 transition duration-500 transform hover:-translate-y-1 hover:scale-101" label="Login" colorClass="black" />
                <div className="flex justify-center items-center m-3">
                    <div className="h-px w-full bg-gray-700"></div>
                    <p className="px-2 w-full text-gray-800 flex-grow-1 whitespace-nowrap" >or sign in with</p>
                    <div className="h-px w-full bg-gray-700"></div>
                </div>
                <Button className="my-1.5 h-12 transition duration-500 transform hover:-translate-y-1 hover:scale-101" label="Facebook" colorClass="black" outline={true} />
                <Button className="my-2 h-12 transition duration-500 transform hover:-translate-y-1 hover:scale-101" label="Google" colorClass="black" outline={true} />
            </div>
        </div>
    }
}

export default Login;