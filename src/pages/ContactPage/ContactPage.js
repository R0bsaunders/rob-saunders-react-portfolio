import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { contactJumbo } from './ContactJumbo';
import './ContactPage.css'

function ContactPage() {
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Form Submitted`);
    }
  return (
    <>
        <section id="hero">
            <Jumbotron 
            h1={contactJumbo.jumbotronH1} 
            p={contactJumbo.jumbotronP} />

        </section>

        <div className="contactWrapper">
            <h2>How About Them Apples</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                    <label>
                        <p>Email</p>
                        <input name="email" />
                    </label>
                    <label>
                        <p>Message</p>
                        <input name="message" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
  </>
  );
};

export default ContactPage;