import './header.css'
import { TypeAnimation } from 'react-type-animation';
export function Header() {
    return (
        <header className="container" id="header">
            <div id="fast-presentation">
                <div id="text">
                    <div id="text-animated">
                        <h1>Hello, <br></br>I'm Diego Duarte</h1>
                        <TypeAnimation
                            sequence={[
                                "A Backend Developer",
                                1500
                            ]}
                            wrapper="span"
                            speed={20}

                            style={{ fontSize: '40px', color: "#12AB7A" }}
                        />
                    </div>

                    <p>
                        I like to solve problems, desing and write code for the backend side of any application, 
                        my goal is look for better tailored solutions using software tools
                    </p>
                </div>

                <a className="fw-bold fs-5" href="/cv.pdf" download={"cv.pdf"} aria-disabled="true">
                    <button type="button" id="cvButton">
                        Download CV
                    </button>
                </a>

            </div>
            <div id="img">
                <img className='img-fluid' src="/diego.png" alt="" />
            </div>
        </header>
    )
}