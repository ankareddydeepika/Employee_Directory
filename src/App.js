import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Search from "./components/Search"
import EmployeeSearch from "./components/EmployeeSearch"


class App extends Component{

  state = {
    employees,
    filtered: false
  }

  filterEmployees = (input) => {
    let employee = this.state.employees.find( employee => {
        return employee.Firstname === input
    })
    this.setState({ foundEmployee: employee, filtered: true})
  }

  render(){
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search filterEmployees={this.filterEmployees}/>
        <br/>
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
