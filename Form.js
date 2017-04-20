import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View, ScrollView,
} from 'react-native';


import {
    Form,
    Separator, InputField, LinkField,
    SwitchField, PickerField, DatePickerField, TimePickerField
} from 'react-native-form-generator';

import postcodes from './postcodes';

export class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }
    handleFormChange(formData) {
        /*
        formData will contain all the values of the form,
        in this example.
    
        formData = {
        first_name:"",
        last_name:"",
        gender: '',
        birthday: Date,
        has_accepted_conditions: bool
        }
        */

        this.setState({ formData: formData })
        this.props.onFormChange && this.props.onFormChange(formData);
    }
    handleFormFocus(e, component) {
        //console.log(e, component);
    }
    openTermsAndConditionsURL() {

    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='always' style={{ paddingLeft: 10, paddingRight: 10, height: 200 }}>
                <Separator />
                <Form
                    ref='registrationForm'
                    onFocus={this.handleFormFocus.bind(this)}
                    onChange={this.handleFormChange.bind(this)}
                    label="Personal Information">
                    <Separator />
                    <PickerField ref='postcode' label='Enter postcode'
                        options={postcodes} />
                    <PickerField ref='packaging' label='Enter packaging'
                        options={
                            {
                                'can': 'Metal',
                                'plastic': 'Plastic',
                                'glass': 'Glass',
                                'paper': 'Paper'
                            }} />
                    <Separator />
                    <InputField ref='last_name' placeholder='Last Name' />
                    <InputField
                        multiline={true}
                        ref='other_input'
                        placeholder='Other Input' 
                        helpText='Please enter your name and email for free spam and annoying promotions'/>
                    <Separator />
                    <LinkField label="This is a LINK" onPress={() => { }} />
                    <SwitchField label='This is a switch button' ref="switch button"
                        helpText='Warning switch button will do some damage!!!' />
                </Form>
            </ScrollView>
        );
    }
}

export default FormView;