import type { ReactElement } from 'react';
import clsx from 'clsx';

interface SectionHeadingType {
    children: string | ReactElement | ReactElement[],
};

export default function SectionHeading({ children }: SectionHeadingType) {
    const SectionHeadingStyle = clsx([
        'text-2xl font-bold',
        'mx-2 my-1 p-1',
        'text-blue-700',
        'border-b-2 border-blue-200',
    ]);

    return (
        <h2
            className={SectionHeadingStyle}
        >
            {children}
        </h2>
    );
};