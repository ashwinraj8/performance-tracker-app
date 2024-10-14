// src/hooks/useBackNavigation.js
import { useNavigate } from 'react-router-dom';

const useBackNavigation = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigate back
    };

    return goBack;
};

export default useBackNavigation;
