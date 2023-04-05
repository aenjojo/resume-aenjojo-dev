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
	endDate: 'Present',
	description: 'I learned some programming, markup, and query languages from basic and programming concepts, especially in web development',
	studies: [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'SQL',
		'Responsive Web Design',
		'Coding for Marketer',
	],
}, {
	studyPlace: 'STIKOM Tunas Bangsa',
	subject: 'Computer Science',
	degree: 'Bachelor of Computer Science',
	startDate: 'September 2018',
	endDate: 'October 2022',
	description: 'In college, I learned many things to get deeper knowledge on computer science',
	studies: [
		'Algorithm & Programming',
		'Data Structures',
		'Databases',
		'Web Development',
		'Object-oriented Programming',
		'Software Engineering',
		'Artificial Intelligence',
	],
}, {
	studyPlace: 'RevoU',
	subject: 'Intro to Software Engineering',
	startDate: 'February 2023',
	endDate: 'March 2023',
	description: 'In this mini course, I enrolled just to refresh my knowledge in basic web development',
	studies: [
		'HTML',
		'CSS',
		'JavaScript'
	],
}];

export const latestEducations = educations.reverse();