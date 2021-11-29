import { Component, ReactElement } from 'react';

type MyProp = {
    type: string;
    value: string;
    onChange?: Function;
    controlSlot?: ReactElement;
};
type MyState = {
    value: string;
};

class InputField extends Component<MyProp, MyState>{
    constructor(props: MyProp){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({value: e.currentTarget.value});
        this.props.onChange && this.props.onChange(this.state.value)
    };
    render(){
        return <div className="flex h-8 focus:ring focus:border-blue-300">
            <input
                type={this.props.type}
                className="w-full focus:outline-none" 
                onChange={this.onChange} 
            />
            {this.props.controlSlot && this.props.controlSlot}
        </div>
    }
}

export default InputField;