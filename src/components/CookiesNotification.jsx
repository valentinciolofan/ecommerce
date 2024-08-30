import React, { useState, useEffect } from 'react';

const CookiesNotification = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [hideNotification, setHideNotification] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const userChoice = localStorage.getItem('cookiesAccepted');
        if (!userChoice) {
            setShowNotification(true); // Show notification if no choice is made
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setHideNotification(true);
        setTimeout(() => setShowNotification(false), 500); // Wait for animation to finish
    };

    const handleReject = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setHideNotification(true);
        setTimeout(() => setShowNotification(false), 500); // Wait for animation to finish
    };

    if (!showNotification) {
        return null; // Don't render the notification if user has already made a choice
    }

    return (
        <div className={`cookies-notification-container ${hideNotification ? 'slide-out' : 'slide-in'}`}>
            <div className="cookies-notification-wrapper">
                <h3>Cookies Settings</h3>
                <p>
                    We use cookies and similar technologies to help personalize content, 
                    tailor and measure ads, and provide a better experience. 
                    By clicking accept, you agree to this, as outlined in our <a href='/privacy-policy'>Privacy Policy</a>.
                </p>
                <div className="cookies-buttons">
                    <button type="button" onClick={handleAccept}>Accept</button>
                    <button type="button" onClick={handleReject}>Reject</button>
                </div>
            </div>
        </div>
    );
};

export default CookiesNotification;
