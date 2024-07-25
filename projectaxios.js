
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/projects.json');
      setProjects(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Project List</h1>
      <button onClick={fetchProjects}>Fetch Projects</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
