import Box from '@mui/material/Box'
import React from 'react'
import PracticeTag from './subelement/PracticeTag'

const Practice = () => {
  return (
    <Box id='practice'>
        <Box display='flex' flexDirection={{xs:'column',md:'row'}} >
            <Box width={{md:'40%',xs:'100%'}} sx={{background:'#48504B'}} display='flex'>
                <Box sx={{fontFamily: "'Raleway', sans-serif"}} fontSize='2.7rem' color='#FFFFFF' textAlign='left' margin={{md:'30vh 0 0 10vw',xs:'5vh 0 5vh 10vw'}}>
                    <Box fontWeight='700'>PRACTICE</Box>
                    <Box fontWeight='400'>AREAS</Box>
                </Box>
            </Box>
            <Box width={{md:'60%',xs:'100%'}}>
                <Box display='grid'
                    width='86%'
                    margin='8vh auto'
                    sx={{
                        gridAutoFlow:'row dense',
                        gridAutoRows:'150px', 
                        gridTemplateColumns:'48% 48%',  
                        gap:'2vw' 
                    }}
                >
                    <PracticeTag name='Arbitration' img='/assets/images/practice/ARBITRATION.svg' width='65%' contWidth='100%'/>
                    <PracticeTag name='Contract' img='/assets/images/practice/CONTRACT.svg'  width='82%' contWidth='100%'/>
                    <PracticeTag name='Consumer' img='/assets/images/practice/CONSUMER.svg'  width='70%' contWidth='100%'/>
                    <PracticeTag name='Employment / Service' img='/assets/images/practice/EMPLOYMENT_SERVICE.svg'  width='60%' contWidth='100%'/>
                    <PracticeTag name='Family Law' img='/assets/images/practice/FAMILY_LAW.svg'  width='120%' contWidth='100%'/>
                    <PracticeTag name='Land Acquisition' img='/assets/images/practice/Land_Acquisition.svg'  width='60%' contWidth='100%'/>
                    <PracticeTag name='Real Estate' img='/assets/images/practice/REAL_ESTATE.svg'  width='60%' contWidth='100%'/>
                    <PracticeTag name='Insolvency' img='/assets/images/practice/INSOLVENCY.svg'  width='60%' contWidth='100%'/>
                    <PracticeTag name='White Collar Crimes' img='/assets/images/practice/WHITE_COLLAR_CRIMES.svg'  width='60%' contWidth='100%'/>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Practice