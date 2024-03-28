import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import p1 from "../../pictures/88.jpg";


import Nav from '../../Navbar//Navbar'
import './home.css'

const Home = () => {
  return (
    <section>
      <Nav/>
      <div className="container">
        <Carousel data-bs-theme="light">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='hero_btn d_flex'>
            <div className='col_1'>
              <h6>WHAT WE OFFER</h6>
              <br/>              
              <h4>OUR PRODUCTS & SERVICES</h4>
              <div className='button'>
                <button className='btn_shadow'>
                    <a href="https://web.facebook.com/vinnath.satharasinghe/?_rdc=1&_rdr"><i className='fab fa-facebook-f'></i></a>
                </button>
                <button className='btn_shadow'>
                  
                  <a href="https://www.youtube.com/channel/UCxDw9rKHEk5m_BRaL9RqFqA"><i className='fab fa-youtube'></i></a>
                </button>
                <button className='btn_shadow'>
                 
                  <a href="https://www.instagram.com/winny_satharasinghe/"> <i className='fab fa-instagram'></i></a>
                  
                </button>
                <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/vinnath-satharasinghe-663642231/?locale=zh_CN"><i className='fab fa-linkedin-in'></i></a>
                </button>
              </div>

            </div>

            <div className='col_1'>
            
              <br />
              <button className='btn_shadow'>
                <img src={''} alt="" />
              </button>
              <button className='btn_shadow'>
                <img src={''} alt="" />
              </button>
              <button className='btn_shadow'>
                <img src={''} alt="" />
              </button>
              <button className='btn_shadow'>
                <img src={''} alt="" />
              </button>
   
              
            </div>

            <div className='right'>
            <div className='right_img'>
              <img src={''} alt="" />
            </div>
          </div>

          <div className='test'>
            <div className='test_img'>
        
            </div>
          </div>
            
          </div>
          
    </section>
  );
};

export default Home;
