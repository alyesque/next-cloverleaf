import React from "react"
import { useState } from 'react'
import { send } from 'emailjs-com'



function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        phone: '',
        subject: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_msi0l74',
            'template_i4vm6ka',
            toSend,
            'user_r0pEsx7D87vWVJvvuiqsE'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };



    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <main>
            <div className="formflex">
                <img src='./images/contact.png' className="formflexcontent formimg" />
                <form className="formflexcontent" onSubmit={onSubmit} onChange={handleChange}>
                    <h2> Interested in a consultation?  Have questions about our services?  We're happy to help!</h2>
                    <span>Name:</span> <span>Email:</span>
                    <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} />
                    <input type="text" name="reply_to" value={toSend.reply_to}
                        onChange={handleChange} />
                    <span>Phone:</span> <span>Subject:</span>
                    <input type="text" name="subject" value={toSend.subject} onChange={handleChange} />
                    <input type="text" name="phone" value={toSend.phone} onChange={handleChange} />
                    <span className="gridcenter">Message:</span>
                    <textarea type="text" rows="8" cols="50" name='message' value={toSend.message}
                        onChange={handleChange}>
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        </main>

    )
}

export default Contact