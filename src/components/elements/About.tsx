import Box from '@mui/material/Box'
import React from 'react'

const About = () => {
  return (
    <Box display='flex' color='#FFFFFF' sx={{background:'rgb(0,48,91,1)'}} id='about'>
        <Box width={{md:'68%',xs:'85%'}} margin='auto' textAlign={{md:'left',xs:'justify'}}>
            <Box height={120}/>
            <Box sx={{fontFamily: "'Raleway', sans-serif"}} fontSize='2.7rem' textAlign='center'>ABOUT US</Box>
            <Box height={36}/>
            <Box fontFamily= "'Open Sans', sans-serif" marginBottom={'20vh'}>
                <Box>
                    Advocate Akanksha Choudhary is a qualified Advocate-on-Record, Supreme Court of India with a 
                    vast experience in the field of dispute resolution and advisory work. 
                    She has graduated from the prestigious West Bengal National University of Juridical Sciences, Kolkata.
                </Box>
                <Box height={6}/>
                <Box>
                    During her initial years of learning in the legal field she has worked with :
                </Box>
                <Box 
                    // sx={{'>ul>li':{marginBottom:'10px'}}}
                >
                    <Box component='ul' paddingLeft={{md:'2rem',xs:'1.5rem'}}>
                        <li>A well established Tax Litigation and Advisory law firm.</li>
                        <li>
                            A leading Advocate-on-Record who has a successBox legal practice with special focus on the Supreme Court of India. 
                            During her stint she worked on many matters requiring interpretation of the Constitution of India, Central and State Laws, 
                            Arbitration Laws,Land Acquisition Laws,Education Laws among many others.
                        </li>
                        <li>
                            A Senior Advocate in the High Court of Delhi who also appears before the District Courts and Tribunals with focus 
                            in the areas of civil and commercial litigation. His speciality includes interpretation
                            of the Code of Civil Procedure Code,1908, Arbitration Laws, Service Laws, Intellectual Property Laws etc.
                        </li>
                    </Box>
                </Box>
                <Box>
                    After her enriching experience, she embarked on a journey as a full time independent legal practitioner and established the 
                    chambers in the year 2020. The chambers of Akanksha Choudhary deals largely in civil and commercial matters, 
                    while also handling disputes in the space of consumer, employment, 
                    arbitration and matrimony before the Supreme Court of India, High Court of Delhi, Tribunals and the District Courts.
                </Box>
                <Box>
                    She aims to uphold the highest standards in the legal profession by delivering quality legal 
                    assistance at transparent and reasonable professional fees with an aim to ensure justice for all. 
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default About