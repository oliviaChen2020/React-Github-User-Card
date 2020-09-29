import React from "react"
class CardHeader extends React.Component{
    render(){
        return(
            <h2>{this.props.login}</h2>
        )
    }
}
export default CardHeader;