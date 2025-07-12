import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/file-1719664968387-83d5a3f4d758image?w=416&dpr=2&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fHww",
];

const CarouselFunc = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // below desktop
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-3">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-2">
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselFunc;
