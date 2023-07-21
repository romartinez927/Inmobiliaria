import React from 'react'
import "./nota.css"

function Nota() {
  return (
    <div>
        <div className='bg-nota' style={{background: 'url("https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80")'}}>
            <div className='d-flex'>
                <p>Blog</p>
                <p>Categoría</p>
                <p>Master The Art Of Nature With These 7 Tips</p>
            </div>
            <h2>Master The Art Of Nature With These 7 Tips</h2>
            <p>August 29, 2022</p>
        </div>
        <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                    <img src="https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" />
                    <h5>Lorem Ipsum</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nota