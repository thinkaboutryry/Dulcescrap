import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { Link } from "react-router";
import { SectionTitle } from "./ui/SectionTitle";
import { Button } from "./ui/Button";

// Import SVG path for arrows
import svgPaths from "../imports/svg-ia6thioo9x";

// Import images from Figma
import imgParaEllas from "figma:asset/b1d39cd57950f350632e3b882645bb107c7a9fe7.png"; // imgImage
import imgTemporada from "figma:asset/41930e1a10e0b756738dfaf3253185856538502a.png"; // imgImage1
import imgParaEllos from "figma:asset/79fa9d1b4d97e782ea941519129ca6b996d964e2.png"; // imgImage2
import imgLeftEdge from "figma:asset/c6761f4cef370358ca4feb2c0ade818e9f70d7ef.png"; // imgImage3
import imgRightEdge from "figma:asset/81807ee03e79098a3ca7e85894fc70a7786b31af.png"; // imgImage4

// Arrow Component
function Arrow({ className, style, onClick, direction }: any) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`absolute z-20 top-[calc(100%+20px)] md:top-[calc(100%+30px)] lg:top-auto lg:bottom-[-80px] group transition-transform hover:scale-110 ${
        isLeft 
          ? "left-[calc(50%-58px)] md:left-[calc(50%-70px)]" 
          : "right-[calc(50%-58px)] md:right-[calc(50%-70px)]"
      }`}
      aria-label={isLeft ? "Anterior" : "Siguiente"}
    >
      <div className={`size-[50px] md:size-[62px] relative ${!isLeft ? "rotate-180" : ""}`}>
        {/* Background Circle */}
        <div className="absolute inset-[18%_20%_20%_18%]">
          <svg className="block size-full" fill="none" viewBox="0 0 31 31">
            <circle 
              cx="15.5" 
              cy="15.5" 
              fill="white" 
              r="15.5" 
              className="shadow-md group-hover:fill-[#f0f0f0] transition-colors" 
            />
          </svg>
        </div>
        {/* Arrow Icon */}
        <div className="absolute inset-[8.33%]">
          <svg className="block size-full" fill="none" viewBox="0 0 41.6667 41.6667">
            <path 
              d={svgPaths.p1e3fe400} 
              fill="#EC268F" 
              className="group-hover:fill-[#d61f7a] transition-colors" 
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

export function CelebrationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const orderedSlides = [
    { id: 5, title: "Para ellas", image: imgParaEllas, link: "/para-ellas" },
    { id: 1, title: "Temporada", image: imgTemporada, link: "/temporada" },
    { id: 2, title: "Para ellos", image: imgParaEllos, link: "/para-ellos" },
    { id: 3, title: "Ocasiones", image: imgLeftEdge, link: "/toppers" },
    { id: 4, title: "Archivos", image: imgRightEdge, link: "/archivos" },
  ];

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // We'll control gap via CSS/padding in slide
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    initialSlide: 1, // Start at "Temporada" (Index 1)
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px", // Tighter on tablet
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px", // Show peek of next slides on mobile
        }
      }
    ]
  };

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Title Section */}
        <SectionTitle 
          title="¡Para cada celebración, tenemos el detalle perfecto!" 
          highlightedWord="celebración,"
          className="max-w-[800px] mb-8"
        />

        {/* CTA Button */}
        <div className="mb-12 md:mb-16">
          <Button to="/toppers" variant="secondary" className="px-12 py-3">
            Explorar
          </Button>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-[1400px] relative pb-24 md:pb-12">
          {/* 
            Essential Slick Styles injected manually to avoid importing font/loader assets 
            that break the build in this environment.
          */}
          <style>{`
            /* Base Slick Styles */
            .slick-slider {
              position: relative;
              display: block;
              box-sizing: border-box;
              user-select: none;
              touch-action: pan-y;
              -webkit-tap-highlight-color: transparent;
            }
            .slick-list {
              position: relative;
              display: block;
              overflow: hidden;
              margin: 0;
              padding: 0;
            }
            .slick-list:focus {
              outline: none;
            }
            .slick-list.dragging {
              cursor: pointer;
              cursor: hand;
            }
            .slick-slider .slick-track,
            .slick-slider .slick-list {
              transform: translate3d(0, 0, 0);
            }
            .slick-track {
              position: relative;
              top: 0;
              left: 0;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            .slick-track:before,
            .slick-track:after {
              display: table;
              content: '';
            }
            .slick-track:after {
              clear: both;
            }
            .slick-loading .slick-track {
              visibility: hidden;
            }
            .slick-slide {
              display: none;
              float: left;
              height: 100%;
              min-height: 1px;
            }
            [dir='rtl'] .slick-slide {
              float: right;
            }
            .slick-slide img {
              display: block;
            }
            .slick-slide.slick-loading img {
              display: none;
            }
            .slick-slide.dragging img {
              pointer-events: none;
            }
            .slick-initialized .slick-slide {
              display: block;
            }
            .slick-loading .slick-slide {
              visibility: hidden;
            }
            .slick-vertical .slick-slide {
              display: block;
              height: auto;
              border: 1px solid transparent;
            }
            .slick-arrow.slick-hidden {
              display: none;
            }

            /* Custom Celebration Section Styles */
            .slick-slide {
              transition: all 0.5s ease;
              padding: 0 10px;
              opacity: 0.5;
              transform: scale(0.9);
            }
            .slick-center {
              opacity: 1;
              transform: scale(1.1);
              z-index: 10;
              position: relative;
            }
            /* Fix for slide sizing */
            .slick-list {
              padding-top: 40px !important; 
              padding-bottom: 40px !important;
              overflow: visible; /* Allow shadows/scaling to show */
            }
          `}</style>
          
          <Slider {...settings}>
            {orderedSlides.map((slide, index) => (
              <div key={slide.id} className="outline-none">
                <div className="relative rounded-[18px] overflow-hidden aspect-[368/521] shadow-xl bg-white">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for inactive slides */}
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300`} />

                  {/* Pink Label at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[57px] bg-[#ec268f]/80 flex items-center justify-center rounded-b-[18px]">
                    <p className="font-['Nunito'] font-bold text-[24px] md:text-[40px] text-white tracking-[-1px] md:tracking-[-2.4px] text-center w-full">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
