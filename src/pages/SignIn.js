
import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SignIn() {

  const [input, setInput] = useState ({
 fname :" ",
 mail : " ",
 phone :" ",
 pass :" "
  })
  function handleChange(event) {
    const {name , value}= event.target;
    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value

      }
    })
  }
  function handleClick(event){
    event.preventDefault();
    const newNote = {
      fname: input.fname,
      mail : input.mail,
     phone : input.phone,
     pass : input.pass
    }
    axios.post('http://localhost:3001/create' , newNote)
  }
  return (
    <React.Fragment>
        <div className="div123">
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" id="hd">INTOT</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/.png" alt="" />&nbsp; Home</Link>
            </li>
            <li classNameName="nav-item"><Link to="/logn" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/login.png" alt="" />&nbsp; login</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> <img src="project/imagessearch-icon.png" alt="" />
              </a>
            </li>
            <li className="nav-item">
<div id="myNav" className="overlay">

  <a href="/" className="closebtn" onClick="closeNav()">&times;</a>

  <div className="overlay-content">
    <a href="index.html">Home</a>
    <a href="team.html">Team</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="about.html">Contact Us</a>
  </div>

</div>

<span onClick="openNav()"><input type="image" src="project/imagesmenu.png" alt=""/></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  <section>
    <div className="container" style={{marginTop: "100px" }}>
      <p>Don’t Hesitate To Connect With Us</p>
      <div style={{ marginTop:"-20px"}}>
        <h2>Sign UP!!</h2>
      </div>
    </div>
    <div className="row" >
      <div className="col" style={{ paddingLeft: "100px",paddingTop: "50px"}}>
        <form action="" method="" style={{border:"1px solid #ccc"}}>

          Name<br/>
          <div><input type="text" name="fname" value={input.fname} className="inputype" autoComplete="off" onChange={handleChange}/></div>
          Email<br/>
          <div><input type="text" name="mail" value={input.mail} className="inputype" autoComplete="off" onChange={handleChange}/></div>
          Phone<br/>
          <div><input type="text" name="phone" value={input.phone} className="inputype" autoComplete="off" onChange={handleChange}/></div>
          Password
          <div><input type="password" name="pass" value={input.pass} className="inputype" onChange={handleChange}/></div>
          <div style={{ paddingTop: "23px"}}><button type="submit" className="butn2" onClick={handleClick}>
              Submit
            </button><br/>
            <span className="psw">Already Have an Account<Link to="/logn"style={{textDecoration:"none"}}>&nbsp; sign Up</Link></span></div>
        </form>
      </div>
      <div className="col">
        <img src="project/images/form-img.png" className="frmimage" alt="not"/>
      </div>

    </div>

  </section>
    </React.Fragment>
  )
}
