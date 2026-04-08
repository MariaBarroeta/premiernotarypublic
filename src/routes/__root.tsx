import React from 'react';
import siteContent from '../data/site-content';
import '../styles.css';

const RootRoute = () => {
    return (
        <div className="root-route">
            <header>
                <h1>Premier Notary Public</h1>
            </header>
            <main>
                <p>Your trusted notary public service</p>
                <h2>Our Services</h2>
                <ul>
                    <li>Affidavits</li>
                    <li>Power of Attorney</li>
                    <li>Notary Services</li>
                </ul>
            </main>
            <footer>
                <p>&copy; 2026 Premier Notary Public</p>
            </footer>
        </div>
    );
};

export default RootRoute;
