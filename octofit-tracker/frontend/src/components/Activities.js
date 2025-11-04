import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities data:', data);
        setActivities(data.results || data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2 className="card-title">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.name || '-'}</td>
                <td>{activity.type || '-'}</td>
                <td>{activity.duration || '-'}</td>
                <td>{activity.date || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary mt-2">Add Activity</button>
      </div>
    </div>
  );
};

export default Activities;
