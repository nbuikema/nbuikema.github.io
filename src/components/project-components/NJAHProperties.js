import React from 'react';

import home from '../../images/projects/njah-properties/home.png';
import properties from '../../images/projects/njah-properties/properties.png';
import property from '../../images/projects/njah-properties/property.png';
import contact from '../../images/projects/njah-properties/contact.png';
import about from '../../images/projects/njah-properties/about.png';
import adminDashboard from '../../images/projects/njah-properties/admin-dashboard.png';
import adminProperties from '../../images/projects/njah-properties/admin-properties.png';
import adminMessages from '../../images/projects/njah-properties/admin-messages.png';

const CindysCreations = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>
        <li data-target="#carousel" data-slide-to="7"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={home}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Landing Page"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Landing Page</h4>
            <p className="text-white">
              Fully responsive design.
              <br />
              Highly optimized SEO results in first page listing.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={properties}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Properties"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Properties</h4>
            <p className="text-white">
              Search for properties with a list or MapBox pins via geolocation.
              <br />
              Apply filters to see specific listings.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={property}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Property"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Property</h4>
            <p className="text-white">
              View a specific property for more in-depth information.
              <br />
              See images of each room with a fully responsive image carousel.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={contact}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Contact"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Contact</h4>
            <p className="text-white">
              Contact management for inquiries or submit your application for
              approval.
              <br />
              Contact information and forms are dynamically rendered for easy
              updating.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={about}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties About"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">About</h4>
            <p className="text-white">
              Read about NJAH Properties history and expectations.
              <br />
              View previous tenant testimonials.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={adminDashboard}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Admin Dashboard"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Admin Dashboard</h4>
            <p className="text-white">
              Manage messages, forms, properties, and residents with a
              single-page dashboard.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={adminMessages}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Admin Messages"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Admin Messages</h4>
            <p className="text-white">
              Receive contact form submissions with downloadable files, resident
              maintenance requests, and rent payments via Braintree.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={adminProperties}
            className="d-block w-100 carousel-image"
            alt="NJAH Properties Admin Manage Properties"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Admin Manage Properties</h4>
            <p className="text-white">
              Add, update, or remove properties with automatic geolocation based
              on address.
              <br />
              Upload up to 20 images to display on the property's page.
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
