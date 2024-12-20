import React from 'react';
import { Carousel } from 'react-bootstrap';
import Layout from './Layout';


const Home = () => {


  return (
    

      <div className="Home">

        {/* السلايدر الرئيسي */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x400?text=Black+%26+White+Forest"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Black & White Forest</h3>
              <p>Pursue Justice</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x400?text=Drama+Series"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Drama Highlight</h3>
              <p>Top Rated Shows</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x400?text=Black+%26+White+Forest"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Black & White Forest</h3>
              <p>Pursue Justice</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/900x400?text=Black+%26+White+Forest"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Black & White Forest</h3>
              <p>Pursue Justice</p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
        
      <Layout>
        <h2>الصفحة الرئيسية</h2>
        <p>مرحبًا بك في الصفحة الرئيسية.</p>
      </Layout>



      </div>


  );
};

export default Home;



