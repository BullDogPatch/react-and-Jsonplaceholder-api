import React from "react";

function ListItem({ person }) {
  return (
    <div className="list-item">
      <h4>{person.name}</h4>
      <p>{person.email}</p>
    </div>
  );
}

export default ListItem;
