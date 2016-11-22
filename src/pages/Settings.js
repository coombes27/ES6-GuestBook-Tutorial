import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
export default class Settings extends React.Component{
  render(){
    return(
      <div>
        <h3>Settings</h3>
      <RaisedButton label="Default" />
    <FlatButton label="Hello There!" />
      </div>
    )
  }
}
