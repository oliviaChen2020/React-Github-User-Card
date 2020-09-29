import React from "react"
import CardHeader from "./CardHeader"
class UserCard extends React.Component{
    render(){
        return<div>
            <h3>{this.props.gitUser}</h3>
            <CardHeader user ={this.props.login}/>
        </div>
    }
}
export default UserCard;