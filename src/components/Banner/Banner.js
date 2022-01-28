import React from 'react'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import './Banner.css'

import Slider from "react-slick";
import { Card } from 'react-bootstrap'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='text-center banner'>
        <Slider {...settings}>
          <div>
            {/* <img className='w-100' src={banner1} alt='banner'/> */}
            <Card className="w-100">
                <Card.Img src={banner1} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
          </div>
          <div>
          
          <Card className="w-100">
                <Card.Img src={banner2} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
          </div>
          <div>
          <Card className="w-100">
                <Card.Img src={banner3} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
          </div>
       
        </Slider>
    </div>
  )
}

export default Banner
