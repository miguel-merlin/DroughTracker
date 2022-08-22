import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import logo from '../Assets/imgs/logo.svg'
import img1 from '../Assets/imgs/drought1.jpg';
import img2 from '../Assets/imgs/drought2.jpg';
import img3 from '../Assets/imgs/drought3.jpg';

const CarouselDrought = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={1000}>
                <img
                    className='d-block w-100'
                    src={img1}
                    alt="Droughts"
                />
                <Carousel.Caption>
                    <Card>
                        <Card.Img src={logo} />
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className='d-block w-100'
                    src={img2}
                    alt="Droughts"
                />
                <Carousel.Caption>
                    <Card>
                        <Card.Img src={logo} />
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className='d-block w-100'
                    src={img3}
                    alt="Droughts"
                />
                <Carousel.Caption>
                    <Card>
                        <Card.Img src={logo} />
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselDrought;