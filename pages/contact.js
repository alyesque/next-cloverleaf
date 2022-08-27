import React from "react";
import { useState } from "react";
import Link from "next/dist/client/link";
import { send } from "emailjs-com";
import Head from "next/dist/shared/lib/head";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
    phone: "",
    subject: "",
  });

  const onSubmit = (e) => {
    send(
      "service_msi0l74",
      "template_i4vm6ka",
      toSend,
      "user_r0pEsx7D87vWVJvvuiqsE"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    alert("Message sent!");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <Head>
        <title>Cloverleaf Math - Contact</title>
      </Head>
      <div className="contactInfo">
        <h1>Get In Touch</h1>
        <p>
          I’d love to answer any questions you may have, or schedule a free
          consultation to see if I can help your student. Please fill out an
          inquiry form, or if you prefer, you can reach me at
          <strong>
            {" "}
            <a href="mailto:connect@cloverleafmath.com" className="emailLink">
              connect@cloverleafmath.com
            </a>
          </strong>
          .
          <br />
          <br />
          You can also give me a call or text at <strong>(541) 484-9367</strong>
          . I look forward to hearing from you!
        </p>
      </div>
      <div className="formflex">
        <img
          src="./images/contact.png"
          className="formflexcontent formimg"
          alt="illustrated image of email and communication icons"
        />
        <form
          className="formflexcontent"
          onChange={handleChange}
          onSubmit={onSubmit}
        >
          <h2>
            {" "}
            Interested in a consultation, or want to get started with tutoring?
            Fill out this form to get in touch with me!
          </h2>
          <span>Name:</span> <span>Email:</span>
          <input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <span>Phone:</span> <span>Subject:</span>
          <input
            type="text"
            name="subject"
            value={toSend.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={toSend.phone}
            onChange={handleChange}
          />
          <span className="gridcenter">Message:</span>
          <textarea
            type="text"
            rows="8"
            cols="50"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
