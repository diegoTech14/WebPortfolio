import './header.css'
import { TypeAnimation } from 'react-type-animation';
export function Header() {
    return (
        <header className="container" id="header">
            <div id="fast-presentation">
                <div id="text">
                    <div id="text-animated">
                        <h1>Hello, I'm Diego Duarte Fernández</h1>
                        <TypeAnimation
                            sequence={[
                                "A Backend Developer",
                                1500
                            ]}
                            wrapper="span"
                            speed={20}

                            style={{ fontSize: '30px', color: "#6F3ADC" }}
                        />
                    </div>

                    <p>
                        I like to solve problems, desing and write code for the backend side of any application, 
                        my goal is to provide you the best solution for your needs
                    </p>
                </div>

                <a className="fw-bold fs-5" href="/cv.pdf" download={"cv.pdf"} aria-disabled="true">
                    <button type="button" id="cvButton">
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