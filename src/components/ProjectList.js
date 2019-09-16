import React from 'react';
import { Card } from 'semantic-ui-react';
import ProjectListApi from '../services/projectListApi';


export default () => {
  const projects = ProjectListApi();
  const inProgressProjects = projects.filter((project) => !project.completed && !project.deleted);
  const completedProjects = projects.filter((project) => project.completed && !project.deleted);

  return (
    <Card.Group>
      {inProgressProjects.map((project) => (
        <Card fluid color="orange" key={project.id}>
          <Card.Content>
            <Card.Header key={project.id}>{project.title}</Card.Header>
            <Card.Description>{project.description.substring(0, 100)}</Card.Description>
          </Card.Content>
        </Card>
      ))}
      <h1>Completed Projects</h1>
      {completedProjects.map((project) => (
        <Card fluid color="olive" key={project.id}>
          <Card.Content>
            <Card.Header key={project.id}>{project.title}</Card.Header>
            <Card.Description>{project.description.substring(0, 100)}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};
