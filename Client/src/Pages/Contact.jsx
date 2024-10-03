import  { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
		name: '',
		email: '',
		massage: '',
	});

	const handleChange = (e) =>{
		const {name, value} = e.target;
		setFormData((prevData)=>({
			...prevData,
           [name]: value,
		}))
	};
	const handleSubmit = (e)=>{
		e.preventDefault();

		emailjs.sendForm(
			'service_791hals',
			'template_pg4whzf',
			e.target,
			'oLnV-xlsJyA5UA1eZ'
		  ).then(
			(result) => {
				console.log('Email successfully sent!', result.text);
				Swal.fire({
					title: "Thank You",
					text: "Email Sent Successfully, We will contact you ASAP",
					icon: "success"
				  });
			},
			(error) => {
				console.error('Error sending email:', error.text);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Failed to send email. Please try again later.",
				  });
			}
		  );
	  
		  setFormData({
			name: '',
			email: '',
			message: '',
		  });
	}
    return (
        <div>
            <div className=' pt-5'>
            <h1 className="lg:text-4xl text-2xl text-center mb-6 font-bold text-Black">Contact <span className='text-red-500'>Me</span></h1>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white dark:text-gray-800">
                
	<div className="flex flex-col justify-between">

		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-black">Let's talk!</h2>
			<div className="dark:text-gray-600 text-black text-xl">We want to here from you</div>
            <img src="https://echotechconstruction.com/wp-content/uploads/2024/04/contact_us.gif" alt="" className="px-6  " />
		</div>
		
	</div>
	<form onSubmit={handleSubmit} noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm text-black">Full name</label>
			<input id="name" type="text" name="name"
          value={formData.name}
          onChange={handleChange}
          required placeholder="Full Name" className="w-full p-3 rounded bg-gray-50" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm text-black">Email</label>
			<input id="email" type="email" name="email"
          value={formData.email}
          onChange={handleChange}
          required placeholder="email@gamil.com" className="w-full p-3 rounded bg-gray-50" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm text-black">Message</label>
			<textarea id="message"   name="message"
          value={formData.message}
          onChange={handleChange}
          required rows="3" className="w-full p-3 rounded bg-gray-50"></textarea>
		</div>
		<button type="submit" className="self-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 text-lg rounded-sm "> Send Massage</button>
	</form>
</div>
        </div>
        </div>
    );
};

export default Contact;