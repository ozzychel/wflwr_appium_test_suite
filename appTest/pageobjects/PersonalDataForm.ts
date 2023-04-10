import AppScreen from "../screenobjects/android/AppScreen"

class PersonalDataForm {
  //no ids to use, improve selectors targeting (id, child of a parent)
  //TODO: rebuild to avoid sequenced Xpath use, target text (at least)
  private get formContainer () {return $('//android.view.View[@resource-id="participant-toggle-0"]')};
  //first name
  private get firstNameField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[1]`)};
  private get firstNameLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[1]/android.view.View[1]/android.widget.TextView[1]')}
  private get firstNameInput () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[1]/android.view.View[2]/android.widget.EditText')}
  //last name
  private get lastNameField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[2]`)};
  private get lastNameLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[2]/android.view.View[1]/android.widget.TextView[1]')}
  private get lastNameInput () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[2]/android.view.View[2]/android.widget.EditText')};
  //Birthday label
  private get birthDayLabel () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[3]/android.widget.TextView[1]`)};
  //Birday month dropdown
  private get monthField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[4]`)};
  private get monthLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[4]/android.view.View[1]/android.widget.TextView[1]')};
  //Birthday day dropdown
  private get dayField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[5]`)};
  private get dayLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[5]/android.view.View[1]/android.widget.TextView[1]')};
  //Birthday year dropdown
  private get yearField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[6]`)};
  private get yearLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[6]/android.view.View[1]/android.widget.TextView[1]')};
  //Gender label
  private get genderLabel () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[7]/android.widget.TextView[1]`)};
  //Gender:Male field
  private get genMaleField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[8]`)};
  private get genMaleButton () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[8]/android.widget.RadioButton`)};
  //Gender:Female
  private get genFemaleField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[9]`)};
  private get genFemaleButton () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[9]/android.widget.RadioButton`)};
  //Nationality field
  private get nationalityField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[10]`)};
  private get nationalityLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[10]/android.view.View[1]/android.widget.TextView[1]')};
  //Email field
  private get emailField () {return $(`//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[11]`)};
  private get emailLabel () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[11]/android.view.View[1]/android.widget.TextView[1]')};
  private get emailInput () {return $('//android.view.View[@resource-id="participant-toggle-0"]/android.view.View[11]/android.view.View[2]/android.widget.EditText')}
  //Residence
  private get residenceField () {return $(`//android.view.View[@text="Country of residence*"]`)};
  //Athlete type label
  // private get athleteTypeLabel () {return $(`//android.widget.TextView[@text="ATHLETE TYPE"]`)}
  // TODO: Athlete type: buttons
  //Student checkbox
  private get studentCheckBox () {return $(`//android.widget.CheckBox[@text="I am a student"]`)}
  private get studentLabel () {return $(`//android.view.View/android.widget.TextView[1][@text="I am a student"]]`)}
  //Next step button
  private get nextStepButton () {return $(`//android.widget.Button[@text="NEXT STEP"]`)}

  async tapFirstNameField () {
    await this.firstNameField.click();
  }

  async inputFirstName (firstName) {
    await this.firstNameInput.setValue(firstName);
  }
  
  async inputLastName (lastName) {
    await this.lastNameInput.setValue(lastName);
  }

  async tapMonthField () {
    await this.monthField.click();
  }

  async tapDayField () {
    await this.dayField.click();
  }

  async tapYearField () {
    await this.yearField.click();
  }

  async tapGenMaleField () {
    await this.genMaleField.click();
  }

  async tapGenFemaleField () {
    await this.genFemaleField.click();
  }

  async tapNationalityField () {
    await this.nationalityField.click();
  }

  async tapEmailField () {
    await this.emailField.click();
  }

  async inputEmail (val) {
    await this.emailInput.setValue(val);
  }

  async tapResidenceField () {
    await this.residenceField.click();
  }

  async tapStudentCheckBox () {
    await this.studentCheckBox.click();
  }

  async tapNextStepButton () {
    await this.nextStepButton.click();
  }

}

module.exports = new PersonalDataForm();