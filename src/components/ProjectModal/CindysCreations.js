import React from 'react';

import home from '../../images/projects/cindys-creations/home.png';
import products from '../../images/projects/cindys-creations/products.png';

const CindysCreations = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={home} className="d-block w-100 carousel-image" />
          <div className="carousel-caption d-none d-md-block">
            <h4 className="text-dark">First slide label</h4>
            <p className="text-dark">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={products} className="d-block w-100 carousel-image" />
          <div className="carousel-caption d-none d-md-block">
            <h4 className="text-dark">Second slide label</h4>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CindysCreations;
