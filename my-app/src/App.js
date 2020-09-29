import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard"
import FollowerList from "./components/FollowerList"
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      login: "oliviaChen2020",
      gitUser: [],
      followers: []
    }
  };
  fetchUsers = () => {
      axios.get(`https://api.github.com/users/${this.state.login}/followers`)
      .then((res)=>{
        console.log(res.data)
        this.setState({
          followers: res.data,
        })
        console.log(res.data)
      })
      axios.get(`https://api.github.com/users/${this.state.login}`)
      .then((res) =>{
        console.log(res.data)
        this.setState({
          gitUser: res.data.login
        }) 
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(preProps,prevState){
    if(prevState.login !== this.state.login){
      this.getUser();
    }else {
      return
    }
  }
  render(){

    return (
      <div className="App">
        <h1> Github user</h1>
        <div>
          <UserCard gitUser={this.state.gitUser}/>
          <FollowerList followers ={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
