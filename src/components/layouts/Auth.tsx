import { Component, ReactElement } from 'react';

import { ReactComponent as Eye } from 'icons/eye.svg'
import { ReactComponent as EyeOff } from 'icons/eye-off.svg'
import { ReactComponent as BabblerLogo } from 'icons/babbler-exp-logo.svg'

import InputField from 'components/InputField';
import Button from 'components/Button';

type MyProps = {
    defautSlot: ReactElement
};
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
        return <div className=" bg-gradient-to-br from-gray-200 via-gray-50 to-gray-200">
            <div className="container mx-auto w-full h-screen flex justify-center items-center">
                <div className="w-1/2">

                    <div className="flex justify-center items-center  filter drop-shadow-xl">
                        <BabblerLogo className="w-28 h-28 fill-current" />
                        <div className="flex-col">
                            <p className="pl-3 h-14 text-6xl font-medium">Babbler</p>
                            <p className="pl-3 h-14 text-6xl font-medium">exp</p>
                        </div>
                    </div>
                </div>

                {this.props.defautSlot}
            </div>
        </div>
    }
}

export default Login;