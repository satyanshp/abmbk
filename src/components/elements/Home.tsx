import Box from '@mui/material/Box'
import React from 'react'
import '../styles/home.scss'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  return (
    <Box className='app__home__container' height={{md:'95vh',xs:'75vh'}} display='flex' flexDirection={{md:'row',xs:'column'}} id='home'>
        <Box width={{md:'44%',xs:'100%'}} sx={{background:'#00305BA6'}} display='flex' height={{md:'100%',xs:'90%'}}>
          <Box margin='auto' marginLeft={{md:'40%',xs:'10%'}} display='flex' flexDirection='column' fontFamily= "'Open Sans', sans-serif">
            <Box fontSize='2.65rem' lineHeight='2.8rem' letterSpacing='0.09rem' fontWeight='700' color='#FFFFFF'>ABMK LAW <br/>CHAMBERS</Box>
            <Box height={8}/>
            <Box height={'1.6px'} width='100%' sx={{background:'#FFFFFF'}}/>
            <Box display='flex' color='#FFFFFF' fontSize='1.22rem'>ADVOCATES & SOLICITORS</Box>
          </Box>
        </Box>
        <Box width={{md:'56%',xs:'100%'}} height={{md:'100%',xs:'10%'}}>
          <Box display='flex' justifyContent='center' height={{md:'fit-content',xs:'100%'}} margin={{md:'10px 0px 0px 100px',xs:'0 auto'}} >
            <Box className='app__home__search' display='flex' margin={{md:'none',xs:'auto'}} minWidth={{md:'190px',xs:'250px'}} padding='0 5px' height='30px' alignItems='center' borderRadius='2.5px' sx={{background:'#FFFFFF'}}>
              <Box display='flex'><SearchIcon sx={{color:'grey'}}/></Box>
              <Box display='flex'><input className='app__home__input' type="text" placeholder='Search Site' /></Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Home