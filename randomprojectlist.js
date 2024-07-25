import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [project, setProject] = useState(null);

  const fetchRandomProject = () => {
    axios.get('/projects.json')
      .then(response => {
        const projects = response.data;
        const randomIndex = Math.floor(Math.random() * projects.length);
        const randomProject = projects[randomIndex];
        setProject(randomProject);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        // Optionally handle error here
      });
  };

  return (
    <div>
      <h1>Random Project</h1>
      <button onClick={fetchRandomProject}>Fetch Random Project</button>
      {project && (
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
