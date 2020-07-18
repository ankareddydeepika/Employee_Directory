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
    filtered: false, //true
    foundEmployee: null //deepika
  }

  filterEmployees = (input) => {
    console.log(input)
    let employee = this.state.employees.find( employee => {
        return employee.Firstname === input
    })
    console.log(employee)
    this.setState({ foundEmployee: employee, filtered: true})
  }

  renderEmployees() {
    console.log(this.state.foundEmployee)
    return <EmployeeSearch employees={this.state.employees} 
    filtered={this.state.filtered} 
    foundEmployee={this.state.foundEmployee}></EmployeeSearch>
  }

  render(){
    return(
      <Wrapper>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12" id="title">
                <Title>Employee Directory</Title>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" id="title">
                <Search filterEmployees={this.filterEmployees}/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" id="title">
                {this.renderEmployees()}
                </div>
            </div>
        </div>
        

        {/* <Title>Employee Directory</Title> */}
        {/* <Search filterEmployees={this.filterEmployees}/>
        <br/> */}
       
        {/* {this.state.employees.map(employee => (
          <EmployeeCard
          id={employee.id}
          key={employee.id}
          Firstname={employee.Firstname}
          Lastname={employee.Lastname}
          image={employee.image}
          Role ={employee.Role}
          email={employee.email}
          />
        ))} */}
      </Wrapper>
      
    )
  }
};



export default App;
