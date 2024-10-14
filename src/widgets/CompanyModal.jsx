// src/widgets/CompanyModal.jsx
import React, { useState } from 'react';
import './CompanyModal.scss'; // Import your styling file

const CompanyModal = ({ isOpen, onClose, onSubmit }) => {
    const [companyName, setCompanyName] = useState('');
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const companiesData = {
            companies: [
                {
                    companyName,
                    skills: skills.split(',').map(skill => skill.trim()), // Convert comma-separated string to array
                    scenarioBasedQuestions: questions.split(',').map(question => question.trim()) // Convert comma-separated string to array
                }
            ]
        };
        onSubmit(companiesData);
        onClose(); // Close modal after submitting
    };

    if (!isOpen) return null; // Do not render the modal if it's not open

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Company</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Skills (comma separated):</label>
                        <input
                            type="text"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Scenario-Based Questions (comma separated):</label>
                        <input
                            type="text"
                            value={questions}
                            onChange={(e) => setQuestions(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default CompanyModal;
