import Box from '@mui/material/Box'
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  return (
    <Box id='footer'>
        <Box display='flex' flexDirection='column' sx={{background:'#00305B',color:'white',padding:'10px 0px',scroll:'smooth',cursor:'pointer'}} onClick={()=>window.scrollTo({top: 0,behavior: "smooth"})}>
            <Box><KeyboardArrowUpIcon sx={{width:"34px"}}/></Box>
            <Box fontFamily= "'Open Sans', sans-serif">BACK TO TOP</Box>
        </Box>
        <Box height={10}/>
        <Box display='flex' flexDirection={{md:'column',xs:'column-reverse'}}>
            <Box fontFamily= "'Open Sans', sans-serif" color='#0F4C85' fontSize='0.85rem' textAlign={{md:'left',xs:'center'}} width={{md:'90%',xs:'100%'}} margin={{md:'auto',xs:'0px 0px 20px 0px'}}>© ABMK LAW CHAMBERS</Box>
            <Box marginBottom={{md:5,xs:1}} display='flex' justifyContent='center' gap={1}>
                <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/linkedin.webp" alt="linkedin" /></Box>
                <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/twitter.webp" alt="twitter" /></Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer