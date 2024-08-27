import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"",
                avatar_url:"",
            },
        };
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/shikhar210");
        const userData = await response.json();
        this.setUser(userData);
    }

    setUser(userInfo) {
        this.setState({ userInfo })
    }

    render() {
        const { location, email } = this.props;
        const { name,avatar_url } = this.state.userInfo;
        console.log(name);
        return(
            <div className="user-card">
                <img alt ="avatar" src={avatar_url}/>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{email}</h4>
            </div>
        )
    }
}

export default UserClass;