import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import '../styles/notice.scss'

interface NoticeProp{
  onClick:()=>void;
}

const Notice = ({onClick}:NoticeProp) => {
  const style={
    flexCenterHV:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
  }
  return (
    <Box style={style.flexCenterHV} overflow='auto' position='fixed' top='0' bottom='0' right='0' left='0' zIndex='50'>
      <Box position='fixed' top='0' bottom='0' right='0' left='0' sx={{background: '#FFFFFF'}}></Box>
      <Box 
        position='absolute' 
        top='50%'
        left='50%'
        zIndex='2' 
        width={{xl:'40vw',md:'50vw',sm:'60vw',xs:'80vw'}} 
        flexDirection={'column'} 
        fontFamily= "'Roboto', sans-serif !important" 
        fontSize='0.9rem' 
        textAlign='left' 
        fontWeight='700' 
        style={style.flexCenterHV}
        sx={{transform:'translate(-50%,-50%)'}}
      >
        <Box fontSize='1.4rem' fontWeight='800'>NOTICE</Box>
        <Box height={30}/>
        <Box width='100%' lineHeight='1.6rem'>Disclaimer & Confirmation:</Box>
        <Box>
          This website has been designed only for the purposes of dissemination of basic information 
          which is otherwise available on the internet, various public platforms and social media. 
          As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. 
          By clicking on the “I AGREE” button below, you acknowledge the following:
        </Box>
        <Box height={20}/>
        <Box>
          <ul style={{margin:'0',padding:'0',paddingLeft:'1.8rem'}}>
            <li>
              There has been no advertisement, personal communication, solicitation, 
              invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;
            </li>
            <li>
              The information about us is provided to you on your specific 
              request and any information obtained or materials downloaded 
              from this website is completely at your own discretion,and that;
            </li>
            <li>
              We are not liable for any consequence of any action taken by you relying on the material / information provided on this website.
            </li>
          </ul>
        </Box>
        <Box width='100%'>If you have any legal issues, you, in all cases, must seek independent legal advice.</Box>
        <Box height={25}/>
        <Box width='100%'>We use cookies to enhance your experience. By continuing to visit this website you agree to our use of cookies.</Box>
        <Box height={40}/>
        <Box>
          <Button
            className='app__notice__btn'
            variant='contained'
            onClick={()=>onClick()}
          >
            I AGREE
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Notice