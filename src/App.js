import React from "react";
import './App.css';

function App() {
  const [user, setUser] = React.useState([])

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="div">
      <h1>Fetch <span>Api</span> Project with <span>React JS</span></h1>
      <h3>This project fetches random user information each time page reloads.</h3>
      <h2>Title: <span>{user.results[0].name.title}</span></h2>
      <h2>First name: <span>{user.results[0].name.first}</span></h2>
      <h2>Last name: <span>{user.results[0].name.last}</span></h2>
      <img src={user.results[0].picture.large} alt="" /> 
      <h2>Gender: {user.results[0].gender}</h2>
      <h2>Email: {user.results[0].email}</h2>
      <h2>Phone: {user.results[0].phone}</h2>
      <h2>Country: {user.results[0].location.country}</h2>
      <h2>Age: {user.results[0].dob.age}</h2>

      {console.log(user)}
    </div>
  ) : (
    <h1>Data pending...</h1>
  )


}

export default App;