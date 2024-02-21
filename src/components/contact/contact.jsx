import './contact.css';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { Toaster, toast } from 'sonner';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_flhnw2p", "template_wpn05ig", form.current,
      "hH_Uin8p0_gmfypr3").then(
        (result) => {
          toast.success("Email Sent Successfully", {
            description: "Thanks for contact me",
            style: {
              background: "green",
              color: "white"
            }
          })

        },
        (error) => {
          toast.error("Email Was Not Sent", {
            description: `Something Happened Wrong, try again please...`,
            style: {
              background: "red",
              color: "white"
            }
          })
        });
  }
  <Toaster position='bottom-left' />
  return (
    <div id="contact-container">

      <div id="info-contact">
        <div>
          <h1>Let's connect!</h1>
          <br />
          <h4>Thank you very much for watch my portfolio, contact me
            through an Email and let's talk about a new opportunity to combine knowledge, create satisfactory software and experiences</h4>
          <br />
          <h5><span>I'll be excited to help your team and your company!</span> 🧑🏽‍💻</h5>
        </div>
        <div>
          <img src="/logo2.png" alt="" />
        </div>

      </div>
      <div className="mt-5 mb-5" id="contact">
        <div className="">
          <form ref={form} onSubmit={sendEmail} id="formContact">
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Complete name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                aria-describedby="name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Your E-mail
              </label>
              <input
                type="email"
                class="form-control"
                id="fromEmail"
                name="fromEmail"
                aria-describedby="fromEmail"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                id="textArea"
                name="description"
                rows={6}
              />
            </div>
            <button type="submit" className="btn rounded-1 fw-bold w-100" id="button-email">
              Submit
            </button>
          </form>
        </div>

        <div id="personal" className=" d-flex justify-content-center align-items-center flex-column">
          <div id="socialNetworks" className="d-flex justify-content-center">
            <div className='m-4'>
              <a href="https://www.linkedin.com/in/diego-duarte-fern%C3%A1ndez-165445180/"><i className="bi bi-linkedin"></i></a>
            </div>
            <div className='m-4'>
              <a href="https://github.com/diegoTech14"><i className="bi bi-github"></i></a>
            </div>
          </div>

        </div>
      </div>
      <Toaster />
    </div>
  );
}; export default Contact