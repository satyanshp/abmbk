import React from 'react';
import Box from '@mui/material/Box';

interface PracticeTagProp {
	img: string;
	name: string;
	width: string;
	contWidth: string;
}
const PracticeTag = ({ img, name, width, contWidth }: PracticeTagProp) => {
	return (
		<Box
			sx={{
				border: '1px solid #E0A965',
				filter: 'drop-shadow(2px 0px 66px rgba(0, 0, 0, 0.05))',
				borderRadius: '10px',
				width: '100%',
			}}
		>
			<Box display='flex' height='100%'>
				<Box width='50%' margin='auto 0' height='100%'>
					<Box
						width='100%'
						display='flex'
						height='100%'
						margin='auto'
						justifyContent='center'
						alignItems='center'
					>
						<img width={width} src={img} alt='' />
					</Box>
				</Box>
				<Box display='flex' width='50%'>
					<Box
						display='flex'
						width={contWidth}
						flexDirection='column'
						justifyContent='flex-end'
						alignItems='flex-end'
						marginRight='1.1vw'
						textAlign='right'
						marginBottom='1.1vh'
					>
						<Box
							width={'100%'}
							sx={{
								fontFamily: 'Open Sans',
								fontStyle: 'normal',
								fontWeight: '700',
								fontSize: '13px',
								lineHeight: '22px',
								color: '#48504B',
								textTransform: 'uppercase',
							}}
						>
							{name}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PracticeTag;
