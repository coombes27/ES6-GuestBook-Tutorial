import React from 'react';

export default class MessageForm extends React.Component {
    constructor(){
      super();
      this.state = {
        Author: '',
        Message: ''
      }
    }
    addMessage(e){
      e.preventDefault();
      this.props.addMessage(this.state.Author, this.state.Message);
    }
    changeMessage(e){
      this.setState({Message: e.target.value})
    }
    changeUser(e){
      this.setState({Author: e.target.value})
    }
    render() {
        return (
            <form onSubmit={(e) => this.addMessage(e)}>
                <fieldset>
                    <legend>Enter a message here!</legend>
                    <div className="form-group">
                      Author:
                      <input type="text" onChange={(e) => this.changeUser(e)} value={this.state.Author}/>
                    </div>
                    <div className="form-group">
                      Message:
                      <input type="text" value={this.state.Message} onChange={(e) => this.changeMessage(e)}/>
                    </div>
                    <input type="submit" />
                </fieldset>
            </form>
        )
    }
}
