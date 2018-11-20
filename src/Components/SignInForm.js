import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/HomePage.css';

export default class SignInForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     modal: false,
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
  fetch('http://localhost:3000/signin',
  {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'userEmail='+ ctx.state.email+"&userPassword="+ ctx.state.password
  })
    .then((response)=> response.json())
    .then((user)=> {
      console.log("user from back", user);
        // if(user.signin){
        //
        //   this.setState({
        //      modal: !ctx.state.modal
        //  })
        // }
    })
    .catch((error)=> console.log("request failed :",error))
  event.preventDefault();
}

  render() {

  return (<div>
    <Button color="danger" onClick={this.toggle}>Vous connecter</Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle}>
      <ModalHeader toggle={this.toggle}></ModalHeader>
      <ModalBody>
        <Form>
          <Row className="formRowForSignin" form="form">
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
          <Button toggle={this.toggle} color="danger" onClick={this.handleSignIn}>Connectez-vous</Button>
        </Form>
      </ModalBody>
    </Modal>
  </div>);
}
}
