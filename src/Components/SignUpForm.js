import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/HomePage.css';

export default class SignUpForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     modal: false,
     lastName:'',
     firstName:'',
     email: '',
     password:''
   };

   this.toggle = this.toggle.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleSignIn = this.handleSignIn.bind(this);

 }

 toggle() {
   this.setState({
     modal: !this.state.modal
   });
 }

 handleChange(event) {
     this.setState({
       [event.target.name]: event.target.value
     });
   }

handleSignIn(event){

  var ctx= this;
  fetch('http://localhost:3000/signup',
    { method :"POST",
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: "userFirstName=" + ctx.state.firstName + "&userLastName=" + ctx.state.lastName+"&userEmail= " + ctx.state.email + "&userPassword=" + ctx.state.password
    })
    .then((response)=> response.json())
    .then((user)=> {
       this.setState({
          modal: !ctx.state.modal
      })
    })
    .catch((error)=> console.log("request failed :",error))
  event.preventDefault();
}

  render() {

  return (<div>
    <Button color="danger" onClick={this.toggle}>Créer un compte</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle}>
      <ModalHeader toggle={this.toggle}></ModalHeader>
      <ModalBody>
        <Form>
          <Row className="formRowForSignin" form="form">
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Votre nom</Label>
                <input className="inputFormSignIn" type="text" name="lastName" id="lastName" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">Votre prénom</Label>
                <input className="inputFormSignIn" type="text" name="firstName" id="firstName" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Votre email</Label>
                <input className="inputFormSignIn" type="email" name="email" id="email" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Password">Créez un mot de passe</Label>
                <input className="inputFormSignIn" type="password" name="password" id="password" onChange={this.handleChange}/>
              </FormGroup>
            </Col>
          </Row>
          <Button toggle={this.toggle} color="danger" onClick={this.handleSignIn}>Sign in</Button>
        </Form>
      </ModalBody>
    </Modal>
  </div>);
}
}
