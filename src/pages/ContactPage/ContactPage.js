import React from 'react'
import { useState } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { contactJumbo } from './ContactJumbo';
import './ContactPage.css'

function ContactPage() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
    
        // Simulating an API Call
        setTimeout(() => {
        setSubmitting(false);
        // Alert stating successful form submit
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
                        <p>What's your message</p>
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