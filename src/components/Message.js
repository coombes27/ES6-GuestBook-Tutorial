import React from 'react';

export default class Message extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.message}</h1>
        <h3> - {this.props.author}</h3>
      </div>
    )
  }
}
