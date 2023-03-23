import React from 'react';
import { useState } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { contactJumbo } from './ContactJumbo';
import './ContactPage.css';

function ContactPage() {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Function to deal with form submission
    const handleSubmit = event => {

        event.preventDefault();
        setSubmitting(true);
    
        // Simulating an API Call
        setTimeout(() => {
        setSubmitting(false);

        // Alert stating successful form submit after below timeout
        alert(`Form submitted - speak soon!`)

        }, 3000)
    };

  return (
    <>
        <section id="hero">

            <Jumbotron 
            h1={contactJumbo.jumbotronH1} 
            p={contactJumbo.jumbotronP} />

        </section>

        <div className="contactWrapper">

            <div id="contactDetails">

                <div class="contactCards">

                    <a href="mailto:me@rob-saunders.co.uk">
                        <img src="./assets/images/email-icon.png" alt="Email Icon" />
                    </a>

                    <a href="mailto:me@rob-saunders.co.uk"><p>me@rob-saunders.co.uk</p></a>

                </div>

                <div class="contactCards">

                    <a href="tel:07530893607">
                        <img src="./assets/images/phone-icon.png" alt="Phone Icon"/>
                    </a>

                    <a href="tel:+447530893607"><p>07530 893 607</p></a>

                </div>

                <div class="contactCards">

                    <a href="https://www.linkedin.com/in/r0bsaunders" target="_blank">
                        <img src="./assets/images/linkedin-icon.png" alt="LinkedIn Icon"/>
                    </a>

                    <a href="https://www.linkedin.com/in/r0bsaunders" target="_blank"><p>LinkedIn</p></a>
                
                </div>

                <div class="contactCards">

                    <a href="https://github.com/R0bsaunders" target="_blank">
                        <img src="./assets/images/iconmonstr-github-2-72.png" alt="GitHub Icon"/>
                    </a>

                    <a href="https://github.com/R0bsaunders" target="_blank"><p>GitHub</p></a>
                
                </div>
            </div>

            <br></br>

            <h2>Leave me a message and I'll come back to you ASAP</h2>

            {submitting && <div>Submitting Form...</div>}
                
            <form onSubmit={handleSubmit}>

                <fieldset>

                    <label>
                        <p>Your Name</p>
                        <input name="name" onChange={setUserName}/>
                    </label>

                    <label>
                        <p>Your Email</p>
                        <input name="email"  onChange={setUserEmail}/>
                    </label>

                    <label>
                        <p>What's your message?</p>
                        <textarea name="message"  onChange={setUserMessage}/>
                    </label>

                </fieldset>

                <button type="submit" className="btn btn-primary btn-lg navCTA">Submit</button>
            </form>
        </div>
    </>
  );
};

export default ContactPage;