import type { ReactElement } from 'react';
import clsx from 'clsx';

interface TitleHeadingType {
    children: string | ReactElement | ReactElement[],
};

export default function TitleHeading({ children }: TitleHeadingType) {
    const TitleHeadingStyle = clsx([
        'text-4xl font-extrabold',
        'mx-2 my-1 p-1',
    ]);

    return (
        <h1
            className={TitleHeadingStyle}
        >
            {children}
        </h1>
    );
};