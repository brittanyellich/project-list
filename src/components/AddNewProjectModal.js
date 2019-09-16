/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

export default () => (
  <Modal trigger={<Button color="green">Add New</Button>} centered={false}>
    <Modal.Header>Add New Project</Modal.Header>
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <label htmlFor="description">Description</label>
        <input placeholder="Description of project" id="description" />
      </Form.Field>
      <Modal.Actions>
        <Button color="grey">
          Cancel
        </Button>
        <Button color="green">
          Submit
        </Button>
      </Modal.Actions>
    </Form>
  </Modal>
);
