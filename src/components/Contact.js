import React from 'react'
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_y1615gl', 'template_vj3nolw', e.target, 'user_eYfZYy2KkgiTap3w0d1uA')
          .then((result) => {
              console.log(result.text);
              toast.success("Thank you for contacting");
          }, (error) => {
              console.log(error.text);
              toast.error(error.text);
          });
          e.target.reset();
      }

    return (
        <div id="contact" className="relative bg-use-blue h-screen w-screen flex-col lg:space-y-6 space-y-14 py-2">
            <div className="space-y-8 lg:space-y-3">
                <h1 className="text-center text-use-yellow font-bold text-lg lg:text-4xl uppercase ">Contact</h1>
                <h2 className="text-sm  lg:text-xl text-center text-gray-300
                            font-bold"><Typewriter options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    "Get in Touch 🤝",
                                    "send me a E-Mail 📧",
                                ]
                            }}/></h2>
            </div>
            <div className="flex items-center justify-center px-5 pt-2 pb-2">
            
                <form onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <input type="text" placeholder="Name" name="from_name" required
                        className="rounded-2xl focus:outline-none p-2 w-full bg-gray-200" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name="from_email" required
                         className="rounded-2xl focus:outline-none p-2 w-full bg-gray-200" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" name="subject" required
                         className="rounded-2xl focus:outline-none p-2 w-full bg-gray-200" />
                    </div>
                    <div>
                        <textarea name="message" id="" placeholder="Message..." cols="50" rows="8" required
                         className="rounded-2xl focus:outline-none p-2 w-full bg-gray-2 bg-gray-200"></textarea>
                    </div>
                    <div className="flex justify-between items-center px-2">
                        <button type="submit"  className="rounded-full text-use-blue hover:text-white shadow-xl focus:outline-none bg-yellow-600 p-2">Send <i class="fas fa-paper-plane"></i></button>
                        <div className="flex text-white space-x-2 mb-2">
                            <a href="https://github.com/mahafuztechie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                            <a href="https://www.instagram.com/mahfuz.techie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/mahafuzaadeez5" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-facebook"></i></a>
                        </div>
                    </div>
                </form>   
            </div>  
            <div className="absolute hidden lg:flex bottom-10 right-20 "><Link to="home" smooth={true} duration={1000}><i className="text-4xl text-yellow-600 cursor-pointer w-10 h-10 transition duration-200 ease-in-out transform hover:scale-125 fas fa-arrow-circle-up"></i></Link></div>
            <ToastContainer position="top-left"/>
        </div>
    )
}

export default Contact
