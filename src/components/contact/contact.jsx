import './contact.css';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { Toaster, toast } from 'sonner';

export const Contact = ({t}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_flhnw2p", "template_wpn05ig", form.current,
      "hH_Uin8p0_gmfypr3").then(
        (result) => {
          toast.success(t("goodNotifyTitle"), {
            description: t("goodNotifyDesc"),
            style: {
              background: "green",
              color: "white"
            }
          })

        },
        (error) => {
          toast.error(t("badNotifyTitle"), {
            description: t("badNotifyDesc"),
            style: {
              background: "red",
              color: "white"
            }
          })
        });
  }
  <Toaster position='bottom-left' />
  return (
    <div id="contact-container" className='mb-5'>

      <div id="info-contact">
        <div>
          <h1>{t("contactTitle")}</h1>
          <br />
          <h4>{t("contactInfo")}</h4>
          <br />
          <h5><span>{t("contactLegend")}</span> 🧑🏽‍💻</h5>
        </div>
        <div>
          <img src="/logo2.png" alt="" />
        </div>

      </div>
      <div className="mt-5 mb-5" id="contact">
          <form ref={form} onSubmit={sendEmail} id="formContact">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                {t("cName")}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              {t("yEmail")}
              </label>
              <input
                type="email"
                className="form-control"
                id="fromEmail"
                name="fromEmail"
                aria-describedby="fromEmail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
              {t("subject")}
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
              {t("message")}
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
            {t("submit")}
            </button>
          </form>
      </div>
      <Toaster />
    </div>
  );
}; export default Contact