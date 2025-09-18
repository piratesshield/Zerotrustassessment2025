
import React from 'react';

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    answeredCount: number;
    skippedCount: number;
    totalQuestions: number;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel, answeredCount, skippedCount, totalQuestions }) => {
    const unansweredCount = totalQuestions - answeredCount;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 no-print">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-lg w-full p-8 m-4 transform transition-all animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Finish Assessment?</h2>
                <div className="text-slate-600 dark:text-slate-300 space-y-4 mb-8">
                    <p>You have not answered all questions. Your final score will be calculated based only on the questions you've answered.</p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-md border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200">
                        <p className="font-semibold">Summary:</p>
                        <ul className="list-disc list-inside text-sm mt-1">
                            <li>{answeredCount} / {totalQuestions} Answered</li>
                            <li>{unansweredCount} Unanswered (including {skippedCount} explicitly skipped)</li>
                        </ul>
                    </div>
                    <p className="font-semibold">Are you sure you want to proceed and view your results?</p>
                </div>
                <div className="flex justify-end gap-4">
                    <button 
                        onClick={onCancel}
                        className="px-6 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-semibold transition-colors"
                    >
                        Return to Assessment
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-md"
                    >
                        Yes, Finish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
