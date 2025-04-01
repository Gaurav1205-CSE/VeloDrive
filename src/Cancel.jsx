import React, { useState, useEffect } from 'react';

// CSS styles for the Cancel component
const styles = {
    cancelMessage: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.5s, fadeOut 0.5s 2.5s forwards', // Added fadeOut animation
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: '#e74c3c', // Red color for cancellation
        fontSize: '24px',
        marginBottom: '10px',
    },
    paragraph: {
        color: '#666',
        fontSize: '18px',
    },
    crossmark: {
        width: '50px',
        height: '50px',
        marginBottom: '20px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#e74c3c', // Red color for cancellation
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.5)',
        },
        to: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
        },
    },
    '@keyframes fadeOut': {
        from: {
            opacity: 1,
        },
        to: {
            opacity: 0,
        },
    },
};

const Cancel = () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const handleHomeRedirect = () => {
        window.location.href = '/'; // Redirect to home page
    };

    if (!showMessage) return null;

    return (
        <div style={styles.cancelMessage}>
            <svg style={styles.crossmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
            </svg>
            <h1 style={styles.heading}>Payment Canceled</h1>
            <p style={styles.paragraph}>Your payment has been canceled. Please try again.</p>
            <button style={styles.button} onClick={handleHomeRedirect}>Go to Home</button>
        </div>
    );
};

export default Cancel;