import Box from '@mui/material/Box'
import React from 'react'
import Forms from './subelement/Forms'
import '../styles/contact.scss'

const Contact = () => {
  return (
    <Box position='relative' height='100vh' id='contact'>
        <Box position='relative' zIndex='5 !important' height='100%' sx={{background:'rgb(15,76,133,0.8)'}}>
            <Box display='flex' color='#FFFFFF' position='static' height='100%'>
                <Box width='35%' height='100%' margin='auto' sx={{background:'#00305B96'}}>
                    <Box>
                        <Box height={'16vh'}/>
                        <Box sx={{fontFamily: "'Raleway', sans-serif"}} fontSize='2.7rem' fontWeight='400'>ABMK LAW<br/>CHAMBERS</Box>
                    </Box>
                </Box>
                <Box width='65%' height='100%' 
                    // sx={{background:'#00305B66'}}
                    paddingLeft='2.5vw'
                >
                    <Box height={'17vh'}/>
                    <Box fontFamily= "'Open Sans', sans-serif" textAlign='left'>
                        <Box fontSize='20px' textTransform='uppercase'>
                            <Box fontWeight='700'>Our Address</Box>
                            <Box height={20}/>
                            <Box>G-1416,<br/>Basement,<br/>Chittaranjan Park,<br/>New Delhi<br/>110019</Box>
                        </Box>
                        <Box height={80}/>
                        <Box>
                            <Box>For any general inquiries, please fill in the following contact form:</Box>
                            <Box height={21}/>
                            <Box>
                                <Forms/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        
        <Box className='app__contact__background' zIndex='0' position='absolute' top='0' width='100%' height='100vh'></Box>
    </Box>
  )
}

export default Contact