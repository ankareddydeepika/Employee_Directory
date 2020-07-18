import React, { Component } from "react"


class Search extends Component {
  // Setting the component's initial state
  state = {
    input: ""
  };

  handleTyping = (e) => {
    this.setState({input: e.target.value})
    let text = e.target.value;
      text = text.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
    this.props.filterEmployees(text)
  }

  render() {
    return (
      <div className="search">
          <form
            onKeyPress={event => {
                if (event.which === 13 /* Enter */) {
                  event.preventDefault();
                }
              }}
          >
            <input type="text" placeholder="Filter by Firstname"
              onChange={this.handleTyping}/>
          </form>
      </div>
    )
  }

  
}

export default Search;
