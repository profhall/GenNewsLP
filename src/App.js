import React, { useRef } from 'react';
import { Container, Box, Typography, Button, AppBar, Toolbar, Link, Card, CardMedia, CardContent, useTheme } from '@mui/material';
import Hero from './components/Hero';
import ReactPlayer from 'react-player';

function App() {
  const theme = useTheme(); // Access the theme

  // Create a ref for the main section
  const mainSectionRef = useRef(null);

  // Function to scroll to the main section
  const handleScrollDown = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box sx={{ 
      bgcolor: theme.palette.primary.main, minHeight: '99vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>

       {/* Header */}
      <Box component="header">
       <Hero onScrollDown={handleScrollDown} />

      </Box>

      {/* Main Content */}
      <Container         
        ref={mainSectionRef} // Attach the ref to this section
        maxWidth="xl" 
        sx={{ flexGrow: 1, my: 3, borderRadius: '50%'  }}>

         
        <Card sx={{textAlign:'center'}}>

        <CardContent >
            <Typography variant="h4" gutterBottom>
            Want to be a Generational News reporter?
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
             Email your contact information and video of your reporting in your community to info@gennews.tv. Please keep the video to 60 seconds or less.
            </Typography>
          </CardContent>
           {/* Video Player */}
        <ReactPlayer
          url="/assets/promo_gen_news.mp4" // Replace with your video URL
          controls
          width="100%"
          height="560px"
          style={{  backgroundColor: 'black',}}
        />
        </Card>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#212121', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} GENerational News | All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
