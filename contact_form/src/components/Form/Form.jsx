import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css';
import { MdMessage } from 'react-icons/md';
import { MdCall } from "react-icons/md";

const Form = () => {

    const [name, setName] = useState("SampleName");
    const [email, setEmail] = useState("sample@Email.com");
    const [text, setText] = useState("This is sample TEXT");

    const onFormClick = (e) => {
        e.preventDefault();

        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
         
    };
  return (
    <div className={`${styles.container}`}>
        <div className={styles.contactform}>
            <div className={`${styles.form_btn}`}>
                <Button text = "VIA SUPPORT CHAT" icon = { <MdMessage fontSize='24px'/> }/>
                <Button text = "VIA CALL" icon = { <MdCall fontSize='24px' /> }/>
            </div>

            <Button 
            isOutline = {true} 
            text = "VIA EMAIL FORM" 
            icon = { <MdMessage fontSize='24px'/> }/>
            <form onSubmit={onFormClick}>
                <div className={styles.form_container}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='first' />
                </div>
                <div className={styles.form_container}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name='email' />
                </div>
                <div className={styles.form_container}>
                    <label htmlFor="message">TEXT</label>
                    <textarea name='message' />
                </div>
                <div>
                    <Button text = "SUBMIT" />
                </div>
                <div style={{textAlign: 'right'}}>
                    {name} <br/>
                    {email} <br/>
                    {text}

                </div>
            </form>
        </div>
        <div className={styles.contactform_image}>
            <img src="/images/person.svg" alt="contact_image" />
        </div>
    </div>
  )
}

export default Form