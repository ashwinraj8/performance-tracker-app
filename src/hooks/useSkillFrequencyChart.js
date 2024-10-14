// src/hooks/useSkillFrequencyChart.js
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const useSkillFrequencyChart = (companies) => {
    const chartRef = useRef();

    useEffect(() => {
        if (!companies || companies.length === 0) return;

        // Process data to get skill frequencies
        const skillFrequency = {};
        companies.forEach(company => {
            company.skills.forEach(skill => {
                skillFrequency[skill] = (skillFrequency[skill] || 0) + 1;
            });
        });

        // Convert the data to array format for D3
        const data = Object.entries(skillFrequency).map(([skill, count]) => ({
            skill,
            count
        }));

        // Set dimensions and margins for the chart
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };

        // Clear the previous chart if it exists
        d3.select(chartRef.current).select('svg').remove();

        // Create an SVG container
        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create scales for x and y axes
        const x = d3.scaleBand()
            .domain(data.map(d => d.skill))
            .range([0, width])
            .padding(0.2);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .nice()
            .range([height, 0]);

        // Create X-axis
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x));

        // Create Y-axis
        svg.append('g')
            .call(d3.axisLeft(y));

        // Create bars
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.skill))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.count))
            .attr('fill', '#4a90e2'); // Use primary color for bars
    }, [companies]);

    return chartRef;
};

export default useSkillFrequencyChart;
