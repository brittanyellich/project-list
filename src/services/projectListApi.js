import { useState, useEffect } from 'react';
import axios from 'axios';
import { projectApiLink, projectApiKey } from '../constants';

export default () => {
  // const [hasError, setErrors] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line prefer-template
    axios.get(projectApiLink, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        ProjectApiKey: projectApiKey,
      },
    })
      .then((res) => {
        setProjects(res.data);
      });
    // .catch((err) => setErrors(err));
  }, []);

  return (
    projects
  );
};
