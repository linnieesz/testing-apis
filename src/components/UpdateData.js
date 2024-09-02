import React, { useState } from 'react';
import axios from 'axios';

const UpdateData = () => {
  const [updatedData, setUpdatedData] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put('https://api.example.com/data/1', { updatedData });
      alert('Data updated successfully!');
      // Optionally, fetch and update the displayed data
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Update Data</h2>
      <input
        type="text"
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateData;