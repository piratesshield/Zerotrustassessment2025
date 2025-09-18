
export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';
export type OverallRiskLevel = RiskLevel | 'Very Low';

export interface Option {
    text: string;
    points: number;
    risk: RiskLevel;
    recommendation: string;
}

export interface Question {
    id: string;
    question: string;
    description: string;
    options: Option[];
    examples: string[];
    category: string;
}

export interface Pillar {
    weight: number;
    icon: string;
    description: string;
    questions: Question[];
}

export interface AssessmentData {
    pillars: {
        [key: string]: Pillar;
    };
}

export type Section = 'intro' | 'company' | 'assessment' | 'results';

export interface AppState {
    currentSection: Section;
    companyInfo: {
        size: string;
        industry: string;
        cloudPlatform: string;
    };
    answers: { [questionId: string]: number };
    skippedQuestions: Set<string>;
    results: Results | null;
    isConfirmationModalOpen: boolean;
}

export interface Results {
    pillarScores: {
        [key: string]: {
            score: number;
            earnedPoints: number;
            maxPoints: number;
            answeredCount: number;
            totalQuestions: number;
            weight: number;
        };
    };
    overallScore: number;
    riskLevel: OverallRiskLevel;
    totalAnswered: number;
    totalQuestions: number;
}
