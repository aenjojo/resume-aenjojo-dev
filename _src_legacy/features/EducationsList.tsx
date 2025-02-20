import { TimelineItem } from '#components/Timeline';
import { latestEducations } from '#constants/educations';

export function EducationsList() {
	return (
		<>
			{latestEducations.map(({
				studyPlace,
				subject,
				degree,
				description,
				studies,
				startDate,
				endDate,
			}) => (
				<TimelineItem
					key={studyPlace + startDate}
					title={degree || subject}
					subtitle={studyPlace}
					date={`${startDate} - ${endDate}`}
				>
					<div className='main-content'>
						<span>{description}</span>
						<ul>
							{studies.map(study => (
								<li key={study}>{study}</li>
							))}
						</ul>
					</div>
				</TimelineItem>
			))}
		</>
	);
}