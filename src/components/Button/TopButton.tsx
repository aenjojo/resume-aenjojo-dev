import { Button } from './Button';
import { MdChevronLeft } from 'react-icons/md';

const handleToTop = () => {
	if (window) {
		window.scrollTo({ top: 0 });
	}
}

export function TopButton() {
	return (
		<Button
			value='scroll to top'
			variant='fill'
			onClick={handleToTop}
			icon={<MdChevronLeft size='24' className='rotate-90' />}
			className='fixed bottom-4 right-4'
			iconOnly
		/>
	);
}