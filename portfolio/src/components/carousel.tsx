import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
    // Define your component props here
    images: string[];
}

const CarouselMe: React.FC<Props> = (props) => {
    // Add your component logic here
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.images.length > 1}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType="desktop"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {props.images.map((image, index) => (
                <img key={index} src={image} alt={`carousel image ${index}`} />
            ))}
        </Carousel>
     );
};

export default CarouselMe;