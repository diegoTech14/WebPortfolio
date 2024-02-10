import './header.css'
import { TypeAnimation } from 'react-type-animation';
export function Header() {
    return (
        <header className="container" id="header">
            <div id="fast-presentation">
                <div id="text">
                    <div id="text-animated">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "HELLO, I'M DIEGO DUARTE",
                            1500, // wait 1s before replacing "Mice" with "Hamsters"

                            'A BACKEND DEVELOPER',
                            1500,
                            
                            "HELLO, I'M DIEGO DUARTE",
                            1500, // wait 1s before replacing "Mice" with "Hamsters"

                        ]}
                        wrapper="span"
                        speed={40}
                        style={{ fontSize: '2em', display: 'inline-block'}}
                    />
                    </div>

                    <p>I really like solving new challenges,<br/> I enjoy coding 
                    the best solution for your needs. </p>
                </div>






                    <a className="nav-link fw-bold fs-5" href="/cv.pdf" download={"cv.pdf"} aria-disabled="true">
                    <button type="button" id="cvButton" className="ps-5 pe-5 pt-3 pb-3 mt-4"> 
                        Download CV
                    </button>
                    </a>



            </div>
            <div id="img">
                <img src="/diegoDev.gif" alt="" />
            </div>
        </header>
    )
}