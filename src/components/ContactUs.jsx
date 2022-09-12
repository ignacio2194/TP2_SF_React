import React from "react";
import Footer from "./Footer";
import { useEffect, useState} from "react";

const ContactUs = () => {

const [formName, setFormName] = useState([]);
const [formEmail, setFormEmail] = useState([]);
const [formComments, setFormComments] = useState([]);
const [validEmail, setValidEmail] = useState([false]);

useEffect(() => {
}, [formName, formEmail]); //Array de dependencias del useEffect

function isEmailValid(email){
    //Funcion de validacion basica de email con los metodos vistos hasta el momento en el SK de React.js
    const emailParts = email.split('@');
    //Verifico que el email tenga uno y solo un simbolo @    
    if(emailParts.length !== 2){
        return false;
    }else{
        const domainParts = emailParts[1].split('.');
        //verifico que despues del @ esten el dominio y la extension
        if(domainParts.length <2){
            return false;
        }else{
            //Verifico que no sean vacios ni el usuario, ni el dominio, ni la extension
            if((emailParts[0].length > 0) && (domainParts[0].length >0) && (domainParts[1].length >0)){
                return true;
            }else{
                return false;
            }
        }
    }
}

function validateEmail(email) {

    const inputEmail = document.getElementById('contactFormEmail');
    setFormEmail(email);
  
    if(isEmailValid(email)){ 
        setValidEmail(true);
        inputEmail.style.color = "green";
    }else{  
        setValidEmail(false);
        inputEmail.style.color = "red";        
    }  
}    

function sendForm(){
    if(!validEmail){
        alert("Please, enter a valid Email address.");
        return false;
    }else if(document.getElementById('contactFormName').value.trim() === "" || 
             document.getElementById('contactFormComments').value.trim() === ""){
        alert("Please, complete all the fields.");
        return false;

    }else{
        alert("Thanks, your message has been sent successfully!");
        // Aca deberia enviar los datos a un script para procesarlos, por ahora "simulamos"
        // el envio.... si devolvieramos true, se realizaria el submit del form al action establecido.
        //formReset();
        showFormData();
        return false;
    }
}

function showFormData(){
    // const name = document.getElementById('contactFormName').value;
    // const email = document.getElementById('contactFormEmail').value;
    // const comments = document.getElementById('contactFormComments').value;   
    // Este mensaje es ilustrativo para mostrar la info que se deberia enviar por el form
    const msgToShow = `
    <div class="msgToShow">
        <h1>Meessage Sent</h1>
        <p>Your message has been sent as following:</p>
        <br /><br />
        <p>
            <u>Name:</u> <i>${formName}</i><br /><br />
            <u>Email:</u> <i>${formEmail}</i><br /><br />
            <u>Comments:</u> <i>${formComments}</i><br /><br />
        </p>
    </div>
    `;

    document.getElementById("contactFormContainer").innerHTML = msgToShow;
}

    return(
        <div className="bg-container">
            <h1 className="text-3xl font-bold text-center text-white ">Contact Us</h1> 
            <div className="flex content-center justify-center p-5 rounded text-black w-full " id="contactFormContainer">
                <form id="contactForm" action="" 
                    onSubmit={(e) => {
                        e.preventDefault(); 
                        sendForm();
                    }} >
                    <label htmlFor="name" className="text-white text-2xl" >Name</label>
                    <input className="flex rounded resize-none mb-5 mt-2 p-1 w-80"
                             type="text" 
                             name="name" 
                             value={formName}
                             id="contactFormName" 
                             onChange={(e) => setFormName(e.target.value)}
                    />
                    <label htmlFor="email" className="text-white text-2xl">Email</label>
                    <input className="flex rounded resize-none mb-5 mt-2 p-1 w-80" 
                            type="email" 
                            name="email" 
                            id="contactFormEmail" 
                            onChange={(e) => {validateEmail(e.target.value)}} />
                    <label htmlFor="comments" className="text-white text-2xl">Comments</label>
                    <textarea className="flex rounded resize-none mb-5 mt-2 p-1 w-80" name="comments" id="contactFormComments" cols="30" rows="10"></textarea>    
                    <button className="bg-characterAlive text-white font-bold inline-block  text-2xl py-1 mt-2 w-80" id="contactFormSend" onClick={(e) => {return(sendForm())}}>Send</button> 
                </form>
            </div>

            <Footer />
        </div>
    )

}

export default ContactUs;