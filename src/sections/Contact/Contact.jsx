import styles from './ContactStyles.module.css';
import { useState } from 'react';
const apiUrl = import.meta.env.VITE_BASE_URL;

function Contact() {
  const [formData,setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const [status,setStatus] = useState("");
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name] : e.target.value})
  }
const handleSubmit = async (e)=>{
  e.preventDefault();
  setStatus("Sending...");

  try {
    const response = await fetch(`${apiUrl}/send`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(formData),
    })

    if(response.ok){
      setStatus("Message sent succesfully!");
      setFormData({name : "",email : "",message : ""})
    }
    else{
      setStatus("Failed to send message. Try again")
    }
  } catch (error) {
    setStatus("Error occured. Try again")
  }
  setTimeout(() => {
    setStatus("");
  }, 30000); // 30,000 ms = 30 seconds

}


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        <p>{status}</p>
      </form>
    </section>
  );
}

export default Contact;
