import { ButtonLink } from '#components/Link';
import { socialMedia } from '#constants/socialMedia';

export function SocialMediaList() {
	return (
		<>
			{socialMedia.map(({ name, link, icon }) => (
				<ButtonLink
					key={`${name}@${link}`}
					value={`AenJojo's ${name}`}
					href={link}
					variant='empty'
					icon={icon}
					iconOnly
					openInNewTab
				/>
			))}
		</>
	);
}