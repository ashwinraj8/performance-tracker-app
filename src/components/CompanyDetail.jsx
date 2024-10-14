// src/components/CompanyDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CompanyDetail.scss'; // Import the SCSS file
import { selectCompanies } from '../slice/companySlice';
import useBackNavigation from '../hooks/useBackNavigation';
import BackButton from '../widgets/BackButton';


const CompanyDetail = () => {
    const { id } = useParams(); // Get the company ID from the URL
    const companies = useSelector(selectCompanies);
    const company = companies.find((company) => company.id === parseInt(id)); // Find the company by ID
    const goBack = useBackNavigation(); // Get the back navigation function

    if (!company) {
        return <div>Company not found</div>; // Handle case where company doesn't exist
    }

    return (
        <div className="company-detail">
            <h1>{company?.companyName}</h1>
            <h2>Skills:</h2>
            <p>{company?.skills.join(', ')}</p>

            <h2>Scenario-Based Questions:</h2>
            <ul>
                {company?.scenarioBasedQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
            <BackButton onClick={goBack} buttonText="Go Back" />
            {/* Add more details as needed */}

        </div>
    );
};

export default CompanyDetail;
