
import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Results as ResultsType, AppState } from '../types';
import { assessmentData } from '../constants/assessmentData';

interface ResultsProps {
    results: ResultsType;
    companyInfo: AppState['companyInfo'];
    answers: AppState['answers'];
    onNewAssessment: () => void;
}

const RiskSummary: React.FC<{ answers: AppState['answers'] }> = ({ answers }) => {
    const highImpactRisks = useMemo(() => {
        const risks: any[] = [];
        Object.entries(assessmentData.pillars).forEach(([pillarName, pillar]) => {
            pillar.questions.forEach(question => {
                const answerIndex = answers[question.id];
                if (answerIndex !== undefined) {
                    const option = question.options[answerIndex];
                    if (option.risk === 'Critical' || option.risk === 'High') {
                        risks.push({
                            pillarName,
                            question: question.question,
                            answer: option.text,
                            risk: option.risk,
                            recommendation: option.recommendation,
                        });
                    }
                }
            });
        });
        return risks;
    }, [answers]);

    if (highImpactRisks.length === 0) {
        return (
             <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-700 page-break-inside-avoid">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Excellent Security Posture!</h3>
                <p className="mt-2 text-green-700 dark:text-green-300">No critical or high-impact risks were identified based on your answers. Continue to monitor and refine your security controls.</p>
            </div>
        )
    }

    return (
        <div className="page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-6 text-center">High-Impact Risks & CISO Recommendations</h2>
            <div className="space-y-6">
                {highImpactRisks.map((item, index) => (
                    <div key={index} className={`p-5 rounded-lg border-l-4 page-break-inside-avoid ${item.risk === 'Critical' ? 'bg-red-50 dark:bg-red-900/30 border-red-500' : 'bg-orange-50 dark:bg-orange-900/30 border-orange-500'}`}>
                        <p className="font-semibold text-slate-500 dark:text-slate-400 text-sm">{item.pillarName}</p>
                        <h4 className="font-bold text-lg mt-1 text-slate-800 dark:text-slate-200">{item.question}</h4>
                        <p className="mt-2 text-sm italic text-slate-600 dark:text-slate-300">Your answer: "{item.answer}"</p>
                        <div className="mt-4 p-4 rounded-md bg-slate-100 dark:bg-slate-800">
                            <p className="font-semibold text-sm mb-1"><span className={item.risk === 'Critical' ? 'text-red-600 dark:text-red-400' : 'text-orange-600 dark:text-orange-400'}>Recommendation:</span></p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{item.recommendation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Results: React.FC<ResultsProps> = ({ results, companyInfo, answers, onNewAssessment }) => {
    const riskStyles = {
        'Critical': 'bg-red-500 text-white',
        'High': 'bg-orange-500 text-white',
        'Medium': 'bg-yellow-500 text-black',
        'Low': 'bg-green-500 text-white',
        'Very Low': 'bg-teal-500 text-white',
    };

    const chartData = useMemo(() => {
        return Object.keys(results.pillarScores).map((name) => ({
            pillar: name,
            score: results.pillarScores[name].score,
            fullMark: 100,
        }));
    }, [results.pillarScores]);
    
    const handlePrint = () => {
        window.print();
    };

    return (
        <div id="resultsSection" className="animate-fadeIn max-w-6xl mx-auto">
            <div className="text-center mb-10 page-break-inside-avoid">
                <h1 className="text-4xl font-bold">Assessment Results</h1>
                <p className="text-slate-500 mt-2">{companyInfo.industry} | {companyInfo.size} | {companyInfo.cloudPlatform}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10 page-break-after page-break-inside-avoid">
                <div className="md:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                    <p className="text-lg font-semibold">Overall Weighted Score</p>
                    <p className="text-7xl font-bold my-2 text-blue-600 dark:text-blue-400">{results.overallScore}</p>
                    <div className={`px-4 py-1 rounded-full text-lg font-semibold ${riskStyles[results.riskLevel] || ''}`}>
                        {results.riskLevel} Risk
                    </div>
                    <p className="text-xs text-slate-500 mt-4">{results.totalAnswered} of {results.totalQuestions} questions answered</p>
                </div>
                <div className="md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                     <h3 className="text-xl font-bold mb-4 text-center">Maturity Spider Chart</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="pillar" tick={{ fontSize: 12 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar name="Maturity" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mb-10 page-break-after">
                <RiskSummary answers={answers} />
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 mb-10 page-break-inside-avoid">
                <h2 className="text-2xl font-bold mb-6 text-center">Pillar-by-Pillar Breakdown</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {Object.keys(results.pillarScores).map((name) => {
                        const data = results.pillarScores[name];
                        return (
                         <div key={name} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 page-break-inside-avoid">
                             <div className="flex justify-between items-center">
                                 <h4 className="font-bold text-lg">{assessmentData.pillars[name].icon} {name}</h4>
                                 <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{data.score}%</p>
                             </div>
                             <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 mt-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${data.score}%`}}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-right">Answered: {data.answeredCount}/{data.totalQuestions}</p>
                         </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center py-6 no-print">
                <button onClick={handlePrint} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 mr-4">Print Report</button>
                <button onClick={onNewAssessment} className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">Start New Assessment</button>
            </div>
        </div>
    );
};

export default Results;