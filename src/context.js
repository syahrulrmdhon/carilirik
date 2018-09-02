import React, { Component } from 'react'

export class Provider extends Component {
  render() {
    return (
        <Context.Provider>
            {this.props.children}
        </Context.Provider>
    )
  }
}
