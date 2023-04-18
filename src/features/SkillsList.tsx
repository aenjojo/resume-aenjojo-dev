import { GenericCard } from '#components/Card';
import { skills } from '#constants/skills';

export function SkillsList() {
	return (
		<>
			{skills.map(({ name, data }) => (
				<GenericCard
					key={name}
					title={name}
					description={data.join(', ')}
				/>
			))}
		</>
	)
}