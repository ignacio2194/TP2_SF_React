const ContactUs = () => {

    return(
        <div className="bg-container">
       <h1 clasName="pageTitle">Contact Us</h1> 
            <div className="flex content-center justify-center p-5 rounded text-black w-96 bg-indigo-300" id="contactForm">
                <form id="contactForm" action="">
                    <label for="name">Name</label>
                    <input className="flex rounded resize-none mb-5 mt-2 p-1 w-80" type="text" name="name" value="" id="contactFormName" />
                    <label for="email">Email</label>
                    <input className="flex rounded resize-none mb-5 mt-2 p-1 w-80" type="email" name="email" id="contactFormEmail" onblur="validateEmail();" />
                    <label for="comments">Comments</label>
                    <textarea className="flex rounded resize-none mb-5 mt-2 p-1 w-80" name="comments" id="contactFormComments" cols="30" rows="10"></textarea>  
                    <button className="rounded p-1 w-40 bg-blue-600 cursor-pointer normal-case inline-block text-center items-start" id="contactFormReset" onclick="return(formReset());">Reset</button>  
                    <button className="rounded p-1 w-40 bg-blue-600 cursor-pointer normal-case inline-block text-center items-start" id="contactFormSend" onclick="return(sendForm());">Send</button> 
                </form>
            </div>


        </div>
    )

}

export default ContactUs;