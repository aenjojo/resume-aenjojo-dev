export type experiencesType = {
	companyName: string,
	position: string,
	startDate: string,
	endDate: string,
	responsibilities: string[],
};

const experiences: experiencesType[] = [{
	companyName: 'NexBot Development',
	position: 'Core Bot Developer',
	startDate: '30 June 2018',
	endDate: 'Present',
	responsibilities: ['Create dummy code and test', 'Momo'],
}];

export const latestExperiences = experiences.reverse();