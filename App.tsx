
import React, { useState, useCallback, useMemo, useEffect } from 'react';
// FIX: Import `OverallRiskLevel` type to resolve TypeScript error.
import { AppState, Section, OverallRiskLevel } from './types';
import { assessmentData } from './constants/assessmentData';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import CompanyForm from './components/CompanyForm';
import Assessment from './components/Assessment';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';
import ConfirmationModal from './components/ConfirmationModal';

const getInitialState = (): AppState => ({
    currentSection: 'intro',
    companyInfo: { size: '', industry: '', cloudPlatform: '' },
    answers: {},
    skippedQuestions: new Set(),
    results: null,
    isConfirmationModalOpen: false,
});


const App: React.FC = () => {
    const [appState, setAppState] = useState<AppState>(getInitialState());

    const allPillars = useMemo(() => Object.keys(assessmentData.pillars), []);

    const startAssessment = useCallback((companyInfo: AppState['companyInfo']) => {
        setAppState(prev => ({ ...prev, currentSection: 'assessment', companyInfo }));
    }, []);

    const backToIntro = useCallback(() => {
        setAppState(prev => ({ ...prev, currentSection: 'intro' }));
    }, []);

    const setAnswer = useCallback((questionId: string, optionIndex: number) => {
        setAppState(prev => {
            const newAnswers = { ...prev.answers, [questionId]: optionIndex };
            const newSkipped = new Set(prev.skippedQuestions);
            newSkipped.delete(questionId);
            return { ...prev, answers: newAnswers, skippedQuestions: newSkipped };
        });
    }, []);
    
    const skipQuestion = useCallback((questionId: string) => {
        setAppState(prev => {
            const newAnswers = { ...prev.answers };
            delete newAnswers[questionId];
            const newSkipped = new Set(prev.skippedQuestions);
            newSkipped.add(questionId);
            return { ...prev, answers: newAnswers, skippedQuestions: newSkipped };
        });
    }, []);

    const calculateResults = useCallback(() => {
        const pillarScores: { [key: string]: any } = {};
        let weightedSum = 0;
        let totalWeight = 0;
        let totalAnswered = 0;
        let totalQuestions = 0;
        
        allPillars.forEach(pillarName => {
            const pillar = assessmentData.pillars[pillarName];
            let pillarMaxPoints = 0;
            let pillarEarnedPoints = 0;
            let pillarAnswered = 0;

            pillar.questions.forEach(question => {
                totalQuestions++;
                const maxOption = question.options.reduce((max, option) => (option.points > max ? option.points : max), 0);
                pillarMaxPoints += maxOption;
                
                if (appState.answers[question.id] !== undefined) {
                    const selectedOption = question.options[appState.answers[question.id]];
                    pillarEarnedPoints += selectedOption.points;
                    pillarAnswered++;
                    totalAnswered++;
                }
            });

            const pillarScore = pillarMaxPoints > 0 ? Math.round((pillarEarnedPoints / pillarMaxPoints) * 100) : 0;
            pillarScores[pillarName] = {
                score: pillarScore,
                earnedPoints: pillarEarnedPoints,
                maxPoints: pillarMaxPoints,
                answeredCount: pillarAnswered,
                totalQuestions: pillar.questions.length,
                weight: pillar.weight
            };

            if (pillarAnswered > 0) {
                weightedSum += pillarScore * pillar.weight;
                totalWeight += pillar.weight;
            }
        });

        const overallScore = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
        
        // FIX: Explicitly type `riskLevel` to match `OverallRiskLevel` type from `types.ts`.
        let riskLevel: OverallRiskLevel = "Very Low";
        if (overallScore <= 20) riskLevel = "Critical";
        else if (overallScore <= 40) riskLevel = "High";
        else if (overallScore <= 60) riskLevel = "Medium";
        else if (overallScore <= 80) riskLevel = "Low";

        setAppState(prev => ({ 
            ...prev, 
            results: { pillarScores, overallScore, riskLevel, totalAnswered, totalQuestions },
            currentSection: 'results',
            isConfirmationModalOpen: false
        }));
    }, [allPillars, appState.answers]);

    const handleAttemptFinish = useCallback(() => {
        const totalQuestions = allPillars.flatMap(p => assessmentData.pillars[p].questions).length;
        const answeredCount = Object.keys(appState.answers).length;
        
        if (answeredCount < totalQuestions) {
            setAppState(prev => ({ ...prev, isConfirmationModalOpen: true }));
        } else {
            calculateResults();
        }
    }, [allPillars, appState.answers, calculateResults]);

    const startNewAssessment = useCallback(() => {
        if(window.confirm("Are you sure you want to start a new assessment? All current progress will be lost.")) {
             setAppState(getInitialState());
        }
    }, []);
    
    const handleGlobalReset = useCallback(() => {
        if(window.confirm("Are you sure you want to reset the assessment? All current progress will be lost.")) {
             setAppState(getInitialState());
        }
    }, []);

    const closeModal = useCallback(() => {
        setAppState(prev => ({ ...prev, isConfirmationModalOpen: false }));
    }, []);

    const sections: { [key in Section]: React.ReactNode } = {
        intro: <IntroSection onStart={() => setAppState(prev => ({...prev, currentSection: 'company'}))} />,
        company: <CompanyForm onSubmit={startAssessment} onBack={backToIntro} />,
        assessment: <Assessment 
                        appState={appState} 
                        setAnswer={setAnswer}
                        skipQuestion={skipQuestion}
                        onFinish={handleAttemptFinish}
                    />,
        results: appState.results ? <Results results={appState.results} companyInfo={appState.companyInfo} answers={appState.answers} onNewAssessment={startNewAssessment}/> : <div>Loading...</div>
    };
    
    const totalQuestions = useMemo(() => allPillars.flatMap(p => assessmentData.pillars[p].questions).length, [allPillars]);

    return (
        <div className="min-h-screen flex flex-col app-container">
            <Header />
            {appState.currentSection !== 'intro' && (
                 <button 
                    onClick={handleGlobalReset}
                    title="Reset Assessment"
                    className="fixed top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-full shadow-lg z-50 no-print transition-transform hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                </button>
            )}
            {appState.currentSection !== 'intro' && <ProgressBar currentSection={appState.currentSection} />}
            <main className="flex-grow container mx-auto px-4 py-8">
                {sections[appState.currentSection]}
            </main>
            <Footer />
            {appState.isConfirmationModalOpen && (
                <ConfirmationModal 
                    onConfirm={calculateResults} 
                    onCancel={closeModal} 
                    answeredCount={Object.keys(appState.answers).length}
                    skippedCount={appState.skippedQuestions.size}
                    totalQuestions={totalQuestions}
                />
            )}
        </div>
    );
};

export default App;