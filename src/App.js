import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Search from "./components/Search"
import EmployeeList from "./components/EmployeeList"
import Sort from "./components/Sort"


class App extends Component{

  state = {
    employees,
    filtered: false, //true
    foundEmployee: null, //deepika
    sorted: false
  }

  sortEmployees = () =>{
 this.state.employees.sort((a,b) => {
       if(this.state.sorted === true){
        return a.Firstname.localeCompare(b.Firstname) 
       }
       else{
         return b.Firstname.localeCompare(a.Firstname)
       }
     
    })
    this.setState({sorted: !this.state.sorted})
  };



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
    return <EmployeeList employees={this.state.employees} 
    filtered={this.state.filtered} 
    foundEmployee={this.state.foundEmployee}></EmployeeList>
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
                <div class="col-sm-12" id="search">
                <Search filterEmployees={this.filterEmployees}/>
                </div>
                <div class="col-sm-12" id="sort">
                <Sort sortEmployees={this.sortEmployees}/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" id="render">
                {this.renderEmployees()}
                </div>
            </div>
        </div>
      </Wrapper>
      
    )
  }
};



export default App;
