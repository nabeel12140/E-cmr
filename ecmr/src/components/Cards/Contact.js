import contact_me from '../../nsmoke.jpg'
import React from 'react'

const Contact = () => {
  return (
    <div class="padding bg-dark">
  <div class="row">
    <div class="col-md-6">
      <h2>Contact Us</h2>
      <p class="lead text-light">
        Let us know how to help you.
        we will make to contact you as soon as posible.
        we will also help to provide as much as we can do
      </p>
      <form>
        <div class="form-group">
          <label className='nav_text mt-2' for="name">Name</label>
          <input type="text" class="form-control" id="name"/>
        </div>
        <div class="form-group">
          <label className='nav_text mt-2' for="email">Email</label>
          <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
          <label className='nav_text mt-2' for="message">Message</label>
          <textarea class="form-control" id="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
    <div class="col-md-6">
      <img src={contact_me} alt="km" className='contact-img' />
    </div>
  </div>
</div>
  )
}
export default Contact