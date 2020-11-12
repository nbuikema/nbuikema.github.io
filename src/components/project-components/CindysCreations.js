import React from 'react';

import home from '../../images/projects/cindys-creations/home.png';
import products from '../../images/projects/cindys-creations/products.png';
import product from '../../images/projects/cindys-creations/product.png';
import contact from '../../images/projects/cindys-creations/contact.png';
import checkout from '../../images/projects/cindys-creations/checkout.png';
import account from '../../images/projects/cindys-creations/account.png';
import userOrders from '../../images/projects/cindys-creations/user-orders.png';
import adminOrders from '../../images/projects/cindys-creations/admin-orders.png';

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
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={home}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Landing Page"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Landing Page</h4>
            <p className="text-white">Fully responsive design.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={products}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Products"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Products</h4>
            <p className="text-white">
              Search for products with pagination to limit network requests.
              <br />
              Apply filters to see specific products.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={product}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Product"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Product</h4>
            <p className="text-white">
              View a specific product for more in-depth information.
              <br />
              See different images with a fully responsive image carousel.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={checkout}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Checkout"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Checkout</h4>
            <p className="text-white">
              Checkout the items in your cart via Braintree payment processing.
              <br />
              Unauthed orders are supported with optional account creation.
              Delivery information is prepopulated for users with delivery
              addresses on file.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={contact}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Contact"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Contact</h4>
            <p className="text-white">
              Contact the creator with requests or inquiries.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={account}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations User Account"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">User/Admin Account</h4>
            <p className="text-white">
              Manage personal information, order history, or admin options with
              a single dropdown.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={userOrders}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Order History"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">User's Order History</h4>
            <p className="text-white">
              View order history and get email updates when the status of an
              order changes.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={adminOrders}
            className="d-block w-100 carousel-image"
            alt="Cindy's Creations Manage Orders"
          />
          <div className="carousel-caption d-none d-xl-block">
            <h4 className="text-white">Admin Manage Orders</h4>
            <p className="text-white">
              View orders and update the status so customers can get up to date
              information about their order.
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
