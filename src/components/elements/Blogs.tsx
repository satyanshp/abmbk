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

import '../styles/blog.scss'

interface BlogProps{
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
            }[];
    onClickBlog:(value:number)=>void;
}
const Blogs = ({searchOpen,onClickSearch,onClickClose,liked,onClickLike,onClickVerMenu,verMenu,onClick5,blogData,onClickBlog,onClickBlogNavLinks}:BlogProps) => {
    React.useEffect(() => {
      onClick5();
    }, [])

    const [blogMenuOpen, setBlogMenuOpen] = React.useState(false);
    const blogOnClickMenu = () =>{
        setBlogMenuOpen(!blogMenuOpen);
        onClickBlogNavLinks();
    }
    
  return (
    <Box>
        <Box display='flex' flexDirection='column' position='relative' fontFamily= "'Open Sans', sans-serif" textAlign='left'>
            <Box className='app__blog__background' width='100%'/>
            <Box sx={{background:'#FFFFFF'}} width={{md:'65%',xs:'100%'}} margin='0 auto' position='relative' zIndex='5'>
                <Box>
                    <Box display='flex' flexDirection={{md:'row',xs:'column-reverse'}} justifyContent='space-between' height={{md:'12vh',xs:'fit-content'}} alignItems='center' padding={{md:'0px 25px',xs:'0px'}}>
                        <Box width='100%' display={{md:'none',xs:'flex'}} flexDirection='column'>
                            <Box onClick={()=>blogOnClickMenu()} margin='auto' display={{md:'none',xs:'flex'}} alignItems='center' width='90%' justifyContent='space-between' sx={{'@media (max-width:800px)':{height:'6vh'}}}>
                                <Box>All Posts</Box>
                                <KeyboardArrowDownIcon sx={{display:'flex'}}/>
                            </Box>
                            <Box position='relative' className={blogMenuOpen?'app__blog__res__menu active':'app__blog__res__menu'} sx={{background:'#FFFFFF','>div':{height:'6vh',paddingLeft:'5vw',display:blogMenuOpen?'flex':'none',alignItems:'center'}}} >
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)' borderTop='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Arbitration</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Labour Law</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Property Law</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Consumer Protection</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Insolvency Law</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>RERA</Box>
                                <Box className={blogMenuOpen?'app__blog__res__menu__links active':'app__blog__res__menu__links'} borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Service Law</Box>
                            </Box>
                        </Box>
                        <Box display={{md:'flex',xs:'none'}} gap={4} sx={{'>div':{cursor:'pointer','&:hover':{color:'#377DBD','>div':{color:'#000000'}}}}}>
                            <Box onClick={()=>onClickBlogNavLinks()}>All Posts</Box>
                            <Box  onClick={()=>onClickBlogNavLinks()}>Arbitration</Box>
                            <Box  onClick={()=>onClickBlogNavLinks()}>Labour Law</Box>
                            {!searchOpen && <Box onClick={()=>onClickBlogNavLinks()}>Property Law</Box>}
                            <Box position='relative' display='flex' sx={{'&:hover > div':{display:'block'}}}>
                                More <KeyboardArrowDownIcon/>
                                <Box display='none' position='absolute' top='100%' width='200px' boxShadow='0px 10px 11px 0 rgb(0 0 0 / 5%)'>
                                    <Box display='flex' flexDirection='column' sx={{'>div':{display:'flex',height:'54px',background:'#FFFFFF',alignItems:'center',opacity:'0.9',paddingLeft:'10%',cursor:'pointer','&:hover':{color:'#377DBD'}}}}>
                                        {searchOpen && <Box borderBottom='1px solid rgb(221, 221, 221)'>Property Law</Box>}
                                        <Box borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Consumer Protection</Box>
                                        <Box borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>Insolvency Law</Box>
                                        <Box borderBottom='1px solid rgb(221, 221, 221)'  onClick={()=>onClickBlogNavLinks()}>RERA</Box>
                                        <Box onClick={()=>onClickBlogNavLinks()}>Service Law</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent={'space-between'} sx={{'@media (max-width:800px)':{background:'#377DBD',height:'6vh'}}} width={{xs:'100%',md:'fit-content'}}>
                            {!searchOpen && <Box display={{xs:'flex',md:'none'}} marginLeft='5vw' color='#FFFFFF'>ABMK LAW BLOG</Box>}
                            <Box display='flex' alignItems='center' gap={{md:5,xs:2}}>
                            <Box display='flex' alignItems='center'>
                                {!searchOpen && <SearchIcon sx={{cursor:'pointer','@media (max-width:800px)':{color:'#FFFFFF'}}} onClick={()=>onClickSearch()}/>}
                                {searchOpen && 
                                    <Box className='app__blog__search' display='flex' minWidth='150px' padding='0 5px' height='30px' alignItems='center' borderRadius='2.5px' sx={{background:'#FFFFFF'}}>
                                        <Box display='flex' marginRight='3px'><SearchIcon sx={{color:'black',width:'19px'}}/></Box>
                                        <Box display='flex'><input className='app__blog__input' type="text" placeholder='Search' /></Box>
                                        <Box display='flex'><CloseIcon onClick={()=>onClickClose()} sx={{cursor:'pointer',color:'black',width:'17px'}}/></Box>
                                    </Box>
                                }
                            </Box>
                            <Box display={{xs:'block',md:'none'}}>
                                <Button
                                    // variant='contained'
                                    sx={{
                                        background:'transparent',
                                        // border:'1px solid #377DBD',
                                        borderRadius:'0',
                                        color:'#FFFFFF',
                                        fontWeight:'400',
                                        textTransform:'capitalize',
                                        boxShadow:'none',
                                        width:'155px',
                                        '@media (max-width:800px)':{
                                            width:'100px !important',
                                        }
                                    }}
                                >
                                    <Box display={{xs:'none',md:'block'}}>Log in /</Box> Sign up
                                </Button>
                            </Box>
                            <Box display={{xs:'none',md:'block'}}>
                                <Button
                                    variant='contained'
                                    sx={{
                                        background:'transparent',
                                        border:'1px solid #377DBD',
                                        borderRadius:'0',
                                        color:'#377DBD',
                                        fontWeight:'400',
                                        textTransform:'capitalize',
                                        boxShadow:'none',
                                        width:'155px',
                                        '@media (max-width:800px)':{
                                            width:'100px !important',
                                        }
                                    }}
                                >
                                    <Box display={{xs:'none',md:'block'}}>Log in /</Box> Sign up
                                </Button>
                            </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box height={20}/>
                <Box>
                    <Box display='flex' flexDirection='column'>
                        {blogData.map((item,index)=>(<>
                            <Box key={index} margin='0 auto' width='95%' border='1px solid rgb(221, 221, 221)'>
                                <Box display='flex' flexDirection={{xs:'column',md:'row'}}>
                                    {item.img && <Box width={{md:'110%',xs:'100%'}}><img style={{width:'100%',height:'100%',objectFit:'cover'}} src={item.img} alt="" /></Box>}
                                    <Box padding='24px 36px' flexGrow='1'>
                                        <Box onClick={()=>onClickBlog(index)} display='flex' justifyContent='space-between' className='app__blog__title'>
                                            <Box display='flex' gap={1}>
                                                <Avatar sx={{ bgcolor: 'red',width:'32px',height:'32px',fontSize:'1.1rem' }}>A</Avatar>
                                                <Box display='flex' flexDirection='column' fontSize={'0.7rem'}>
                                                    <Box display='flex' gap={'5px'} alignItems='center'>
                                                        <Box>{item.author}</Box>
                                                        <Box width='16px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/crown.png" alt="" /></Box>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap={1}>
                                                        <Box>{item.date}</Box>
                                                        <Box display='flex' sx={{borderRadius:'50%',height:'2.5px',width:'2.5px',background:'black'}} />
                                                        <Box>{item.time}</Box>
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
                                        <Box className='app__blog__des' onClick={()=>onClickBlog(index)}>
                                            <Box sx={{fontFamily: "'Raleway', sans-serif"}} className='app__blog__des__title' fontSize='1.8rem'>{item.title}</Box>
                                            <Box height={15}/>
                                            <Box>{item.overview.slice(0,180)}...</Box>
                                            <Box height={45}/>
                                        </Box>
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
                        </>))}
                    </Box>
                </Box>
            </Box>
            <Box height={10}/>
            <Box display='flex' flexDirection='column' position='relative' zIndex='2' width='65%' margin='0 auto'>
                <Box fontFamily= "'Open Sans', sans-serif" color='#0F4C85' fontSize='0.85rem' textAlign={{md:'left',xs:'center'}} width='90%' margin='auto'>© ABMK LAW CHAMBERS</Box>
                <Box display={{md:'none',xs:'block'}} height={10}/>
                <Box marginBottom={5} display='flex' justifyContent='center' gap={1}>
                    <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/linkedin.webp" alt="linkedin" /></Box>
                    <Box display='flex' width='23px' height='23px'><img style={{width:'100%',objectFit:'contain'}} src="/assets/images/twitter.webp" alt="twitter" /></Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Blogs