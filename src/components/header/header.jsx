import './header.css'
export function Header(){
    return  (

        <header className="container d-flex justify-content-between align-items-center p-4">
        <div className="fast-presentation">
            <h1>HEY, I'M DIEGO DUARTE</h1>
            <br/>
            <p>A Backend Web Developer focused on designing and building <br/>
                the best solution for your Application. </p>

            <button type="button" className="ps-5 pe-5 pt-3 pb-3 mt-4 bg-warning border-0"><span className="fs-5 fw-bold">PROJECTS</span></button>
            <button type="button" className="ps-5 pe-5 pt-3 pb-3 mt-4 bg-white border-1" id="cvButton">                
                <a className="nav-link fw-bold fs-5" href="../../../public/cv.pdf" download={"cv.pdf"} aria-disabled="true">
                    Get CV
                </a></button>
        </div>
        <div id="img">
            <img src="../../src/assets/imgs/api.png" alt=""/>
        </div>
    </header>
    )
}