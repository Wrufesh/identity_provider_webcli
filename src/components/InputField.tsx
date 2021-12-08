import { Component, ReactElement } from 'react';

type MyProp = {
    type: string;
    value: string;
    onChange?: Function;
    controlSlot?: ReactElement;
    placeholder?: string;
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
        return <div className="group px-1.5 h-14 flex items-center ring-1 ring-black bg-white focus-within:ring-2 focus-within:ring-blue-500">
            <input
                type={this.props.type}
                className="p-2 w-full h-full focus:outline-none text-lg placeholder-gray-500 bg-white" 
                onChange={this.onChange}
                placeholder={this.props.placeholder? this.props.placeholder : ''} 
            />
            {this.props.controlSlot && this.props.controlSlot}
        </div>
    }
}

export default InputField;