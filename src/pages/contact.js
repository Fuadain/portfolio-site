import React from "react";
import '../styles/contact.css';


export default function Work() {

    const [formData, setFormData] = React.useState({
        clientName:"",
        email:"",
        phoneNumber:"",
        message:""
    })

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData, 
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("Information sent")
    }

    return (
        <div>
          <h1>
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="clientName">Name:</label>
            <input 
                id="clientName"
                name="clientName"
                type="text"
                onChange={handleChange}
                value={formData.clientName}
            />
            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input 
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={handleChange}
                value={formData.phoneNumber}
            />
            <textarea 
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Message..."
            />
            <button>Send</button>
          </form>
        </div>
        )
}