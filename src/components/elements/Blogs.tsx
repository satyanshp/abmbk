import Box from '@mui/material/Box';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/blog.scss'

const Blogs = () => {
  return (
    <Box>
        <Box display='flex' flexDirection='column' position='relative' fontFamily= "'Open Sans', sans-serif" textAlign='left'>
            <Box className='app__blog__background' width='100%'/>
            <Box sx={{background:'#FFFFFF'}} width='65%' margin='0 auto' position='relative' zIndex='5'>
                <Box>
                    <Box display='flex' justifyContent='space-between' height='12vh' alignItems='center' padding='0px 25px'>
                        <Box display='flex' gap={4}>
                            <Box>All Posts</Box>
                            <Box>Arbitration</Box>
                            <Box>Labour Law</Box>
                            <Box>Property Law</Box>
                            <Box>
                                More {'>'}
                                <Box>
                                    <Box display='none'>
                                        <Box>Consumer Protection</Box>
                                        <Box>Insolvency Law</Box>
                                        <Box>RERA</Box>
                                        <Box>Service Law</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' gap={5}>
                            <Box display='flex' alignItems='center'><SearchIcon/></Box>
                            <Box>
                                <Button
                                    variant='contained'
                                    style={{
                                        background:'transparent',
                                        border:'1px solid #377DBD',
                                        borderRadius:'0',
                                        color:'#377DBD',
                                        fontWeight:'400',
                                        textTransform:'capitalize'
                                    }}
                                >
                                    Log in / Sign up
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box height={20}/>
                <Box>
                    <Box display='flex' flexDirection='column'>
                        <Box margin='0 auto' width='95%' border='1px solid black'>
                            <Box display='flex'>
                                {/* <Box width='110%'><img style={{width:'100%',height:'100%',objectFit:'cover'}} src="/assets/images/home.webp" alt="" /></Box> */}
                                <Box padding='24px 36px' flexGrow='1'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Box display='flex' gap={1}>
                                            <Avatar sx={{ bgcolor: 'red',width:'32px',height:'32px',fontSize:'1.1rem' }}>A</Avatar>
                                            <Box display='flex' flexDirection='column' fontSize={'0.7rem'}>
                                                <Box display='flex' gap={'5px'} alignItems='center'>
                                                    <Box>ABMK LAW CHAMBERS</Box>
                                                    <Box width='16px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/crown.png" alt="" /></Box>
                                                </Box>
                                                <Box display='flex' alignItems='center' gap={1}>
                                                    <Box>Mar 13</Box>
                                                    <Box display='flex' sx={{borderRadius:'50%',height:'2.5px',width:'2.5px',background:'black'}} />
                                                    <Box>2 min</Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box><MoreVertIcon/></Box>
                                        </Box>
                                    </Box>
                                    <Box height={15}/>
                                    <Box>
                                        <Box sx={{fontFamily: "'Raleway', sans-serif"}} fontSize='1.8rem'>S.11: Scope of Judicial Review when maintainability objections are 'plainly arguable'</Box>
                                        <Box height={15}/>
                                        <Box>In a case titled Mohammed Masroor Shaikh Vs. Bharat Bhushan Gupta & Ors. Civil Appeal No. 874 of 2022 where an Appeal was preferred...</Box>
                                        <Box height={35}/>
                                    </Box>
                                    <Box height={15}/>
                                    <Box height={'0.5px'} sx={{background:'black'}}/>
                                    <Box height={15}/>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Box display='flex' fontSize={'0.7rem'} gap={2}>
                                            <Box>28 views</Box>
                                            <Box>0 comments</Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' fontSize={'0.7rem'} gap={2}>
                                            <Box>1</Box>
                                            <Box><FavoriteIcon style={{width:'19px',color:'red'}}/><FavoriteBorderIcon style={{width:'19px',color:'red'}}/></Box>    
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box height={25}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Blogs