import Box from '@mui/material/Box';
import React from 'react';
import '../styles/home.scss';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
	return (
		<Box
			className='app__home__container'
			height={{ md: '95vh', xs: '75vh' }}
			display='flex'
			flexDirection={{ md: 'row', xs: 'column' }}
			id='home'
		>
			<Box
				width={{ md: '50%', xs: '100%' }}
				sx={{
					background:
						'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(237, 146, 36, 0.48)',
				}}
				display='flex'
				height={{ md: '100%', xs: '90%' }}
			>
				<Box
					margin='auto'
					marginLeft={{ md: '20%', xs: '10%' }}
					display='flex'
					flexDirection='column'
					fontFamily="'Open Sans', sans-serif"
				>
					<Box
						fontSize='2.45rem'
						textTransform='uppercase'
						lineHeight='2.8rem'
						letterSpacing='0.08rem'
						fontWeight='700'
						color='#FFFFFF'
					>
						Law chambers of <br />
						Akanksha Choudhary
					</Box>
					<Box height={8} />
					<Box height={'1.6px'} width='100%' sx={{ background: '#FFFFFF' }} />
					<Box display='flex' margin='auto' color='#FFFFFF' fontSize='1.22rem'>
						ADVOCATES & SOLICITORS
					</Box>
				</Box>
			</Box>
			<Box
				sx={{ background: 'transparent' }}
				width={{ md: '56%', xs: '100%' }}
				display='flex'
				height={{ md: '100%', xs: '10%' }}
			>
				<Box
					display='flex'
					justifyContent='center'
					height={{ md: 'fit-content', xs: '100%' }}
					width='100%'
					margin={{ md: 'auto', xs: '0 auto' }}
					sx={{ background: 'transparent' }}
				>
					<Box
						className='app__home__search'
						display='flex'
						gap='8px'
						margin={{ md: 'none', xs: 'auto' }}
						width='63%'
						minWidth={{ md: '190px', xs: '250px' }}
						padding='0 15px'
						height='40px'
						alignItems='center'
						borderRadius='12px'
						sx={{ background: 'transparent' }}
					>
						{/* <Box display='flex'>
							<SearchIcon sx={{ color: 'grey', width: '1.2rem' }} />
						</Box> */}
						{/* <Box display='flex'><input className='app__home__input' type="text" placeholder='Search Site' /></Box> */}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
