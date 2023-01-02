import Box from '@mui/material/Box'
import React from 'react'
import Forms from './subelement/Forms'
import '../styles/contact.scss'

interface contactProp{
    contactActive:number;
}
const Contact = ({contactActive}:contactProp) => {
  return (
    <Box position='relative' id='contact'>
        <Box position='relative' zIndex='5 !important' height='100%' sx={{background:'#E0A965'}}>
            <Box display='flex' flexDirection={{md:'row',xs:'column'}} color='#FFFFFF' position='static' height='100%'>
                <Box width={{md:'42%',xs:'100%'}} height={{md:'100%',xs:'50%'}} margin='auto' sx={{background:'#48504B'}}>
                    <Box height={{md:contactActive,xs:'fit-content'}} display='flex' flexDirection='column'>
                        <Box height={{md:'25vh',xs:'8vh'}}/>
                        <Box sx={{fontFamily: "'Raleway', sans-serif",textTransform:'uppercase'}} fontSize='2.4rem' fontWeight='700'>Law chambers of<br/>Akanksha Choudhary</Box>
                        <Box height={{md:'0vh',xs:'6vh'}}/>
                    </Box>
                </Box>
                <Box width={{md:'58%',xs:'90%'}} margin={{xs:'auto',md:''}} height='100%' 
                    // sx={{background:'#00305B66'}}
                >
                    <Box height={{md:'17vh',xs:'7vh'}}/>
                    <Box fontFamily= "'Raleway', sans-serif" textAlign='left' width='80%' margin='auto'>
                        <Box fontSize='1.5rem' textTransform='uppercase'>
                            <Box fontWeight='700'>Our Address</Box>
                            <Box height={20}/>
                            <Box lineHeight='2.2rem'>G-1416,<br/>Basement,<br/>Chittaranjan Park,<br/>New Delhi<br/>110019</Box>
                        </Box>
                        <Box height={80}/>
                        <Box>
                            <Box color='#48504B' fontWeight='400' fontSize='1.1rem'>For any general inquiries, please fill in the following contact form:</Box>
                            <Box height={21}/>
                            <Box>
                                <Forms/>
                            </Box>
                        </Box>
                        <Box height={'11vh'}/>
                    </Box>
                </Box>
            </Box>
        </Box>
        
        <Box className='app__contact__background' zIndex='0' position='absolute' top='0' width='100%' height='100%'></Box>
    </Box>
  )
}

export default Contact