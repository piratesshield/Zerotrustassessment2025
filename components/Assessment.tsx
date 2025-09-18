
import React, { useState, useMemo } from 'react';
import { AppState } from '../types';
import { assessmentData } from '../constants/assessmentData';

interface AssessmentProps {
    appState: AppState;
    setAnswer: (questionId: string, optionIndex: number) => void;
    skipQuestion: (questionId: string) => void;
    onFinish: () => void;
}

const PillarNavigation: React.FC<{ pillars: string[], currentPillarIndex: number, answers: AppState['answers'], onPillarClick: (index: number) => void }> = ({ pillars, currentPillarIndex, answers, onPillarClick }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 h-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Assessment Progress</h3>
        <nav>
            <ul>
                {pillars.map((pillarName, index) => {
                    const pillar = assessmentData.pillars[pillarName];
                    const answeredCount = pillar.questions.filter(q => answers[q.id] !== undefined).length;
                    const totalQuestions = pillar.questions.length;
                    const isCompleted = answeredCount === totalQuestions;
                    const isCurrent = index === currentPillarIndex;

                    return (
                        <li key={pillarName}>
                            <button
                                onClick={() => onPillarClick(index)}
                                className={`w-full text-left p-3 my-1 rounded-md flex items-center gap-3 transition-colors duration-200 ${
                                    isCurrent ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`}
                            >
                                <span className="text-xl">{pillar.icon}</span>
                                <span className="flex-grow font-medium text-sm">{pillarName}</span>
                                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                                    isCurrent ? 'bg-blue-500' : 'bg-slate-200 dark:bg-slate-600'
                                }`}>
                                    {answeredCount}/{totalQuestions}
                                </span>
                                {isCompleted && <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </div>
);


const QuestionDisplay: React.FC<AssessmentProps & { question: any, isLastQuestion: boolean, onNext: () => void, onPrev: () => void }> = ({ appState, setAnswer, skipQuestion, onFinish, question, isLastQuestion, onNext, onPrev }) => {
    const isFrameworkPillar = question.id.startsWith('framework');
    const hasAnswer = appState.answers[question.id] !== undefined;
    const isSkipped = appState.skippedQuestions.has(question.id);
    const riskColors = {
        'Critical': 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border-red-400/50',
        'High': 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 border-orange-400/50',
        'Medium': 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border-yellow-400/50',
        'Low': 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border-green-400/50',
    };
    
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">{question.description}</p>
            <div className="space-y-3 flex-grow overflow-y-auto pr-2">
                {question.options.map((option: any, index: number) => (
                    <div
                        key={index}
                        onClick={() => setAnswer(question.id, index)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                            appState.answers[question.id] === index
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                                : 'border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                        }`}
                    >
                        <input
                            type="radio"
                            name={question.id}
                            checked={appState.answers[question.id] === index}
                            onChange={() => setAnswer(question.id, index)}
                            className="mt-1 shrink-0"
                        />
                        <div className="flex-grow">
                            <p className="font-medium text-slate-800 dark:text-slate-200">{option.text}</p>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-1.5 border ${riskColors[option.risk]}`}>
                                Risk: {option.risk}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
             {isSkipped && <div className="text-center mt-4 text-sm p-2 bg-yellow-100 dark:bg-yellow-800/30 text-yellow-800 dark:text-yellow-300 rounded-md">This question has been skipped.</div>}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <button onClick={onPrev} className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-bold py-2 px-6 rounded-lg transition duration-300">Previous</button>
                <button onClick={() => skipQuestion(question.id)} disabled={isFrameworkPillar || isSkipped} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">{isSkipped ? 'Skipped' : 'Skip'}</button>
                <button onClick={isLastQuestion ? onFinish : onNext} disabled={!hasAnswer && !isSkipped} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLastQuestion ? 'Finish Assessment' : 'Next'}
                </button>
            </div>
        </div>
    );
};

const QuestionDetails: React.FC<{ question: any }> = ({ question }) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 h-full">
        <div className="mb-6">
            <h4 className="font-semibold mb-2">Category</h4>
            <span className="text-sm bg-slate-100 dark:bg-slate-700 py-1 px-2 rounded-md">{question.category}</span>
        </div>
        <div>
            <h4 className="font-semibold mb-2">Implementation Examples</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-500 dark:text-slate-400">
                {question.examples.map((ex: string, i: number) => <li key={i}>{ex}</li>)}
            </ul>
        </div>
    </div>
);

const Assessment: React.FC<AssessmentProps> = (props) => {
    const [currentPillarIndex, setCurrentPillarIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const pillars = useMemo(() => Object.keys(assessmentData.pillars), []);
    const currentPillarName = pillars[currentPillarIndex];
    const pillarQuestions = assessmentData.pillars[currentPillarName].questions;
    const currentQuestion = pillarQuestions[currentQuestionIndex];
    
    const isLastQuestionOfAll = currentPillarIndex === pillars.length - 1 && currentQuestionIndex === pillarQuestions.length - 1;

    const handleNext = () => {
        if (currentQuestionIndex < pillarQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else if (currentPillarIndex < pillars.length - 1) {
            setCurrentPillarIndex(prev => prev + 1);
            setCurrentQuestionIndex(0);
        }
    };
    
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        } else if (currentPillarIndex > 0) {
            const prevPillarIndex = currentPillarIndex - 1;
            const prevPillarQuestions = assessmentData.pillars[pillars[prevPillarIndex]].questions;
            setCurrentPillarIndex(prevPillarIndex);
            setCurrentQuestionIndex(prevPillarQuestions.length - 1);
        }
    };
    
    const handlePillarClick = (index: number) => {
        setCurrentPillarIndex(index);
        setCurrentQuestionIndex(0);
    };

    return (
        <div className="animate-fadeIn">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">{currentPillarName} <span className="text-2xl">{assessmentData.pillars[currentPillarName].icon}</span></h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    Question {currentQuestionIndex + 1} of {pillarQuestions.length}
                </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                    <PillarNavigation pillars={pillars} currentPillarIndex={currentPillarIndex} answers={props.appState.answers} onPillarClick={handlePillarClick}/>
                </div>
                <div className="lg:col-span-2">
                    <QuestionDisplay {...props} question={currentQuestion} isLastQuestion={isLastQuestionOfAll} onNext={handleNext} onPrev={handlePrev}/>
                </div>
                <div className="lg:col-span-1">
                    <QuestionDetails question={currentQuestion} />
                </div>
            </div>
        </div>
    );
};

export default Assessment;
