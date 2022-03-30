import Login from "./Login/Login"
import Register from "./Register/Register"

export default function LoginForm(props) {
    if (props.isLogin) {
        return (
            <div>
                <Login />
            </div>
        )
    }
    else {
        return (
            <Register />
        )
    }
}

