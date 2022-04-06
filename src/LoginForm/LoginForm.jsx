import Login from "./Login/Login"

export default function LoginForm(props) {
    return (
        <div>
            <Login message={props.message}/>
        </div>
    )
}

