import './LoginWrapper.css';
import LoginForm from "../../LoginForm/LoginForm"
import { useLocation, NavLink } from 'react-router-dom'


export default function LoginWrapper(props) {

    const { state } = useLocation();

    return (
        <div className="yellow">
            <div className="mainWrap">
                <div className="container">
                    <div className="row headerDiv">
                        <header className="col-sm-12 d-flex justify-content-center mb-3">
                            <NavLink to={"/"} className="headerTitle">Мемасница</NavLink>
                        </header>
                    </div>
                    <div className="row formDiv">
                        <div className="authFormMobile d-flex justify-content-center">
                            <div className="col-sm-12 substrate">
                                <LoginForm message={state} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}