import clsx from 'clsx';
import { ReactNode } from 'react';
import { MdInfo, MdWarning, MdDangerous } from 'react-icons/md';

export interface AlertPropsType {
	type: 'info' | 'warning' | 'danger',
	children: ReactNode,
}

const iconList = {
	info: <MdInfo size='24' />,
	warning: <MdWarning size='24' />,
	danger: <MdDangerous size='24' />,
};

export function Alert({ type, children }: AlertPropsType) {
	const style = clsx([
		'p-4 my-4 flex flex-row gap-4',
		type === 'info' && 'bg-sky-50 text-sky-600',
		type === 'warning' && 'bg-yellow-50 text-yellow-700',
		type === 'danger' && 'bg-red-50 text-red-700',
	]);

	return (
		<section
			className={style}
		>
			<div className='flex-shrink'>{iconList[type]}</div>
			<div className='flex-grow'>
				<span className='font-bold'>
					{type.toUpperCase()}
				</span>
				{children}
			</div>
		</section>
	);
}