import { Component, ReactElement, ReactNode } from 'react';
import { ReactComponent as BabblerLogo } from 'icons/babbler-exp-logo.svg'

type MyProps = {
    defaultSlot: ReactElement
}
class AppShell extends Component<MyProps, {}>{

    render() {
        return <div>
            <div className="h-16 w-full bg-gray-300">
                <div className="container mx-auto h-full">
                    <div className="flex items-center h-full">
                        <div>
                            <BabblerLogo className="h-12 w-12" />
                        </div>
                        <div className="mx-3">
                            Services
                        </div>
                        <div className="mx-3">
                            Contact Us
                        </div>
                        <div className="flex-1"></div>
                        <div className="mx-3">
                            User Info
                        </div>
                        <div className="mx-3">Menu</div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div>{this.props.defaultSlot}</div>
            </div>
        </div>
    }
}

export default AppShell
