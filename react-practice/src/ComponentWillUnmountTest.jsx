import React, { Component } from 'react'

export default class ComponentWillUnmountTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.setInterval = null
  }
  componentDidMount() {
    this.setInterval = setInterval(() => {
      this.setState(preState => ({ count: preState.count + 1 }))
    }, 1000)
  }
  render() {
    return <div>count: {this.state.count}</div>
  }
}
