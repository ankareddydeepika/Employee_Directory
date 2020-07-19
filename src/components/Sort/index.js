import React, { Component } from "react"


class Sort extends Component {
  // Setting the component's initial state
  state = {
    sorted: false
  }

  handleclick = () => {

    this.props.sortEmployees()
  }
// handleToggle = () => {
//     if (this.state.sorted) {
//       this.props.sort("asc")
//     } else {
//       this.props.sort("desc")
//     }
//     this.setState({sorted: !this.state.sorted})
// }
render() {
    return (
      <div className="sort">
      <button type="button" onClick={this.handleclick}> Sort by Firstname!!</button>
      </div>
    )
  }
}
export default Sort
