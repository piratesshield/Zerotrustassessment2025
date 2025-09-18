
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-800 text-white shadow-md no-print">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    <span role="img" aria-label="lock">🔐</span> Zero Trust Security Assessment
                </h1>
                <p className="text-sm text-slate-300 mt-1">Enterprise-grade security posture evaluation for CISOs</p>
            </div>
        </header>
    );
};

export default Header;
