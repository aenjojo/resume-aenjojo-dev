import { TimelineItem } from '#components/Timeline';
import { latestExperiences } from '#constants/experiences';

export function ExperiencesList() {
	return (
		<>
			{latestExperiences.map(({
				position,
				companyName,
				startDate,
				endDate,
				responsibilities,
			}) => (
				<TimelineItem
					key={companyName + startDate}
					title={position}
					subtitle={companyName}
					date={`${startDate} - ${endDate}`}
				>
					<div className='main-content'>
						<span>My responsibilities here are:</span>
						<ul>
							{responsibilities.map(responsibility => (
								<li key={responsibility}>{responsibility}</li>
							))}
						</ul>
					</div>
				</TimelineItem>
			))}
		</>
	);
}