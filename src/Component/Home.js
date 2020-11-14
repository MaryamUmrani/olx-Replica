import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Products from "./Product";

function Home() {
  return (
    <div classNameName="lovely_container">
      {/* CARSUAL START*/}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1193&q=80"
            alt="First slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
            <h3>OLX</h3>
            <p>Baaj Doo!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1548799767-f168d215106a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80"
            alt="Third slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
            <h3>OLX</h3>
            <p>Baaj Doo!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1597435849593-f23c912edfa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
            alt="Third slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
            <h3>OLX</h3>
            <p>Baaj Doo!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* CARSUAL END */}

      {/* NEXT PRODUCT COMPONENT */}
      <div className="lol__flex">
        <Products
          id="1"
          title="New Jeans"
          price={100}
          image="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          rating={5}
          Rupees="Rs "
        />
        <Products
          id="2"
          title="Shirts"
          price={200}
          image="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          rating={4}
          Rupees="Rs "
        />

        <Products
          id="3"
          title="Watch"
          price={300}
          image="https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1177&q=80"
          rating={3}
          Rupees="Rs "
        />
      </div>
      <img
        className="home_image_second"
        src="https://images.unsplash.com/photo-1604588814923-d8510b799533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80"
        alt=""
      />
      <div className="lol__flex">
        <Products
          id="4"
          title="Mobile"
          price={400}
          image="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          rating={2}
          Rupees="Rs "
        />

        <Products
          id="5"
          title="Shoes"
          price={500}
          image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          rating={5}
          Rupees="Rs "
        />

        <Products
          id="6"
          title="Wine-Glass"
          price={600}
          image="https://images.unsplash.com/photo-1458945037814-389ec6994cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          rating={4}
          Rupees="Rs "
        />
      </div>
      <img
        className="home_image_second"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
      {/*  */}
      <div className="lol__flex">
        <Products
          id="7"
          title="Hand-Bag"
          price={700}
          image="https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          rating={5}
          Rupees="Rs "
        />

        <Products
          id="8"
          title="Girls_shirt"
          price={800}
          image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          rating={3}
          Rupees="Rs "
        />

        <Products
          id="9"
          title="Cycle"
          price={900}
          image="https://images.unsplash.com/photo-1531727950572-d380a3ae193d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          rating={2}
          Rupees="Rs "
        />
      </div>
      {/*  */}
      <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
        <small class="f6 db tc">
          © 2020 <b class="ttu">Olx Baj-Doo!! Inc</b>., All Rights Reserved
        </small>
        <div class="tc mt3">
          <a
            href="/language/"
            title="Language"
            class="f6 dib ph2 link mid-gray dim"
          >
            Language
          </a>
          <a href="/terms/" title="Terms" class="f6 dib ph2 link mid-gray dim">
            Terms of Use
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            class="f6 dib ph2 link mid-gray dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
