
import React, { useMemo } from 'react';
import { Section } from '../types';

interface ProgressBarProps {
    currentSection: Section;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentSection }) => {
    const progress = useMemo(() => {
        switch (currentSection) {
            case 'company': return { step: 1, width: '33%' };
            case 'assessment': return { step: 2, width: '66%' };
            case 'results': return { step: 3, width: '100%' };
            default: return { step: 0, width: '0%' };
        }
    }, [currentSection]);

    if (progress.step === 0) return null;

    return (
        <div className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-10 no-print">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Assessment Progress</span>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Step {progress.step} of 3</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: progress.width }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
