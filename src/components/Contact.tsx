// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

// function Contact() {

//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const [nameError, setNameError] = useState<boolean>(false);
//   const [emailError, setEmailError] = useState<boolean>(false);
//   const [messageError, setMessageError] = useState<boolean>(false);

//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     setNameError(name === '');
//     setEmailError(email === '');
//     setMessageError(message === '');

//     /* Uncomment below if you want to enable the emailJS */

//     if (name !== '' && email !== '' && message !== '') {
//       var templateParams = {
//         name: name,
//         email: email,
//         message: message
//       };

//       console.log(templateParams);
//       emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//           console.log('FAILED...', error);
//         },
//       );
//       setName('');
//       setEmail('');
//       setMessage('');
//     }
//   };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
//           <Box
//             ref={form}
//             component="form"
//             noValidate
//             autoComplete="off"
//             className='contact-form'
//           >
//             <div className='form-flex'>
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Your Name"
//                 placeholder="What's your name?"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 error={nameError}
//                 helperText={nameError ? "Please enter your name" : ""}
//               />
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 error={emailError}
//                 helperText={emailError ? "Please enter your email or phone number" : ""}
//               />
//             </div>
//             <TextField
//               required
//               id="outlined-multiline-static"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               error={messageError}
//               helperText={messageError ? "Please enter the message" : ""}
//             />
//             <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUS = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//           publicKey: 'YOUR_PUBLIC_KEY',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//     } else {
//       console.error('Form reference is null.');
//     }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };


// import React, { useState } from 'react';
// import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [messageError, setMessageError] = useState(false);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const hasError = name.trim() === '' || email.trim() === '' || message.trim() === '';
//     setNameError(name.trim() === '');
//     setEmailError(email.trim() === '');
//     setMessageError(message.trim() === '');

//     if (hasError) return;

//     const templateParams = {
//       name,
//       email,
//       message,
//     };

//     emailjs
//       .send('service_j9kg0m6', 'template_1u0yhej', templateParams, 'RUEM691sObjwldyCZ')
//       .then(
//         () => {
//           alert('Message sent successfully!');
//           setName('');
//           setEmail('');
//           setMessage('');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           alert('Message failed to send.');
//         }
//       );
//   };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
//           <Box
//             component="form"
//             onSubmit={sendEmail}
//             noValidate
//             autoComplete="off"
//             className="contact-form"
//           >
//             <div className="form-flex">
//               <TextField
//                 required
//                 id="name"
//                 label="Your Name"
//                 placeholder="What's your name?"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                   if (e.target.value !== '') setNameError(false);
//                 }}
//                 error={nameError}
//                 helperText={nameError ? 'Please enter your name' : ''}
//                 autoComplete="name"
//               />
//               <TextField
//                 required
//                 id="email"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   if (e.target.value !== '') setEmailError(false);
//                 }}
//                 error={emailError}
//                 helperText={emailError ? 'Please enter your email or phone number' : ''}
//                 autoComplete="email"
//               />
//             </div>
//             <TextField
//               required
//               id="message"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//                 if (e.target.value !== '') setMessageError(false);
//               }}
//               error={messageError}
//               helperText={messageError ? 'Please enter the message' : ''}
//               autoComplete="off"
//             />
//             <Button type="submit" variant="contained" endIcon={<SendIcon />}>
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import '../assets/styles/Contact.scss';

// function Contact() {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         'YOUR_SERVICE_ID',      // replace this
//         'YOUR_TEMPLATE_ID',     // replace this
//         form.current,
//         'YOUR_PUBLIC_KEY'       // replace this
//       )
//       .then(
//         () => {
//           alert('Message sent successfully!');
//           form.current?.reset();
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           alert('Message failed to send.');
//         }
//       );
//   };

//   return (
//     <div>
//       <h1>Contact Me</h1>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="name" required />

//         <label>Email</label>
//         <input type="email" name="email" required />

//         <label>Message</label>
//         <textarea name="message" required />

//         <button type="submit">Send</button>
//       </form>

//     </div>
//   );
// }

// export default Contact;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // make sure this is created and imported

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_j9kg0m6', 'template_1u0yhej', form.current, 'RUEM691sObjwldyCZ')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message failed to send.');
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows={6} required />

      <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
