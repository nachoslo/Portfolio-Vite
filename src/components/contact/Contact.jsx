import { useContext, useRef, useState } from "react";
import LangContext from "../../context/LangContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { lang } = useContext(LangContext);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const form = useRef();
  const submit = useRef();

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /\S+@\S+\.\S+/;
  let regexMsg = /^.{1,255}$/;

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "required";
    } else if (!regexName.test(formData.user_name)) {
      validationErrors.user_name = "invalid";
    }

    if (!formData.user_email.trim()) {
      validationErrors.user_email = "required";
    } else if (!regexEmail.test(formData.user_email)) {
      validationErrors.user_email = "invalid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "required";
    } else if (!regexMsg.test(formData.message)) {
      validationErrors.message = "invalid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      submit.current.disabled = true;
      console.log(submit.current.textContent);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAIL_USER_ID
        )
        .then(
          () => {
            submit.current.textContent = lang.contact.form.sent;
            setTimeout(() => {
              submit.current.disabled = false;
              submit.current.textContent = lang.contact.form.send;
            }, 3000);
          },
          (err) => {
            submit.current.textContent = "Error";
            console.log(err);
            setTimeout(() => {
              submit.current.disabled = false;
              submit.current.textContent = lang.contact.form.send;
            }, 3000);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>
              {lang.contact.title.span1}
              <span>{lang.contact.title.span2}</span>
            </h2>
            <div className="contact-data">
              <h3>{lang.contact.subtitle}</h3>
              <div className="contact-btns">
                {/* LINKEDIN ICON */}
                <a
                  className="linkedin-btn"
                  href="https://www.linkedin.com/in/ignacio-baez-96bbb9252/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="30" height="30" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                {/* GITHUB ICON */}
                <a
                  className="github-btn"
                  href="https://github.com/nachoslo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="32" height="32" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                {/* MAIL ICON */}
                <a
                  href="mailto:ignaciomanuelbaez@hotmail.com"
                  className="mail-btn"
                >
                  <svg width="30" height="30" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </a>
                {/* PHONE ICON */}
                <a href="tel:+542234214324" className="phone-btn">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                    className="phone-btn"
                  >
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* FORM */}
          <form
            ref={form}
            method="post"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-text">
              <label htmlFor="user_name">{lang.contact.form.name}:</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder={lang.contact.form.name}
                onChange={handleChange}
              />
              {errors.user_name === "required" ? (
                <span>{lang.contact.form.nameRequired}</span>
              ) : null}
              {errors.user_name === "invalid" ? (
                <span>{lang.contact.form.nameInvalid}</span>
              ) : null}
            </div>
            <div className="form-email">
              <label htmlFor="user_email">{lang.contact.form.email}:</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder={lang.contact.form.email}
                onChange={handleChange}
              />
              {errors.user_email === "required" ? (
                <span>{lang.contact.form.emailRequired}</span>
              ) : null}
              {errors.user_email === "invalid" ? (
                <span>{lang.contact.form.emailInvalid}</span>
              ) : null}
            </div>
            <div className="form-msg">
              <label htmlFor="message">{lang.contact.form.message}:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={lang.contact.form.message}
                onChange={handleChange}
              ></textarea>
              {errors.message === "required" ? (
                <span>{lang.contact.form.messageRequired}</span>
              ) : null}
              {errors.message === "invalid" ? (
                <span>{lang.contact.form.messageInvalid}</span>
              ) : null}
            </div>
            <button type="submit" id="button" ref={submit}>
              {lang.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
