import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { } from './../../Prismic/PrismicContent';
var Config = require('../../Config.js');
const request = require('request');
class ContactForm extends Component{
		cc_list = [{"email":"dev@ddclub.ca"},{"email":"admin@ddclub.ca"},{"email":"president@ddclub.ca"}];
		primary_email = "cro@ddclub.ca";
		email_api_endPoint = "https://api.sendgrid.com/v3/mail/send";
	constructor(props){
		super(props);

		this.state = {
			name: '',
			studentId: '',
			email: '',
			subject: '',
			message: '',
			visible: false
		};
	}
	sendDataEmail(){
		var options = {
			headers: {
				'Authorization': Config.SEND_GRID_AUTH,
				'content-type': 'application/json'
			},
			url: this.email_api_endPoint,
			body: {
				"personalizations": [
				  {
					"to": [
					  {
						"email": this.primary_email
					  }
					],
					"cc":this.cc_list
				  }
				],
				"subject": this.state.subject,
				"from": {
				  "email": this.state.email,
				  "name": this.state.name
				},
				"content": [
				  {
					"type": "text/plain",
					"value": this.state.message
				  }
				]
			}
		}
		request.post(options);
	}
	onDismiss(){
		this.setState({visible: false});
	}

	sendMessage(){
		this.setState({visible: true});
	}

	render(){
		let sendAlert = (
			<Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss.bind(this)}>
		       	Nothing has been sent yet, this is just a placeholder.
		   	</Alert>
		);		

		let nameSec = (
			<FormGroup>
	          <Label for="studentName">Name</Label>
	          <Input type="text" name="name" id="studentName" placeholder="Enter your name..." />
			</FormGroup>
		);

		let studentIdSec = (
			<FormGroup>
	          <Label for="studentID">Student ID</Label>
	          <Input type="text" name="student-id" id="studentID" placeholder="Enter your student ID..." />
			</FormGroup>
		);

		let emailSec = (
			<FormGroup>
	          <Label for="studentEmail">Email</Label>
	          <Input type="email" name="email" id="studentEmail" placeholder="Enter your email..." />
			</FormGroup>
		);

		let subjectSec = (
			<FormGroup>
	          <Label for="messageSubject">Subject</Label>
	          <Input type="text" name="subject" id="messageSubject" placeholder="Enter the subject..." />
			</FormGroup>
		);

		let messageSec = (
			<FormGroup>
	          <Label for="message">Message</Label>
	          <Input type="textarea" name="message" id="message" placeholder="Enter your message..."/>
			</FormGroup>
		);

		let sendBtn = (
			<Button outline color="primary" block onClick={this.sendMessage.bind(this)}>Send</Button>
		);	

		let form = (
			<form>
				{nameSec}
				{studentIdSec}
				{emailSec}
				{subjectSec}
				{messageSec}
				{sendBtn}
			</form>
		);

		return (
			<div>
				{sendAlert}
				{form}
			</div>
		);
	}
}

export default ContactForm;