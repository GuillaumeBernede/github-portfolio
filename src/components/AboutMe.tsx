import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="aboutme">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>About Me</h1>
          <p>I am currently pursuing a Master’s degree in Computer Science with a focus on <b>Artificial Intelligence</b> at <a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer">
                            Politecnico di Milano
                        </a>.</p>
          <p>Through my engineering degree at  <a href="https://www.ensea.fr/en/" target="_blank" rel="noopener noreferrer">
                                ENSEA
                        </a> (France), I also gained a solid background in <b>electronics, embedded systems, and signal processing</b>.</p>
          <p>I am eager to apply my knowledge to impactful and innovative projects, and I am always curious to learn new technologies and approaches.</p>
          <p>Outside academics, I’m passionate about sports — I was actively involved in my school’s sports association, where I organized volleyball activities. I also used to play rugby and I am currently practicing running.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;