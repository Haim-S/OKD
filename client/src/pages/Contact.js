import React, {useState, useRef} from 'react'
import Heading from '../components/common/titles/Heading'
import { contact } from '../constants/data'

const Contact = () => {


  const [status, setStatus] = useState("Submit")
  const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, subject ,message } = e.target.elements
      let details = {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
      }
      let response = await fetch("http://localhost:4000/email/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(details)
      })
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
  }

  return (
    <>
    <div className='contact'>
      <div className='container'>
        <Heading title="Keep In Touch"/>
        <div className='content flexsb'>
          <div className='right'>
            <form onSubmit={handleSubmit}>
              <div className='flex'>
                <input type="text" id="name" placeholder='Name' data-aos='flip-left'/>
                <input type="email" id="email" placeholder='Email' data-aos='flip-right'/>
              </div>
                <input type="text" id='subject' placeholder='Subject' data-aos='flip-up'/>
                <textarea name='' id="message" cols='30' rows='10' data-aos='flip-down'></textarea>
                <button type="submit" data-aos='zoom-in-up'>Submit</button>
            </form>
          </div>
          <div className='left'>
            {contact.map((item, index)=> (
              <div key={index} className='box' data-aos='zoom-in'>
                <i>{item.icon}</i>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact