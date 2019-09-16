import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import '../styles/App.css';
import AddNewProjectModal from './AddNewProjectModal';
import ProjectList from './ProjectList';


function App() {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment raised className="app">
            <h1>Project List</h1>
            <ProjectList />
            <AddNewProjectModal />
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
