import './navbar.css';

export function Navbar(){
return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
    <button id="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <div class="container-fluid d-flex align-items-center justify-content-between">
    <div className='d-flex align-items-center'>
      <div>
          <img src="../../public/me1.jpg" alt="" id="meImg"/>
        </div>
        <div class="ms-3">
          <a class="navbar-brand" href="#">DIEGO DUARTE FERNÁNDEZ</a>
      </div>
    </div>
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
            <a class="nav-link fw-bold" href="#nav">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#about">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#projects">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="#contact" aria-disabled="true">CONTACT</a>
          </li>
      </ul>
      </div>
    </div>
  </div>
</nav>

)
}