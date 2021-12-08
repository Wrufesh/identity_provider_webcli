import { Component, ReactElement } from 'react';

type MyProps = {
    label: string,
    type?: "button" | "submit" | "reset" | undefined,
    prependIconsSlot?: ReactElement,
    appendIconSlot?: ReactElement,
    className?: string,
    outline?: Boolean,
    colorClass?: string,
}

class Button extends Component<MyProps, {}> {
    render() {
        let outline = this.props.outline || false
        let buttonType = this.props.type || 'button'
        let colorClass = this.props.colorClass || 'blue-500'
        let outlineClasses = `border-2 border-${colorClass} bg-white text-${colorClass}`
        let nonOutlineClasses = `bg-${colorClass} text-white`

        let style = outline? outlineClasses: nonOutlineClasses
        return <button
            className={`${this.props.className} ${style} w-full font-bold py-2 px-4 filter drop-shadow-lg`}
            type={buttonType}>
            {this.props.label}
        </button>
    }
}

export default Button