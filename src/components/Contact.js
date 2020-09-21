import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;

         emailjs.init("user_GfzZLyLoK8unCI3uumLrv");
      }

      function sendEmail(e) {
         e.preventDefault();
         var send_button = document.getElementById("submit_button");
         emailjs
            .sendForm(
               "contact_brian",
               "contact_form",
               e.target,
               "user_GfzZLyLoK8unCI3uumLrv"
            )
            .then(
               (result) => {
                  send_button.style.color = "green";
                  send_button.value = "Sent!";
                  console.log(result.text);
               },
               (error) => {
                  send_button.style.color = "red";
                  send_button.value = "Send Failed";
                  console.log(error.text);
               }
            );
      }

      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1>
                     <span>Get In Touch.</span>
                  </h1>
               </div>

               <div className="ten columns">
                  <p className="lead">{message}</p>
               </div>
            </div>

            <div className="row">
               <div className="eight columns">
                  <form
                     className="contact-form"
                     id="contactForm"
                     name="contactForm"
                     onSubmit={sendEmail}
                  >
                     <fieldset>
                        <div>
                           <label htmlFor="contactName">
                              Name <span className="required">*</span>
                           </label>
                           <input
                              type="text"
                              defaultValue=""
                              size="35"
                              id="contactName"
                              name="from_name"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">
                              Email <span className="required">*</span>
                           </label>
                           <input
                              type="text"
                              defaultValue=""
                              size="35"
                              id="contactEmail"
                              name="user_email"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input
                              type="text"
                              defaultValue=""
                              size="35"
                              id="contactSubject"
                              name="contactSubject"
                           />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">
                              Message <span className="required">*</span>
                           </label>
                           <textarea
                              cols="50"
                              rows="15"
                              id="contactMessage"
                              name="message"
                              required
                           ></textarea>
                        </div>

                        <div>
                           <input id="submit_button" className="submit" type="submit" value="Send"/>
                        </div>

                     </fieldset>
                  </form>

                  {/* <div id="message-warning"> Error boy</div> */}
                  {/* <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
                  </div> */}
               </div>

               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">
                     <h4>Email and Phone</h4>
                     <p className="address">
                        {email}
                        <br />
                        {city}, {state} {zip}
                        <br />
                        <span>{phone}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
