import React from "react";
import EmployeeCard from "../EmployeeCard";
class EmployeeSearch extends React.Component {
renderEmployees = () => {
    if (this.props.employees.length > 0) {
      //no filter
      let employees = this.props.employees
//if filter
      if (this.props.filtered === true && this.props.foundEmployee !== undefined) {
        employees = this.props.employees.filter(employee => {
          return employee.id === this.props.foundEmployee.id
        })
      }
      return employees.map(employee => {
        return <EmployeeCard employee={employee} employees={this.props.employees}
          sort={this.props.sort}/>
      })
    }
  }
render() {
    return (
      <div className="EmployeeSearch">
        {this.renderEmployees()}
      </div>
    )
  }
}
export default EmployeeSearch