// src/hooks/api.js

export const usePostCompaniesData = async (companiesData) => {
    try {
        const response = await fetch('http://localhost:3001/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(companiesData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result; // Return the result for further use if needed
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Re-throw the error for handling at the call site
    }
};
