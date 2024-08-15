import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {unidades }from '../../data/unidades';


const Unidades = () => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      };

    return (
        <section id="unidades" class="h-screen border border-blue-500 p-8 flex flex-col gap-2">
            <h1 class="text-3xl font-medium mb-4 text-center tracking-wide text-[#1e324d]">Unidades</h1>

            <div class="h-3/4">
                <Slider {...settings}>
                    {
                        unidades.map(( unidad, index) => (
                            <div key={index} className='bg-[#1e324d] h-full rounded-lg pt-4 flex flex-col gap-4'>
                                <div className='h-56 flex justify-center'>
                                    <img src={unidad.img} alt={unidad.title} className='w-3/4 h-full rounded-md' />
                                </div>

                                <div className='text-center'>
                                    <p className='text-2xl text-white font-semibold mb-3 uppercase'>{ unidad.title}</p>
                                    <p className='text-white'>{ unidad.descripcion}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}

export default Unidades;
