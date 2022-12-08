import Link from 'next/link';
import { CardContainer } from './CardContainer';
import { GenericTitle } from '#components/Heading';
import { Chip } from '#components/Chip';
import { DisplayText } from '#components/Text';
import styles from '#styles/Link.module.css';

export interface PostCardPropsType {
	title: string,
	date: string,
	description: string,
	tags?: string[],
}

export function PostCard({ title, date, description, tags }: PostCardPropsType) {
	const postPageUrl = `/blog/posts/${title.toLowerCase().replaceAll(' ', '-')}`;

	return (
		<CardContainer>
			<section className='flex flex-col gap-4 p-4 h-48'>
				<div className='flex-grow'>
					<Link
						href={postPageUrl}
						className={styles.base}
					>
						<GenericTitle>{title}</GenericTitle>
					</Link>
					<article>{description}</article>
				</div>
				<div className='flex flex-col gap-2'>
					{tags && <div className='flex flex-row gap-2'>
						{tags.map(tag => (
							<Chip key={tag} value={`#${tag}`} />
						))}
					</div>}
					<DisplayText value={`Posted on ${date}`} size='S' />
				</div>
			</section>
		</CardContainer>
	);
}