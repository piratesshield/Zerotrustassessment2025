
import React, { useState } from 'react';

interface CompanyFormProps {
    onSubmit: (companyInfo: { size: string; industry: string; cloudPlatform: string }) => void;
    onBack: () => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onSubmit, onBack }) => {
    const [formData, setFormData] = useState({
        size: '',
        industry: '',
        cloudPlatform: 'azure'
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.size && formData.industry) {
            onSubmit(formData);
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Organization Information</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Provide some basic context for a more tailored assessment.</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                    <label htmlFor="size" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Size *</label>
                    <select id="size" name="size" value={formData.size} onChange={handleChange} required className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500">
                        <option value="">Select size...</option>
                        <option value="<100 employees">Small (&lt;100 employees)</option>
                        <option value="100-1000 employees">Medium (100-1000 employees)</option>
                        <option value="1000-5000 employees">Large (1000-5000 employees)</option>
                        <option value="5000+ employees">Enterprise (5000+ employees)</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Industry Sector *</label>
                    <select id="industry" name="industry" value={formData.industry} onChange={handleChange} required className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500">
                         <option value="">Select industry...</option>
                        <option value="Technology">Technology</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Retail">Retail</option>
                        <option value="Government">Government</option>
                        <option value="Education">Education</option>
                        <option value="Energy">Energy</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                 <div className="mb-8">
                    <label htmlFor="cloudPlatform" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Primary Cloud Platform</label>
                    <select id="cloudPlatform" name="cloudPlatform" value={formData.cloudPlatform} onChange={handleChange} className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 focus:ring-2 focus:ring-blue-500">
                        <option value="azure">Microsoft Azure</option>
                        <option value="aws">Amazon Web Services</option>
                        <option value="gcp">Google Cloud Platform</option>
                        <option value="multicloud">Multi-cloud</option>
                        <option value="onpremises">On-premises</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex justify-between items-center">
                    <button type="button" onClick={onBack} className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                        Back
                    </button>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyForm;
