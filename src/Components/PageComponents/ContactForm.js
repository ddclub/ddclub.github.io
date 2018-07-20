import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { } from './../../Prismic/PrismicContent';

class ContactForm extends Component{
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