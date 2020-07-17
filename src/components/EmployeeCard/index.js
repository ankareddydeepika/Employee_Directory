import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Firstname:</strong> {props.Firstname}
          </li>
          <li>
            <strong>Lastname:</strong> {props.Lastname}
          </li>
          <li>
            <strong>Role:</strong> {props.Role}
          </li>
          <li>
            <strong>EmailId:</strong> {props.email}
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
