import React, { useState, useEffect } from 'react';

// CSS styles for the Success component
const styles = {
    successMessage: {
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
        color: '#2ecc71', // Green color for success
        fontSize: '24px',
        marginBottom: '10px',
    },
    paragraph: {
        color: '#666',
        fontSize: '18px',
    },
    checkmark: {
        width: '50px',
        height: '50px',
        marginBottom: '20px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#2ecc71', // Green color for success
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

const Success = () => {
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
        <div style={styles.successMessage}>
            <svg style={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
            </svg>
            <h1 style={styles.heading}>Payment Successful!</h1>
            <p style={styles.paragraph}>Thank you for your payment. Your transaction has been completed.</p>
            <button style={styles.button} onClick={handleHomeRedirect}>Go to Home</button>
        </div>
    );
};

export default Success;