// src/components/Companies.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanies, selectCompanies } from '../slice/companySlice';
import { Link } from 'react-router-dom';
import './Companies.scss';
import useSkillFrequencyChart from '../hooks/useSkillFrequencyChart';
import Banner from '../widgets/Banner';
import CompanyModal from '../widgets/CompanyModal';


const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(selectCompanies);
    const chartRef = useSkillFrequencyChart(companies); // Use the custom hook to draw the chart

    useEffect(() => {
        fetch('http://localhost:3001/companies')
            .then((response) => response.json())
            .then((data) => dispatch(setCompanies(data)))
            .catch((error) => console.error('Error fetching data:', error));
    }, [dispatch]);

    return (
        <div className='companies'>
            <h1>Company List</h1>
            <ul>
                {companies?.map((company) => (
                    <li key={company.id}>
                        <Link to={`/company/${company.id}`}>
                            <strong>{company.companyName}</strong>: {company.skills.join(', ')}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* D3.js Chart Section */}
            <h2>Skill Frequency Chart</h2>
            {/* Banner below the heading */}
            <Banner text={'This chart displays the frequency of skills requested by companies based on their job postings. It helps identify the most in-demand skills in the industry.'}/>
            <div className='chart-container' ref={chartRef}></div> {/* Chart container */}
        </div>
    );
};

export default Companies;