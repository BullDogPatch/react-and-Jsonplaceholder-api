import React from "react";
import axios from "axios";
import ListItem from "./ListItem";

class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log(res);

      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div className="">
        <div className="name-container">
          {this.state.persons.map(person => (
            <ListItem person={person} key={person.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
