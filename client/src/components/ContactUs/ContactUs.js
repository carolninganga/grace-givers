import React, { Component } from 'react';
import Axios from 'axios';
import "./style.css"

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.onNameChange.bind(this);
        this.onEmailChange.bind(this);
        this.onMessageChange.bind(this);
        this.handleSubmit.bind(this);
    };
    onNameChange(event) {
        this.setState({name: event.target.value})
        }
        onEmailChange(event) {
        this.setState({email: event.target.value})
        }
        onMessageChange(event) {
        this.setState({message: event.target.value})
        }
    handleSubmit(event) {
        event.preventDefault();
        Axios.post('/api/contact-us/send', this.state).then(function(res){
            alert("Your message has been sent to the Grace Givers Team!")
        }).catch(function(err){
            console.log(err);
        });

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
        render() {
            
        return (
<div className="container">
<div className="row mt-50 text-center">
<h1 className="mt-3" style={{margin: "0 auto", color: "rgb(29, 157, 186)"}}>Contact Us</h1>
</div>
<div className="row justify-content-between mt-5 mb-5">     
        <div className="ContactUs col-md-12">
       
            <form id="contact-us-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name" style={{color: "rgb(29, 157, 186)"}}>Name</label>
                <input style={{color:"rgb(29, 157, 186)"}} type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{color: "rgb(29, 157, 186)"}}>Email address</label>
                <input style={{color:"rgb(29, 157, 186)"}} type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message" style={{color: "rgb(29, 157, 186)"}}>Message</label>
                <textarea style={{color: "rgb(29, 157, 186)"}} className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send</button>
            </form>
            </div>
    </div>
    </div>

 )}}


export default ContactUs;