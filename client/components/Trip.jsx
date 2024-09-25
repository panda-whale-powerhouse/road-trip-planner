import React from 'react';

const Trip = ({ trip }) => {
  const { roadtripName, tripData } = trip;

  return (
    <div>
      <p>{roadtripName}</p>
      <p>
        {tripData.origin} to {tripData.destination}
      </p>
    </div>
  );
};

export default Trip;
