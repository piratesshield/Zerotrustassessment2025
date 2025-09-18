
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-center py-4 no-print">
            <div className="container mx-auto px-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Developed with ❤️ & 🤖 by <a href="https://www.linkedin.com/in/piratesshield/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Piratesshield</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;