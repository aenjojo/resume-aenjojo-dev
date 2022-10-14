import type { ReactElement } from 'react';
import clsx from 'clsx';

interface SubSectionHeadingType {
    children: string | ReactElement | ReactElement[],
};

export default function SubSectionHeading({ children }: SubSectionHeadingType) {
    const SubSectionHeadingStyle = clsx([
        'text-xl font-semibold',
        'mx-2 my-1 p-1',
        'text-blue-700',
        'border-b-2 border-blue-200',
    ]);

    return (
        <h3
            className={SubSectionHeadingStyle}
        >
            {children}
        </h3>
    );
};