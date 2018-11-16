import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/ProjectForm.css';



export default class ProjectForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     descriptionText:"",
     longueurText:"",
     largeurText:"",
     stylesTatouagesList2:"",
     stylesTatouagesList:"",
     userPhone:"",
     dateList2:"",
     dateList1:"",
     timeList1:"",
     timeList2:"",

   }
  }


  render() {

    return (


      <form className="projectFormContainer col-12">
        {/* <h1> Votre projet de tatouage</h1> */}
        <p className="intro">Décrivez votre projet, ces informations, ainsi que les images que vous avez sélectionnées permettront à votre futur tatoueur de préparer au mieux votre premier rendez-vous et de répondre le plus vite possible à vos attentes</p>

      <FormGroup className="FormGroup description">
          <Label className="text" for="description" type="textarea">Votre projet </Label>
        <Input name="descriptionText" className="descriptionText" type="textarea"  id="descriptionText" placeholder="Décrivez votre tatouage idéal et ce qu'il représente pour vous"/>
      {/* value={this.state.text} onChange={(value)=>this.setState({text: value})} */}
        </FormGroup>


      <div className="FormGroup sizeTattoos">
        <FormGroup className="FormGroup col-12 col-sm-6">
          <Label className="text" for="projectSize">Longueur</Label>
          <Input name="longueurText" className="rollingList" name="long" placeholder="(environ) en cm" />
        </FormGroup>
        <FormGroup className="FormGroup col-12 col-sm-6">
          <Label className="text" for="projectSize">Largeur</Label>
          <Input name="largeurText" className="rollingList"  name="larg" placeholder="(environ) en cm"  />
        </FormGroup>
      </div>


      <div className="FormGroup stylesTatouages">
        <FormGroup>
          <Label className="text" for="styleSelection">Style principal</Label>
          <Input name="stylesTatouagesList" className="rollingList" type="select" name="select" >
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
          <Input name="stylesTatouagesList2" className="rollingList" type="select" name="select" >
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
          <Input name="userPhone" className="numberArea" type="textarea" name="number"  placeholder="(+33)6 61 23 45 67" />
         </FormGroup>


      <div className="availabilities">
        <FormGroup className="FormGroup availabilityForm">
          <Label className="text" for="availabilityDate">Proposez un créneau</Label>
          <Input name="dateList1" className="dateList" type="date" name="date" id="exampleDate" placeholder="date placeholder" />
          <Input name="timeList1" className="dateList" type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>

        <FormGroup className="FormGroup availabilityForm">
          <Label className="text" for="availabilityDate">Un autre créneau</Label>
          <Input name="dateList2" className="dateList" type="date" name="date" id="exampleDate" placeholder="date placeholder" />
          <Input name="timeList2" className="dateList" type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>
      </div>


        <FormGroup className="FormGroup load">
          <Label className="textLoad" for="File">Ajoutez un fichier depuis votre ordinateur</Label>
        <Input type="file" name="uploadFile" id="exampleFile" />
        </FormGroup>


      </form>


    );
  }
}
