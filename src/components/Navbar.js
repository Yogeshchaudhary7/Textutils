import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';
 

export default function Navbar(props) 
// Here we made props as props.title and props.aboutText so that our component can use it easily while it replaces its valuew or we can reuse it again
{
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link"to="/about">{props.aboutText}</a>
        </li> */}
        
        
      </ul>
      {/* <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" html-for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    )

    
}
Navbar.propTypes={
    //title:PropTypes.string.isRequired, //if we want something that has to be given a value than we use is required function but if we set default values to the prop than it will pass the default 
    title:PropTypes.string,
    aboutText: PropTypes.string
}
// Here we are applying a check that we cant send the title and about text the value other than string 

Navbar.defaultProps= {
    title: "Set title here",
    aboutText: " about text here"
}
// Here we are setting the default values to the props saying that if we dont pass any value to the component than it will send these defalut value to it
