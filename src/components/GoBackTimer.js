import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackTimer = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); 

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((currentCountdown) => {
        const newCountdown = currentCountdown - 1;
        if (newCountdown === 0) {
          
          navigate(-1);
        }
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [navigate]);

  return (
    <div>
      <p>Returning to the previous page in {countdown}...</p>
    </div>
  );
};

export default GoBackTimer;