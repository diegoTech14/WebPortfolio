import './myProjects.css'
export function Projects (){
    return (
        <div class="projects" id="projects">
          
        <div class="d-flex flex-column justify-content-center align-items-center" id="titleProjects">
          <h1 class="fw-bold">PROJECTS</h1>
          <p class="fs-4 text-center" id="subTitleProjects">Here you will find some of the personal and clients projects that I created</p>
        </div>
        <div id="main_project">
          <div id="project" class="">
            <div class="" id="projectImg">
              <img src="../../public/funko.png" alt=""/>
            </div>
            <div class="pDesc">
              <h2>Funko Pop Cart Shop</h2>
              <p>This is a Funko pop shop cart in which you can manage the inventory, users, and add products to the cart.</p>
              <button type="button" class="ps-5 pe-5 pt-3 pb-3 mt-4 bg-warning border-0"><span class="fs-5 fw-bold">More Details</span></button>
            </div>
          </div>
          <div id="project" class="">
            <div class="" id="projectImg">
              <img src="../../public/gandoca.png" alt=""/>
            </div>
            <div class="pDesc">
              <h2>Gandoca Tours Web Page</h2>
              <p>This is a web app made in Wordpress and my rol in this project was support the page, fix some errors and create new content and sections. 
                You can see it <a href="https://www.gandocatours.com/" target='_blank' className='fw-bold' id="hyperlinkWeb">here</a>
              </p>
            </div>
          </div>
        </div>
      
      
      
      <div>
      <div class="d-flex flex-column justify-content-center align-items-center">
          <h1 class="mt-5 fw-bold text-center">OTHER PROJECTS / EXPERIENCES</h1>
          <p class="mt-2 fs-4 text-center" id="subTitleProjects">Here you will find some other projects like research and some experiences like colaborate with Drupal Camp and others</p>
        </div>

        <div>
        <div id="main_projects">
          <div id="experience" class="">
            <div class="" id="imgDiv">
              <img id="expImg" src="../../public/summer.png" alt=""/>
            </div>
            <div class="pDesc">
              <h2>Summer School Costa Rica</h2>
              <p>This was the first HCI event in Costa Rica where my team and I designed and developed a solution <br />
              to the problem of exploitation of natural resources and we win the first place in this event in 2022</p>
              <button type="button" class="ps-5 pe-5 pt-3 pb-3 mt-4 bg-warning border-0"><span class="fs-5 fw-bold">More Details</span></button>
            </div>
          </div>

          <div id="experience" class="">
            <div class="" id="imgDiv">
              <img id="expImg" src="../../public/drupal.png" alt=""/>
            </div>
            <div class="pDesc">
              <h2>DrupalCamp 2022</h2>
              <p>This was the first Drupal Camp at the Universidad de Costa Rica Carribean headquarters where<br />I participated as 
              speaker assistant and I did the design of the logotype and the graphic brand</p>
            </div>
          </div>
        
        </div>
        </div>
      </div>

      </div>
    )
}