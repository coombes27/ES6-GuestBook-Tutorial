import React from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

const messages = [{message: "Hello World!", author: "Michael Coombes"}];

export default class MessageList extends React.Component{
  constructor(){
    super();
    this.state = {
      messages: [{message: "Hello World!", author: "Michael Coombes"}]
    }
  }
  btnClick(message, author){
    const messages = this.state.messages;
    const newMsg = {message: message, author: author}
    messages.push(newMsg);
    this.setState({messages: messages})
  }
  render(){
    var nodes = this.state.messages.map(x =>{
        return (
          <li><Message author={x.author} message={x.message} /></li>
        )
    })
    return(
      <div>
      <MessageForm addMessage={this.btnClick.bind(this)}/>
        <ul>
          {nodes}
        </ul>
        <button onClick={(e) => this.btnClick(e)}>Click Me!</button>
      </div>
    )
  }
}
