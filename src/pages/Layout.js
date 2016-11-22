import React from 'react';
import { Link } from 'react-router';

import AppBar from "material-ui/AppBar";
import Navbar from "../components/Navbar";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  render(){
    console.log(this.props.location.pathname);
    return(
      <div>
        <AppBar title="Guest Book" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={() => {this.handleToggle()}} />
        <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open: open})}>
          <Link to="settings" onClick={() => this.handleToggle()} display={false}><MenuItem>Menu Item</MenuItem></Link>
          <MenuItem containerElement={<Link to="register" />} onClick={() => this.handleToggle()}>Registration</MenuItem>
        </Drawer>
        <div style={{textAlign: "center"}}>
          <h1> Welcome! </h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}
