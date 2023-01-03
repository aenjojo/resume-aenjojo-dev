import Link from 'next/link';
import { CardContainer } from './CardContainer';
import { GenericTitle } from '#components/Heading';
import { Chip } from '#components/Chip';
import { DisplayText } from '#components/Text';
import styles from '#styles/Link.module.css';

export interface PostCardPropsType {
	id: string,
	title: string,
	date: string,
	description: string,
	tags?: string[],
}

export function PostCard({ id, title, date, description, tags }: PostCardPropsType) {
	const postPageUrl = `/blog/posts/${id}`;

	return (
		<CardContainer>
			<section className='flex flex-col gap-4 p-4 h-56'>
				<div className='flex-grow'>
					<Link
						href={postPageUrl}
						className={styles.base}
					>
						<GenericTitle>{title}</GenericTitle>
					</Link>
					<p>{description}</p>
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