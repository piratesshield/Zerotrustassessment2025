
import React from 'react';
import { assessmentData } from '../constants/assessmentData';

interface IntroSectionProps {
    onStart: () => void;
}

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{children}</p>
    </div>
);

const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => {
    return (
        <div className="max-w-5xl mx-auto text-center animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Professional Zero Trust Assessment Platform
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                This comprehensive enterprise assessment evaluates your organization's security maturity across 10 critical Zero Trust domains. Built for CISOs and security leaders, it provides board-ready insights and actionable recommendations.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 text-sm text-left mb-8 max-w-3xl mx-auto">
                {/* FIX: Corrected SVG attributes to be JSX-compliant (e.g., 'class' to 'className', 'stroke-width' to 'strokeWidth'). */}
                <h4 className="font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>Important Information</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>This assessment is processed in your browser. <b>No data is stored on our servers.</b></li>
                    <li>Please <b>export or print</b> your results once finished, as they will be lost if you close this tab.</li>
                    <li><b>Refreshing the page</b> will reset your assessment progress.</li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-left">
                <FeatureCard icon="🛡️" title="10 Security Pillars">
                    Complete evaluation across Identity, Data, Device, Network, and more critical domains.
                </FeatureCard>
                <FeatureCard icon="📊" title="Risk-Based Scoring">
                    Each answer is tied to a specific risk level, providing clear insights into your security gaps.
                </FeatureCard>
                 <FeatureCard icon="🎯" title="CISO Recommendations">
                    Actionable, expert-level advice for every identified risk to guide your strategic planning.
                </FeatureCard>
                <FeatureCard icon="📈" title="Maturity Visualization">
                    An interactive spider chart shows your security posture across all domains at a glance.
                </FeatureCard>
            </div>
             <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Assessment Domains & Weights</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {Object.entries(assessmentData.pillars).map(([name, pillar]) => (
                        <span key={name} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                            {pillar.icon} {name} ({pillar.weight * 100}%)
                        </span>
                    ))}
                </div>
            </div>
            <button onClick={onStart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
                Start Enterprise Assessment
            </button>
        </div>
    );
};

export default IntroSection;