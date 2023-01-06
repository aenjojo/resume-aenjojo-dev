import { TechIcon, type TechIconType } from '#constants/TechIcon';

export function getTechIcon(iconNames: string[]) {
	const iconFound: TechIconType = [];

	for (const iconName of iconNames) {
		const result = TechIcon.find(tech => tech.name.toLowerCase() === iconName.toLowerCase());

		if (!result) continue;

		iconFound.push(result);
	}

	return iconFound;
}