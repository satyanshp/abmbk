import Box from '@mui/material/Box'
import React from 'react'
import '../styles/home.scss'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <Box className='app__home__container' style={{height:'95vh'}} display='flex' id='home'>
        <Box width='44%' sx={{background:'#00305BA6'}} display='flex'>
          <Box margin='auto' marginLeft='40%' display='flex' flexDirection='column' fontFamily= "'Open Sans', sans-serif">
            <Box fontSize='2.65rem' lineHeight='2.8rem' letterSpacing='0.09rem' fontWeight='700' color='#FFFFFF'>ABMK LAW <br/>CHAMBERS</Box>
            <Box height={8}/>
            <Box height={'1.6px'} width='100%' sx={{background:'#FFFFFF'}}/>
            <Box display='flex' color='#FFFFFF' fontSize='1.22rem'>ADVOCATES & SOLICITORS</Box>
          </Box>
        </Box>
        <Box width='56%'>
          <Box display='flex' justifyContent='center' margin={'10px 0px 0px 100px'} >
            <Box className='app__home__search' display='flex' minWidth='190px' padding='0 5px' height='30px' alignItems='center' borderRadius='2.5px' sx={{background:'#FFFFFF'}}>
              <Box display='flex'><SearchIcon sx={{color:'grey'}}/></Box>
              <Box display='flex'><input className='app__home__input' type="text" placeholder='Search Site' /></Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Home