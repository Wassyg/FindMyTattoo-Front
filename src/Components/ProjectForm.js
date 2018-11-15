import React from 'react';
import { Col, Button, FormGroup, Label, Input, FormText, Form, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/ProjectForm.css';



export default class ProjectForm extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     text: "Décrivez votre tatouage idéal et ce qu'il représente pour vous"
   }
   console.log("text init",this.state.text);
  }


  render() {
    console.log("once value",this.state.text);
    return (


      <form className="projectFormContainer col-12">
        {/* <h1> Votre projet de tatouage</h1> */}
        <p className="intro">Décrivez votre projet, ces informations, ainsi que les images que vous avez sélectionnées permettront à votre futur tatoueur de préparer au mieux votre premier rendez-vous et de répondre le plus vite possible à vos attentes</p>

      <FormGroup className="FormGroup description">
          <Label className="text" for="description" type="textarea">Votre projet </Label>
        <Input className="descriptionText" type="textarea"  id="descriptionText" placeholder="Décrivez votre tatouage idéal et ce qu'il représente pour vous"/>
      {/* value={this.state.text} onChange={(value)=>this.setState({text: value})} */}
        </FormGroup>


      <div className="FormGroup sizeTattoos">
        <FormGroup className="FormGroup col-12 col-sm-6">
          <Label className="text" for="projectSize">Longueur</Label>
          <Input className="rollingList" name="long" placeholder="(environ) en cm" />
        </FormGroup>
        <FormGroup className="FormGroup col-12 col-sm-6">
          <Label className="text" for="projectSize">Largeur</Label>
          <Input className="rollingList"  name="larg" placeholder="(environ) en cm"  />
        </FormGroup>
      </div>


      <div className="FormGroup stylesTatouages">
        <FormGroup>
          <Label className="text" for="styleSelection">Style principal</Label>
          <Input className="rollingList" type="select" name="select" >
            <option>-- choisissez un style --</option>
            <option>Japonais</option>
            <option>Blackwork, Dotwork, B&G, Fineline</option>
            <option>Tribal, Mandala</option>
            <option>OldSchool, NeoTraditionnel</option>
            <option>PostModern, NewSchool, Cartoon</option>
            <option>Realism, Trash, Biomeca</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="text" for="styleSelection">Style secondaire</Label>
        <Input className="rollingList" type="select" name="select" >
            <option>-- choisissez un style --</option>
            <option>Japonais</option>
            <option>Blackwork, Dotwork, B&G, Fineline</option>
            <option>Tribal, Mandala</option>
            <option>OldSchool, NeoTraditionnel</option>
            <option>PostModern, NewSchool, Cartoon</option>
            <option>Realism, Trash, Biomeca</option>
          </Input>
        </FormGroup>
      </div>


        <FormGroup className="FormGroup contactNumber">
           <Label className="text telephone" for="userPhone">Téléphone <span>
             Pour que le tatoueur puisse vous contacter</span>
           </Label>
         <Label className="text" for="userPhone"></Label>
       <Input className="numberArea" type="textarea" name="number"  placeholder="(+33)6 61 23 45 67" />
         </FormGroup>


      <div className="availabilities">
        <FormGroup className="FormGroup availabilityForm">
          <Label className="text" for="availabilityDate">Proposez un créneau</Label>
          <Input className="dateList" type="date" name="date" id="exampleDate" placeholder="date placeholder" />

          <Input className="dateList" type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>

        <FormGroup className="FormGroup availabilityForm">
          <Label className="text" for="availabilityDate">Un autre créneau</Label>
          <Input className="dateList" type="date" name="date" id="exampleDate" placeholder="date placeholder" />
          <Input className="dateList" type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>
      </div>


        <FormGroup className="FormGroup load">
          <Label className="textLoad" for="File">Ajoutez un fichier depuis votre ordinateur</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>


      </form>


    );
  }
}
