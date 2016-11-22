import React from "react";
import {IndexLink, Link} from 'react-router';

export default class Navbar extends React.Component{
  constructor(){
    super();
    this.state = {
      links: [
        'view',
        'sign'
      ]
    }
  }
  render(){
    const links = this.state.links.map((x,i) => {
      return(
        <li className="nav-item" key={i}>
          <Link className="nav-link" to={x}>{x}</Link>
        </li>
      )
    })
    return(
      <nav className="navbar navbar-dark bg-primary">

    <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
        <i className="fa fa-bars"></i>
    </button>

    <div className="container">

        <div className="collapse navbar-toggleable-xs" id="collapseEx2">
            <a className="navbar-brand">Navbar</a>
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Pricing</a>
                </li>
                <li className="nav-item btn-group">
                    <a className="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <a className="dropdown-item">Action</a>
                        <a className="dropdown-item">Another action</a>
                        <a className="dropdown-item">Something else here</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline">
                <input className="form-control" type="text" placeholder="Search"/>
            </form>
        </div>

    </div>

</nav>
    )
  }
}
