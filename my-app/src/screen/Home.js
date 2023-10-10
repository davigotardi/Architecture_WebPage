import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <section className="hero-section">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzYSUyMCU3Q3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="feature-posts container">
        <h3 className="text-center text-uppercase pt-4">Feature Posts</h3>
        <div className="row">
  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYSUyMCU3Q3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
  </div>
  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
      </div>
    </div>
  </div>


  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://images.unsplash.com/photo-1568605115459-4b731184f961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className='d-grid'>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
      </div>
    </div>
  </div>
</div>


       
      <section className='container-fluid bg-primary bg-gradient mt-4 text-center' style={{ minHeight: '150px' }}> 
    <div className='d-flex flex-column justify-content-center align-items-center mx-auto'>
        <i className="fs-1 text-warning my-3 fa-solid fa-location-arrow"></i>
        <h3 className='text-white text-uppercase'>We have a wide variety of posts </h3>
        <button className='fw-bold btn btn-warning my-2 text-uppercase'>View Posts </button>
    </div>
</section>
<section>
      
</section>

            </section>
            <section className="our-portfolio container">
        <h3 className="text-center text-uppercase py-4">Our Portfolio</h3>
        <div className="container overflow-hidden text-center">
  <div className="row gy-5">
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNhc2ElMjAlN0N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjYXNhJTIwJTdDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />

      </div>
    </div>
  </div>
</div>
      </section>


    </div>
  );
}

export default Home;
