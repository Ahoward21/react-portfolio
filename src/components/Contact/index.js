import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }



    return (
        <section>
            <h2 className="contact-title">Contact Me</h2>
            <div className="content">
                <div className="my-2 contact-txt">
                    <p className="contact-message">If you would like to get in contact with me, feel free to send me an
                        <a href="mailto:anhoward1988@gmail.com"> email </a>
                        or message me on
                        <a href="https://github.com/ahoward21" target="_blank"> GitHub </a>
                        or
                        <a href="https://www.linkedin.com/in/adam-n-howard/" target="_blank"> LinkedIn</a>.
                    </p>
                </div>
            </div>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='name-wrap'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='email-wrap'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='message-wrap'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className='btn-wrap'>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </section>
    )
}

export default ContactForm;