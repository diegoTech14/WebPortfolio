import './navbar.css';

export function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        &nbsp;
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <a className="navbar-brand" href="#header">
          <img src="/me1.jpg" alt="" id="meImg" />
          &nbsp;&nbsp;Diego Duarte Fernández
        </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" id="item">
              <a class="nav-link" href="#header">Home</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#about-container">About Me</a>
            </li>
            <li className="nav-item" id="item">
              <a className="nav-link" href="#contact-container">Contact Me</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>



  )
}