import React from 'react'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <React.Fragment>
        <div className="div1">
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" id="hd" href="/">INTOT</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/logn" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/login.png" alt="" />&nbsp; login</Link>
            </li>
            <li className="nav-item"><Link to="/sign" style={{textDecoration:"none",color:"white"}}>
              <img src="project/images/signup.png" alt="" />&nbsp; Sign Up</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><img src="project/images/search-icon.png" alt="" />
              </a>
            </li>
            <li className="nav-item bei">
<div id="myNav" className="overlay">

  <a href="/" className="closebtn" onClick="closeNav()">&times;</a>

  <div className="overlay-content">
    <a href="index.html">Home</a>
    <a href="team.html">Team</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="about.html">Contact Us</a>
  </div>

</div>

<span onClick="openNav()"><input type="image" src="project/images/menu.png" alt=""/></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1" style={{backgroundImage: "url(project/images/left-black-arrow.png)"}} id="b1">0.1</button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2" style={{backgroundImage: "url(project/images/right-black-arrow.png)"}} id="b2">0.2</button>
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-3 clmn" >
              <h1>INNOVATIVE<br/><span className="head1">SOLUTION</span></h1><br/>
            <p>We find the best solution for you,we redesign your home and workplaces . Discover why over 5,100 home
              owners trust initiative</p>
              <div><button type="button" className="btn btn-outline-light" id="sbtn">Read More</button>
              </div>
            </div>
            <div className="col-md-7 clmn2">
              <img src="project/images/slider-img.png" className="image1" alt=""/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-3 clmn" >
              <h1>INNOVATIVE<br/><span className="head1">SOLUTION</span></h1><br/>
            <p>We find the best solution for you,we redesign your home and workplaces . Discover why over 5,100 home
              owners trust initiative</p>
              <div><button type="button" className="btn btn-outline-light" id="sbtn">Read More</button>
              </div>
            </div>
            <div className="col-md-7 clmn2">
              <img src="project/images/slider-img.png" className="image1" alt=""/>
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  </div>
  <section>
    <div className="container">
      <h3> WHY INITIATIVE COMBANY</h3>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem</p>
    </div>
    <div className="row" id="aln">
      <div className="col">
        <div className=" card" style={{width: "20.1rem", marginLeft: "2rem",height: "400px"}}>
          <div className="imgdiv"><img src="project/images/card-img-1.png" className="card-img-top" alt="..."/></div>
          <div className="card-body">
            <h4 style={{textAlign: "center"}}>10 YEARS EXPERIENCE</h4>
            <p className="card-text"> Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
              nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          </div>
        </div>
        <div className="divbtn"><a href="/" className="btNn">Read More</a></div>
      </div>
      <div className="col">
        <div className=" card" style={{width: "19rem",marginLeft: "2rem", height: "400px"}}>
          <div className="imgdiv"><img src="project/images/card-img-2.png" className="card-img-top crd2" alt="..."/></div>
          <div className="card-body">
            <h4 style={{textAlign: "center"}}>A PRO ARCHITECTS TEAM</h4>
            <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
              nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          </div>
        </div>
        <div className="divbtn"><a href="/" className="btNn">Read More</a></div>
      </div>
      <div className="col">
        <div className=" card" style={{width: "20rem",marginRight:"rem", height: "400px"}}>
          <div className="imgdiv">
            <img src="project/images/card-img-3.png" className="card-img-top" alt="..."/>
          </div>
          <div className="card-body">
            <h4 style={{textAlign: "center"}}>1000+ HAPPY CUSTOMERS</h4>
            <p className="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
              nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          </div>
        </div>
        <div className="divbtn"><a href="/" className="btNn">Read More</a></div>
      </div>
    </div>
  </section>
  <section>
    <div className="container" style={{marginTop: "200px"}}>
      <h4>OUR PORTFOLIO</h4>
      <p style={{alignItems: "center"}}>It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem</p>
    </div>
    <div className="row" style={{paddingLeft: "100px",paddingRight: "70px"}}>
      <div className="col-md-8 "><img src="project/images/portfolio-img-1.png" className="cln8" alt=""/></div>
      <div className="col-md-4"><img src="project/images/portfolio-img-2.jpg" alt="" /></div>
      <div className="col-md-4" style={{paddingTop: "50px"}}><img src="project/images/portfolio-img-3.png" alt=""/></div>
      <div className="col-md-8 " style={{paddingTop: "50px"}}><img src="project/images/portfolio-img-4.png" className="cln8" alt=""/></div>

    </div>
  </section>

  <section style={{marginTop: "100px"}}>
    <div className="container">
      <h4>OUR TEAM</h4>
      <p>It is a long established fact that a reader will be distracted by the readable</p>
    </div>
    <div className="row" style={{marginLeft: "180px",marginRight: "180px"}}>
      <div className="col">
        <div className="card" style={{width: "13rem",border: "0px",height: "446px",paddingTop: "30px"}}>
          <img src="project/images/team-1.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{textAlign: "center",paddingTop: "30px"}}>
            <h5 className="card-title">JOHN DOE</h5>
            <h6>CEO - DESIGNER</h6>
            <div className="span2">Follow On</div>
            <div><a href="/" className="butn"><img src="project/images/facebook-logo-button.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/twitter-logo-button.png" alt=""/>&nbsp;&nbsp;<img src="project/images/linkedin.png"alt=""/>&nbsp;&nbsp;<img
                  src="project/images/instagram.png" alt=""/></a></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "13rem",border: "0px",height: "446px",paddingTop: "30px"}}>
          <img src="project/images/team-2.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{textAlign: "center",paddingTop: "30px"}}>
            <h5 className="card-title">SANDY DOE</h5>
            <h6>CEO - DESIGNER</h6>
            <div className="span2">Follow On</div>
            <div><a href="/" className="butn"><img src="project/images/facebook-logo-button.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/twitter-logo-button.png" alt=""/>&nbsp;&nbsp;<img src="project/images/linkedin.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/instagram.png" alt=""/></a></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "13rem",border: "0px",height: "446px",paddingTop: "30px"}}>
          <img src="project/images/team-3.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{textAlign: "center",paddingTop: "30px"}}>
            <h5 className="card-title">ALEXI DOE</h5>
            <h6>CEO - DESIGNER</h6>
            <div className="span2">Follow On</div>
            <div><a href="/" className="butn"><img src="project/images/facebook-logo-button.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/twitter-logo-button.png" alt=""/>&nbsp;&nbsp;<img src="project/images/linkedin.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/instagram.png" alt=""/></a></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "13rem",border: "0px",height: "446px",paddingTop: "30px"}}>
          <img src="project/images/team-4.png" className="card-img-top" alt="..."/>
          <div className="card-body" style={{textAlign: "center",paddingTop: "30px"}}>
            <h5 className="card-title">JOHN DOE</h5>
            <h6>CEO - DESIGNER</h6>
            <div className="span2">Follow On</div>
            <div><a href="/" className="butn"><img src="project/images/facebook-logo-button.png" alt=""/>&nbsp;&nbsp;<img
                  src="project/images/twitter-logo-button.png"alt=""/>&nbsp;&nbsp;<img src="project/images/linkedin.png"alt=""/>&nbsp;&nbsp;<img
                  src="project/images/instagram.png"alt=""/></a></div>
          </div>
        </div>
      </div>
    </div>
    <div className="divhr">
      <hr style={{color: "#c4d70f",height: "2px" }}/>
    </div>
  </section>
    </React.Fragment>
  )
}

