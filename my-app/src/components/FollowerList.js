import React from "react"
import styled from "styled-components"

const TextStyle = styled.h2 `
    color:blue;
    font-weight:bolder;
`


class FollowerList extends React.Component{
    render(){
        return<div>
            
            <TextStyle>
            <h2>Follower List</h2>
            </TextStyle>
            {this.props.followers.map((follower)=> (
                <img src={follower.avatar_url} key ={follower} alt ="follower pic"/>    
            ))}
             
        </div>
    }
}
export default FollowerList;