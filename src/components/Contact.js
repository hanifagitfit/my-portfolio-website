import React from 'react'

function Contact() {
  return (
    <div className="form_container">
        <form action="https://formspree.io/f/xrgdrndg" method='POST'>
           <input type="text" name="username" placeholder='Username' autoComplete='off' required />
           <input type="email" name="Email" placeholder='Email' autoComplete='off' required />
            <textarea name="massage"  cols="30" rows="6" autoComplete='off' placeholder='Write your massage here ' required></textarea>
            <input type="submit" value='send' className='submit' />
        </form>
    </div>
  )
}

export default Contact
