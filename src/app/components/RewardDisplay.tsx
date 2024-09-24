import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';

const RewardDisplay = () => {
  const [reward, setReward] = useState(0);

  useEffect(() => {
    const fetchReward = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/database/getRewards/');
        setReward(Math.round(response.data.total_contributions)); // Assuming the API returns an object with a 'reward' property
        console.log('Fetched reward:', response.data.total_contributions);
      } catch (error) {
        console.error('Error fetching reward:', error);
      }
    };

    fetchReward(); // Fetch immediately on component mount

    const intervalId = setInterval(fetchReward, 3000); // Fetch every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and sets up the interval

  return (
    <>
      <Typography variant="h2" fontWeight={700}>
        {reward}
      </Typography>
      <Typography fontWeight={700}>Reward</Typography>
    </>
  );
};

export default RewardDisplay;
