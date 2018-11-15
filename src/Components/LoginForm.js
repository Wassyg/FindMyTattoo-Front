import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Votre nom</Label>
            <Input type="text" name="name" id="name" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="firsName">Votre prénom</Label>
            <Input type="text" name="firsName" id="firsName" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Votre email</Label>
              <Input type="email" name="email" id="email" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Créez un mot de passe</Label>
              <Input type="password" name="password" id="Password" placeholder="password placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Confirmez votre mot de passe</Label>
            <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign in</Button>
      </Form>
    );
  }
}
