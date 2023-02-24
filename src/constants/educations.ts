export type educationsType = {
	studyPlace: string,
	subject: string,
	degree?: string,
	startDate: string,
	endDate: string,
	description: string,
	studies: string[],
};

const educations: educationsType[] = [{
	studyPlace: 'SoloLearn',
	subject: 'Basic Programming',
	startDate: 'February 2017',
	endDate: 'December 2019',
	description: 'I learn programming languages from basic',
	studies: [
		'HTML',
		'CSS',
		'JavaScript',
	],
}, {
	studyPlace: 'STIKOM Tunas Bangsa',
	subject: 'Computer Science',
	degree: 'Bachelor of Informatics',
	startDate: 'September 2018',
	endDate: 'October 2022',
	description: 'In college, I learn many things to get deeper knowledge on computer science',
	studies: [
		'Data Structures',
		'Databases',
		'Web Development',
		'Object-oriented Programming',
		'Artificial Intelligence',
	],
}];

export const latestEducations = educations.reverse();