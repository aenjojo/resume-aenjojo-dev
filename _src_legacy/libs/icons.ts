import { techIcons, type techIconsType } from '#constants/techIcons';

export function getTechIcon(iconNames: string[]) {
	const iconFound: techIconsType[] = [];

	for (const iconName of iconNames) {
		const result = techIcons.find(tech => tech.id === iconName.toLowerCase());

		if (!result) continue;

		iconFound.push(result);
	}

	return iconFound;
}