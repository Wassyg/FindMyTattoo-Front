import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import '../Stylesheets/ProjectForm.css';


/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class ProjectForm extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Envoyer' : 'Suivant'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Précédent"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
  <MuiThemeProvider>
      <div style={{maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel className="stepLabelForm">Décrivez votre projet</StepLabel>
            <StepContent>
              <TextField
                hintText="ex : une fleur en dot sur l'omoplate"
                multiLine={true}
                rows={2}
                rowsMax={3}
                fullWidth={true}
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel className="stepLabelForm">Pour être contacté</StepLabel>
            <StepContent>
              <TextField
                floatingLabelFixed="Votre numéro de téléphone"
                hintText="(+33)6 61 23 45 67"
                fullWidth={true}
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel className="stepLabelForm">Vous préférez être contacté</StepLabel>
            <StepContent>
              <SelectField
                  floatingLabelText="Vous préférez être contacté"
                  fullWidth={true}
                >
                  <MenuItem value={1} primaryText="midi (entre 12h et 14h)" />
                  <MenuItem value={2} primaryText="après-midi (entre 14h et 17h)" />
                  <MenuItem value={3} primaryText="soir (entre 17h et 19h)" />
                </SelectField>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>

        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            Votre demande a bien été envoyée !
            {/* <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              <br/>
            Cliquez ici
            </a> pour envoyer une nouvelle demande */}
          </p>
        )}
      </div>
  </MuiThemeProvider>
    );
  }
}

export default ProjectForm;
