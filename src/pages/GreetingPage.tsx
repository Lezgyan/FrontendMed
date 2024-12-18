
import React from 'react';

export const GreetingPage: React.FC = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to the Database Access Portal</h1>
                <p>
                    Explore, manage, and analyze your data with ease. Start by logging in or creating an account.
                </p>
                <div className="button-group">
                    <button className="button primary">Log In</button>
                    <button className="button secondary">Sign Up</button>
                </div>
            </header>
        </div>
    );
};

export default GreetingPage;