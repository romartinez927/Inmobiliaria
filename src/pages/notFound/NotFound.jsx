import React from 'react'

function NotFound() {
  return (
    <div style={{height: "80vh"}} className='d-flex flex-column gap-2 py-5 justify-content-center align-items-center'>
      <h2>404 Not Found</h2>
      <p>Oops, the page you are looking for does not exist.</p>
      <a href='/' className='btn btn-light'>Return Home</a>
    </div>
  )
}

export default NotFound