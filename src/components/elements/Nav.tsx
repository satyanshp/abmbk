import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

interface NavProps {
	sectionActive: number;
	isOpen: boolean;
	onClick1: () => void;
	onClick2: () => void;
	onClick3: () => void;
	onClick4: () => void;
	onClick5: () => void;
	onClick6: () => void;
}
const Nav = ({
	sectionActive,
	onClick5,
	onClick1,
	onClick2,
	onClick3,
	onClick4,
	onClick6,
	isOpen,
}: NavProps) => {
	return (
		<>
			<Box className='app__navbar' justifyContent={{ md: 'center', xs: 'flex-start' }}>
				<Box className='app__navbar__header' width={{ md: 'fit-content', xs: '50%' }}>
					<Link
						to='*'
						style={{
							textDecoration: 'none',
							color: 'rgba(224, 169, 101, 1) !important',
							textTransform: 'uppercase',
							fontSize: '1.27rem',
						}}
					>
						Law chambers of Akanksha Choudhary
					</Link>
				</Box>
				<Box className='app__navbar__sub' marginTop='1vh' display={{ xs: 'none', md: 'flex' }}>
					<div className='app__navbar__links' onClick={() => onClick1()}>
						<Link
							to='*'
							style={{
								textDecoration: 'none',
								color: sectionActive === 0 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
							}}
						>
							HOME
						</Link>
					</div>
					<div className='app__navbar__links' onClick={() => onClick2()}>
						<Link
							to='*'
							style={{
								textDecoration: 'none',
								color: sectionActive === 2 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
							}}
						>
							ABOUT US
						</Link>
					</div>
					<div className='app__navbar__links' onClick={() => onClick3()}>
						<Link
							to='*'
							style={{
								textDecoration: 'none',
								color: sectionActive === 3 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
							}}
						>
							PRACTICE AREAS
						</Link>
					</div>

					{/* <div className='app__navbar__links' onClick={() => onClick5()}>
						<Link
							to='/blog'
							style={{
								textDecoration: 'none',
								color: sectionActive === 5 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
							}}
						>
							{' '}
							BLOG
						</Link>
					</div> */}
					<div className='app__navbar__links' onClick={() => onClick6()}>
						<Link
							to='*'
							style={{
								cursor: 'pointer',
								textDecoration: 'none',
								color: sectionActive === 6 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
							}}
						>
							CONTACT
						</Link>
					</div>
				</Box>
			</Box>
			<Box
				className={isOpen ? 'app__navbar__sub active' : 'app__navbar__sub'}
				zIndex='30'
				display={{ md: 'none', xs: 'flex' }}
			>
				<div className='app__navbar__links' onClick={() => onClick1()}>
					<Link
						to='*'
						style={{
							textDecoration: 'none',
							color: sectionActive === 0 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						HOME
					</Link>
				</div>
				<div className='app__navbar__links' onClick={() => onClick2()}>
					<Link
						to='*'
						style={{
							textDecoration: 'none',
							color: sectionActive === 2 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						ABOUT US
					</Link>
				</div>
				<div className='app__navbar__links' onClick={() => onClick3()}>
					<Link
						to='*'
						style={{
							textDecoration: 'none',
							color: sectionActive === 3 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						PRACTICE AREAS
					</Link>
				</div>
				{/* <div className='app__navbar__links' onClick={() => onClick4()}>
					<Link
						to='*'
						style={{
							textDecoration: 'none',
							color: sectionActive === 4 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						COUNSELS
					</Link>
				</div> */}
				{/* <div className='app__navbar__links' onClick={() => onClick5()}>
					<Link
						to='/blog'
						style={{
							textDecoration: 'none',
							color: sectionActive === 5 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						LAW BLOG
					</Link>
				</div> */}
				<div className='app__navbar__links' onClick={() => onClick6()}>
					<Link
						to='*'
						style={{
							cursor: 'pointer',
							textDecoration: 'none',
							color: sectionActive === 6 ? 'rgba(224, 169, 101, 1)' : 'rgba(72, 80, 75, 1)',
						}}
					>
						CONTACT
					</Link>
				</div>
			</Box>
		</>
	);
};

export default Nav;
