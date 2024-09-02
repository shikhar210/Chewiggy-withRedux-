import { useDispatch } from "react-redux";
import { userDetails } from "../Utils/mockData";
import { setLoggedIn } from "../Redux/UserSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        verifyUser(e.target[0].value, e.target[1].value);
    }

    const verifyUser = (userName, password) => {
        userDetails.map((user)=>{
            if(user.userName===userName && user.password===password) {
                dispatch(setLoggedIn(user.name));
            }
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor ="username">Username: </label><br/>
            <input placeholder="Username" type="text" name="userName"/><br/>
            <label htmlFor = "password">Password: </label><br/>
            <input placeholder="Password" type="text" name="password"/><br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;