import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { PageTitle } from "../../Elements";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wenwent",
        "template_r4n7lw6",
        form.current,
        "y6eomlyE_s3p8eJs8"
      )
      .then(
        (result) => {
          toast(`${result.text}, I will get back to you ASAP!`);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <PageTitle title="Get in Touch" />
        <div className="form">
          <div className="col-md-9">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              className="contact-form mt-6"
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-default">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <div className="spacer" data-height="96"></div>
    </section>
  );
};

export default Contact;
