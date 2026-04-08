import React from 'react';
import siteContent from '../data/site-content';
import '../styles.css';

const RootRoute = () => {
    const { title, description, services, contact, hours } = siteContent;

    return (
        <div className="root-route">
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <p>{description}</p>
                <h2>Our Services</h2>
                <ul>
                    {services.map((service, index) => (<li key={index}>{service}</li>))}
                </ul>
                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p>{contact}</p>
                </section>
                <section className="hours">
                    <h2>Working Hours</h2>
                    <p>{hours}</p>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Premier Notary Public</p>
            </footer>
        </div>
    );
};

export default RootRoute;