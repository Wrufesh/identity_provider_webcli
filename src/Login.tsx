import { Component } from 'react';

import {ReactComponent as Eye} from '@/icons/eye.svg'
import {ReactComponent as EyeOff} from '@/icons/eye-off.svg'

class Login extends Component {
    constructor(){
        this.state = {
            showPassword: false
        }
    }

    render() {
        return <div className="w-2/4">
            <div className="flex flex-col">
                <label>Email</label>
                <input type="email"/>
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <div>
                <input type="password" />
                <Eye/>
                <EyeOff/>
                </div>
            </div>
        </div>
    }
}

export default Login;