import Box from '@mui/material/Box'
import React from 'react'

const Practice = () => {
  return (
    <Box id='practice'>
        <Box display='flex' flexDirection={{xs:'column',md:'row'}} height='70vh'>
            <Box width={{md:'35%',xs:'100%'}} sx={{background:'#EAF4F6'}} display='flex'>
                <Box sx={{fontFamily: "'Raleway', sans-serif"}} fontSize='2.7rem' color='#00305B' textAlign='left' margin={{md:'10vh 0 0 10vw',xs:'5vh 0 5vh 10vw'}}>
                    <Box fontWeight='700'>PRACTICE</Box>
                    <Box fontWeight='400'>AREAS</Box>
                </Box>
            </Box>
            <Box width={{md:'65%',xs:'100%'}}>
                <Box display='flex'>
                    <ul style={{color:'#0F4C85',fontFamily: "'Open Sans', sans-serif",fontWeight:'bold',textTransform:'uppercase',textAlign:'left',lineHeight:'1.7rem',marginLeft:'1.7vw',marginTop:'1rem'}}>
                        <li>Arbitration</li>
                        <li>Contract</li>
                        <li>Consumer</li>
                        <li>Employment/Service</li>
                        <li>Family Law</li>
                        <li>Land Acquisition</li>
                        <li>Real Estate</li>
                        <li>Insolvency</li>
                        <li>White Collar Crimes</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Practice