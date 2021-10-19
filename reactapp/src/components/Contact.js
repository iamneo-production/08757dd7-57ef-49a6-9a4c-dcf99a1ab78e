import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

class Contact extends Component{
  render(){
    return (
      <>
      <div className="contactnameu">
      <div className="containercontactu">
        <h1 className="contactheading">Connect with Us</h1>
        <p className="headingdesc">We would love to respond to your queries and help you succeed. <br/>Feel
        free to get in touch with us.</p>
        <div className="boxu">
          <div className="contact-leftu">
            <h3>Send your request</h3>
            <form  method="post">
              <div className="input-rowu">
                <div className="input-groupu">
                  <label for="name">Name:</label>
                  <input className="contactinputu" type="text" id="name" name='name' placeholder="Aman Arya" value="" required/>
                </div>
                <div className="input-groupu">
                  <label for="phone">Phone:</label>
                  <input className="contactinputu" type="text"  id="phone" name='phone' placeholder="+91 8954840635" value="" required/>
                </div>
              </div>
              <div className="input-rowu">
                <div className="input-groupu">
                  <label for="email">Email:</label>
                    <input className="contactinputu" type="email"  id="email" name = 'email' placeholder="contactus@example.com" value="" required/>
                </div>
                <div className="input-groupu">
                  <label for="subject">Subject:</label>
                  <input className="contactinputu" type="text"  id="subject" name = 'subject' placeholder="Product demo" value="" required/>
                </div>
              </div>
              <label for="message">Message</label>
              <textarea  rows="8" cols="80" id="message" name = 'message' placeholder="Your Message"></textarea>
              <button className="sendbuttonu" type="submit" name="submit">Send</button>
            </form>
          </div>
          <div className="contact-rightu">
            <h3>Reach Us</h3>
            <table>
              <tr>
                <td>Email</td>
                <td>aman123196@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+91 8954840635</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>17km Stone,NH-2,Mathura-Delhi Road Mathura, <br/>
                Chaumuhan,uttar Pradesh,281406<br/>
              </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      </div>
      </>
  );
  }
}


export default Contact;


  
               
         
