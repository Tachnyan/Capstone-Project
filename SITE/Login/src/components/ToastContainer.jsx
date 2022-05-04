import { render } from "react-dom";
import {useEffect} from 'react'


export default class ToastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.toastList = [];

        this.PushToast = this.PushToast.bind(this);
    }

    PushToast(toast){
        this.toastList.push(
            <div className={`notification ${toast.Type}`}>
                <button>
                    X
                </button>
               
                <div>
                    <p className="notification-title">Title</p>
                    <p className="notification-message">Message</p>
                </div>
            </div>
        )
        setTimeout(() => this.toastList.shift(),3000);
    }

    render() {


        return (
            <>
                <div className={`notification-container`}>
                    {this.toastList}
                </div>

            </>
        )
    }

}






