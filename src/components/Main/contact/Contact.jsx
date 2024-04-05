import React, { useRef } from 'react'
import './contact.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleSendData = async () => {
    try {
      if (name.current.value !== "" || email.current.value !== "" || message.current.value !== "") {
        const data = {
          name: name.current.value,
          email: email.current.value,
          message: message.current.value
        }
        console.log(data);

        const added = await axios.post("https://puran-portfolio-default-rtdb.firebaseio.com/userQueries.json", data)

        // console.log(added.status === 200 || added.status == "201");

        if (added.status === 200 || added.status == "201") {
          toast.success("Message sent successfully!");

          name.current.value = "";
          email.current.value = "";
          message.current.value = "";
        }
      } else {
        toast.error("Please fill all fields!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("can't send message right now! Please try again later.");
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    }
  }
  return (
    <section id="contact">
      <h3>Get in Touch <i class="fa-regular fa-envelope"></i></h3>
      <div className="contact-me">
        <div className="contactDetail">
          <h5><i class="fa-solid fa-right-long"></i> Contact Details</h5>
          <div className="details">
            <p><i class="fa-solid fa-phone"></i> Phone : +91 8849968221</p>
            <p><i class="fa-solid fa-envelope"></i> Email : puran.forwork88@gmail.com</p>
            <div className="socialNetwork">
              <a href='https://www.linkedin.com/in/puran-vishwakarma-a64819285/' className="linkdin" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/puran66" className="gitHub" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="instagram" rel="noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="youtube" rel="noreferrer">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="address">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.652216082863!2d72.86502230392603!3d21.205540137811386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7550821b4f%3A0x49a1044dd9ca098e!2sPunagam%2C%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712055572208!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h5><i class="fa-solid fa-right-long"></i> Have any Query?</h5>
          <input type="text" name="name" ref={name} placeholder="Enter Name" />
          <input type="text" name="email" ref={email} placeholder="Enter Email" />
          <textarea name="message" ref={message} rows="6" cols="50" placeholder="Write a Message"></textarea>
          <button className="contact btn" onClick={handleSendData}>Send Message</button>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact