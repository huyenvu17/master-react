import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      state: true
    }
    this.click = this.click.bind(this)
  }
  click() {
    this.setState({ number: 2 })
  }
  render() {
    return (
      <div>
        <div>number : {this.state.number}</div>
        <button onClick={this.click}>click me</button>
        <button>change state</button>
      </div>
    )
  }
}
