import NextImage from 'next/image';

export interface ImagePropsType {
	src: string,
	alt: string,
	decorationOnly?: string,
}

export function Image({ src, alt, decorationOnly }: ImagePropsType) {
	return (
		<span className='block relative overflow-hidden h-72 lg:h-96'>
			<NextImage
				src={src}
				alt={decorationOnly ? '' : alt}
				fill={true}
				className='object-contain'
				sizes='(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
			/>
		</span>
	);
}