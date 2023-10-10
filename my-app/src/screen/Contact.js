import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container '>
    <h3 className='text-center text-uppercase pt-4'>Contact Us</h3>
    <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 1h-2'/>
    <form>
        <div class="mb-3">
            <label htmlfor="Name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="Name" required />
        </div>
        <div class="mb-3">
            <label htmlfor="Phone" class="form-label">Contact Number</label>
            <input type="text" class="form-control" id="phone" />
        </div>
        <div class="mb-3"/>
            <label htmlfor="Email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="Email"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
        </div>
        
        <div class="mb-3">
        <label htmlfor="timing" class="form-label">When can I reacxh you</label>
        <select class="form-select" id="timing">
                <option defaultValue="">Best Time To Reach</option>
                <option value="M">Morning</option>
                <option value="A">Afternoon</option>
                <option value="E">Evening</option>
        </select>
        </div>
        <div class="mb-3">
        <label htmlfor="query" class="form-label">Enter your query below</label>
            <textarea class="form-control" id="query" required>

            </textarea>
        </div>
        <div className='d-grid'>
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
            </div>
       )
}

export default Contact