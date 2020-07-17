import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";


class App extends Component{

  state = {
    employees
  }

  render(){
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
          id={employee.id}
          key={employee.id}
          Firstname={employee.Firstname}
          Lastname={employee.Lastname}
          image={employee.image}
          Role ={employee.Role}
          email={employee.email}
          />
        ))}
      </Wrapper>
      
    )
  }
};



export default App;
