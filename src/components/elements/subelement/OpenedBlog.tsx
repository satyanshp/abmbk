import Box from '@mui/material/Box';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { FaFacebookF,FaTwitter,FaLinkedinIn,FaLink } from 'react-icons/fa';

import '../../styles/blog.scss'

interface OpenedBlogProps{
    liked:boolean;
    searchOpen:boolean;
    verMenu:boolean;
    onClickSearch:()=>void;
    onClickClose:()=>void;
    onClickVerMenu:()=>void;
    onClickLike:()=>void;
    onClick5:()=>void;
    onClickBlogNavLinks:()=>void;
    blogData:{
                title:string,
                author:string,
                time:string,
                date:string,
                img:string,
                overview:string,
                views:string,
                comments:string,
                likes:string,
                liked:boolean,
            };
}
const OpenedBlog = ({searchOpen,onClickSearch,onClickClose,liked,onClickLike,onClickVerMenu,verMenu,onClick5,blogData,onClickBlogNavLinks}:OpenedBlogProps) => {
    React.useEffect(() => {
      onClick5();
    }, [])

    const Tag = styled(Paper)(({ theme }) => ({
        fontSize:'0.85rem',
         minHeight:'31.8px',
         border:'1px solid rgb(221, 221, 221)',
         borderRadius:'0px',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         flexWrap:'wrap',
        boxShadow:"none",
        color: '#000000',
        fontFamily: "Open Sans",
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign:'center',
        lineHeight: '16px',
        cursor:'pointer',
        padding:'0 15px',
        '&:hover':{border:'1px solid #000000'}
      }));
    
  return (
    <Box>
        <Box display='flex' flexDirection='column' position='relative' fontFamily= "'Open Sans', sans-serif" textAlign='left'>
            <Box className='app__blog__background' width='100%'/>
            <Box sx={{background:'#FFFFFF'}} width={{xl:'65%',md:'80%',xs:'100%'}} margin='0 auto' position='relative' zIndex='5'>
                <Box>
                    <Box display='flex' flexDirection={{xs:'column',md:'row'}} justifyContent='space-between' height='12vh' alignItems='center' padding='0px 25px'>
                        <Box display='flex' gap={4} sx={{'>div':{cursor:'pointer','&:hover':{color:'#377DBD','>div':{color:'#000000'}}}}}>
                            <Box onClick={()=>onClickBlogNavLinks()}>All Posts</Box>
                            <Box onClick={()=>onClickBlogNavLinks()}>Arbitration</Box>
                            <Box onClick={()=>onClickBlogNavLinks()}>Labour Law</Box>
                            {!searchOpen && <Box>Property Law</Box>}
                            <Box position='relative' display='flex' sx={{'&:hover > div':{display:'block'}}}>
                                More <KeyboardArrowDownIcon/>
                                <Box display='none' position='absolute' top='100%' width='200px' boxShadow='0px 10px 11px 0 rgb(0 0 0 / 5%)'>
                                    <Box display='flex' flexDirection='column' sx={{'>div':{display:'flex',height:'54px',background:'#FFFFFF',alignItems:'center',opacity:'0.9',paddingLeft:'10%',cursor:'pointer','&:hover':{color:'#377DBD'}}}}>
                                        {searchOpen && <Box borderBottom='1px solid rgb(221, 221, 221)' onClick={()=>onClickBlogNavLinks()}>Property Law</Box>}
                                        <Box borderBottom='1px solid rgb(221, 221, 221)' onClick={()=>onClickBlogNavLinks()}>Consumer Protection</Box>
                                        <Box borderBottom='1px solid rgb(221, 221, 221)' onClick={()=>onClickBlogNavLinks()}>Insolvency Law</Box>
                                        <Box borderBottom='1px solid rgb(221, 221, 221)' onClick={()=>onClickBlogNavLinks()}>RERA</Box>
                                        <Box >Service Law</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' width={{xs:'100%',md:'fit-content'}} alignItems='center' justifyContent={{xs:'flex-end'}} gap={5}>
                            <Box display='flex' alignItems='center'>
                                {!searchOpen && <SearchIcon sx={{cursor:'pointer'}} onClick={()=>onClickSearch()}/>}
                                {searchOpen && 
                                    <Box className='app__blog__search' display='flex' minWidth='150px' padding='0 5px' height='30px' alignItems='center' borderRadius='2.5px' sx={{background:'#FFFFFF'}}>
                                        <Box display='flex' marginRight='3px'><SearchIcon sx={{color:'black',width:'19px'}}/></Box>
                                        <Box display='flex'><input className='app__blog__input' type="text" placeholder='Search' /></Box>
                                        <Box display='flex'><CloseIcon onClick={()=>onClickClose()} sx={{cursor:'pointer',color:'black',width:'17px'}}/></Box>
                                    </Box>
                                }
                            </Box>
                            <Box>
                                <Button
                                    variant='contained'
                                    style={{
                                        background:'transparent',
                                        border:'1px solid #377DBD',
                                        borderRadius:'0',
                                        color:'#377DBD',
                                        fontWeight:'400',
                                        textTransform:'capitalize',
                                        boxShadow:'none',
                                        width:'155px'
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
                        {/* {blogData.map((item,index)=>(<> */}
                            <Box margin='0 auto' width='95%' border='1px solid rgb(221, 221, 221)'>
                                <Box display='flex'>
                                    <Box padding='24px 36px' flexGrow='1'>
                                        <Box display='flex' justifyContent='space-between' sx={{cursor:'pointer'}}>
                                            <Box display='flex' gap={1}>
                                                <Avatar sx={{ bgcolor: 'red',width:'32px',height:'32px',fontSize:'1.1rem' }}>A</Avatar>
                                                <Box display='flex' flexDirection='column' fontSize={'0.7rem'}>
                                                    <Box display='flex' gap={'5px'} alignItems='center'>
                                                        <Box>{blogData.author}</Box>
                                                        <Box width='16px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/crown.png" alt="" /></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap={1}>
                                                        <Box>{blogData.date}</Box>
                                                        <Box display='flex' sx={{borderRadius:'50%',height:'2.5px',width:'2.5px',background:'black'}} />
                                                        <Box>{blogData.time}</Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box position='relative'>
                                                    <MoreVertIcon onClick={onClickVerMenu}/>
                                                    {verMenu && <Box display='block' position='absolute' top='100%' right='18px' width='200px' boxShadow='0px 3px 8px 0 rgb(0 0 0 / 20%)'>
                                                        <Box display='flex' flexDirection='column' sx={{'>div':{display:'flex',height:'54px',background:'#FFFFFF',alignItems:'center',paddingLeft:'15%',cursor:'pointer'}}}>
                                                            <Box display='flex' gap='8px' fontSize='14px'><ReplyOutlinedIcon sx={{transform:'scaleX(-1)',width:'21px'}}/>Share Post</Box>
                                                        </Box>
                                                    </Box>}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box height={15}/>
                                        <Box>
                                            <Box sx={{fontFamily: "'Raleway', sans-serif"}} className='app__blog__des__title' fontSize='1.8rem'>{blogData.title}</Box>
                                            <Box height={15}/>
                                            <Box>{blogData.overview}</Box>
                                            <Box height={10}/>
                                            <Box width='100%'><img style={{width:'100%',height:'100%',objectFit:'cover'}} src={blogData.img} alt="" /></Box>
                                            <Box height={10}/>
                                            <Box display='flex' flexWrap='wrap' gap={1}>
                                                <Tag>cjhdsh</Tag>
                                                <Tag>skahbclhsdachsd</Tag>
                                                <Tag>jhcvas</Tag>
                                            </Box>
                                            <Box height={35}/>
                                        </Box>
                                        <Box height={'0.5px'} sx={{background:'rgb(221, 221, 221)'}}/>
                                        <Box height={20}/>
                                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                                            <Box display='flex' alignItems='center' gap={3}>
                                                <FaFacebookF/>
                                                <FaTwitter/>
                                                <FaLinkedinIn/>
                                                <FaLink/>
                                            </Box>
                                            <Box fontSize='0.85rem' sx={{cursor:'pointer','&:hover':{color:'#377DBD'}}}>arbitation</Box>
                                        </Box>
                                        <Box height={20}/>
                                        <Box height={'0.5px'} sx={{background:'rgb(221, 221, 221)'}}/>
                                        <Box height={15}/>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Box display='flex' fontSize={'0.7rem'} gap={2}>
                                                <Box>28 views</Box>
                                                <Box className='app__blog__comments'>0 comments</Box>
                                            </Box>
                                            <Box display='flex' alignItems='center' fontSize={'0.7rem'} gap={2}>
                                                <Box sx={{cursor:'pointer','&:hover':{textDecoration:'underline'}}}>1</Box>
                                                <Box sx={{cursor:'pointer'}} onClick={()=>onClickLike()}>
                                                    {liked && <FavoriteIcon style={{width:'19px',color:'red'}}/>}
                                                    {!liked && <FavoriteBorderIcon style={{width:'19px',color:'red'}}/>}
                                                </Box>    
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box height={25}/>
                        {/* </>))} */}
                    </Box>
                </Box>
            </Box>
            <Box height={10}/>
            <Box display='flex' flexDirection='column' position='relative' zIndex='2' width='65%' margin='0 auto'>
                <Box fontFamily= "'Open Sans', sans-serif" color='#0F4C85' fontSize='0.85rem' textAlign='left' width='90%' margin='auto'>© ABMK LAW CHAMBERS</Box>
                <Box marginBottom={5} display='flex' justifyContent='center' gap={1}>
                    <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/linkedin.webp" alt="linkedin" /></Box>
                    <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/twitter.webp" alt="twitter" /></Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default OpenedBlog