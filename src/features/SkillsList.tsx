import { GenericCard } from '#components/Card';
import { skills } from '#constants/skills';

export function SkillsList() {
	return (
		<>
			{skills.map(skill => (
				<GenericCard
					key={skill.name}
					title={skill.name}
					description={skill.description}
				/>
			))}
		</>
	)
}