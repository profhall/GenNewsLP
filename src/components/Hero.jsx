/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import BannerLogo from './../assets/2.png'; // Path to your logo
import stepsPhoto from './../assets/photos/stepsPhoto.png'; // Path to your logo
import TIPhoto from './../assets/photos/TipHarris.png'; // Path to your logo
import groupPhoto from './../assets/photos/group2.png'; // Path to your logo
// import groupPhoto from './../assets/photos/group.png'; // Path to your logo

const slides = [
  {
    image: stepsPhoto, // Replace with your slide image
    headline: 'Welcome to GENerational News',
    subheadline: 'News for & by (Y)OUR Generation',
  },
  {
    image: TIPhoto, // Replace with your slide image
    headline: 'Empowering Young Voices',
    subheadline: 'Empowering youth to express themselves through a curated, safe, and engaging news platform. Join us in building a community where every voice matters.',
  },
  {
    image: groupPhoto, // Replace with your slide image
    headline: 'Join the Movement',
    subheadline: 'Connecting generations through stories',
  },
];

const Hero = ({ onScrollDown }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is "small" or less

  return (
    <Box sx={{ position: 'relative', width: '100%', height: isMobile ? "100vh": '90vh', backgroundColor: 'white' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                px: 2,
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  zIndex: 1,
                }}
              />

              {/* Content (Logo and Text) */}
              <Box sx={{ zIndex: 2, width: '80%' }}>
                {/* Display Logo on the First Slide */}
                {/* {index === 0 && ( */}
                  <Box sx={{ }}>
                    <img
                      src={BannerLogo}
                      alt="Generational News Logo"
                      style={{ width: isMobile ? "95%": '60%', height: 'auto' }}
                    />
                  </Box>
                {/* )} */}

                {/* Headline and Subheadline */}
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {slide.headline}
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  {slide.subheadline}
                </Typography>

                {/* Show More Button */}
                <Button variant="contained" color="success" size="large" onClick={onScrollDown}>
                  Show More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
