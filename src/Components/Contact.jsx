import React,{useState} from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState ({
        name:'', email:'', message:''});
    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        //Add form submission logic here
    };
  return (
    <motion.div  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}>
    <section id="contact" className='contact'>
        <h2>Contact Me!</h2>
     {submitted ? ( <p>Thanks for contacting me! I'll get back to you soon.</p>) : 
     (
     <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder='Your name'
     value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder='Your Email'
     value={formData.email} onChange={handleChange} required />
     <textarea
      name="message" placeholder='Your Message'
     value={formData.message} onChange={handleChange} required />
     <button type="submit">Send Message</button>
    </form>
    )}
    </section>
    </motion.div>
  );
};

export default Contact;
