import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.employee.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Firstname:</strong> {props.employee.Firstname}
          </li>
          <li>
            <strong>Lastname:</strong> {props.employee.Lastname}
          </li>
          <li>
            <strong>Role:</strong> {props.employee.Role}
          </li>
          <li>
            <strong>EmailId:</strong> {props.employee.email}
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
