import React from 'react'

function Carousel() {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner rounded">
                <div class="carousel-item active">
                <img src="https://staticbp.com/img/prop_new_b/510/00510896-02.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://staticbp.com/img/prop_new_b/510/00510896-03.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://staticbp.com/img/prop_new_b/510/00510896-02.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default Carousel