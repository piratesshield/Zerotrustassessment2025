import React from 'react';
import { Results as ResultsType } from '../types';

interface ExecutiveSummaryProps {
    results: ResultsType;
}

const renderWithMarkdown = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
        <React.Fragment>
            {parts.map((part, index) =>
                index % 2 === 1 ? <strong key={index} className="text-slate-800 dark:text-slate-100">{part}</strong> : part
            )}
        </React.Fragment>
    );
};

const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ results }) => {

    const getOverallSummary = (score: number, riskLevel: string) => {
        let text = `The assessment indicates an overall Zero Trust maturity score of **${score}%**, which corresponds to a **${riskLevel}** risk level. `;
        switch (riskLevel) {
            case 'Critical':
                text += "This suggests critical vulnerabilities in the security posture that require immediate attention to prevent potential exploitation.";
                break;
            case 'High':
                text += "This highlights significant gaps in the security architecture. A strategic focus on remediation is strongly recommended to reduce the attack surface.";
                break;
            case 'Medium':
                text += "This represents a foundational but incomplete security posture. While some controls are in place, there are notable areas for improvement to achieve a robust Zero Trust model.";
                break;
            case 'Low':
                text += "This reflects a strong security posture with many mature controls in place. The focus should now shift to continuous improvement and addressing more advanced threats.";
                break;
            case 'Very Low':
                text += "This demonstrates an advanced and mature Zero Trust implementation across the organization. The key to maintaining this posture is ongoing vigilance, optimization, and adaptation to the evolving threat landscape.";
                break;
            default:
                break;
        }
        return text;
    };

    // FIX: Cast `data` to `any` to resolve TypeScript error about property 'score' not existing on type 'unknown'.
    const pillarScoresArray = Object.entries(results.pillarScores).map(([name, data]) => ({ name, score: (data as any).score }));
    pillarScoresArray.sort((a, b) => b.score - a.score);

    const strongestPillars = pillarScoresArray.slice(0, 3).filter(p => p.score >= 70);
    const weakestPillars = pillarScoresArray.slice(-3).filter(p => p.score < 50).reverse();

    const getStrengthsSummary = (pillars: { name: string, score: number }[]) => {
        if (pillars.length === 0) {
            return "No specific areas of high maturity were identified based on the assessment. A broad-based effort is needed to improve security controls across all domains.";
        }
        const pillarNames = pillars.map(p => `**${p.name}** (${p.score}%)`).join(pillars.length > 2 ? ', ' : ' and ');
        return `The organization demonstrates commendable maturity in several key areas. Notably, strong performance in ${pillarNames} indicates that effective controls and processes are in place, reducing risk in these domains. These successes should be leveraged as a model for improvement elsewhere.`;
    };

    const getWeaknessesSummary = (pillars: { name: string, score: number }[]) => {
        if (pillars.length === 0) {
            return "The assessment did not identify any areas of critical weakness, suggesting a consistent security posture across all domains. The focus should be on holistic improvement rather than targeted remediation of specific pillars.";
        }
        const pillarNames = pillars.map(p => `**${p.name}** (${p.score}%)`).join(pillars.length > 2 ? ', ' : ' and ');
        return `The assessment has identified key areas requiring immediate strategic focus. The domains of ${pillarNames} represent the most significant gaps in the current Zero Trust architecture. These areas should be prioritized for investment and remediation to achieve the greatest impact on reducing the overall risk profile.`;
    };


    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 mb-10 page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 text-center">Executive Summary</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>{renderWithMarkdown(getOverallSummary(results.overallScore, results.riskLevel))}</p>
                <p>{renderWithMarkdown(getStrengthsSummary(strongestPillars))}</p>
                <p>{renderWithMarkdown(getWeaknessesSummary(weakestPillars))}</p>
            </div>
        </div>
    );
};

export default ExecutiveSummary;