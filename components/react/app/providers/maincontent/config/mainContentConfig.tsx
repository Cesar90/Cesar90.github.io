import { ReactNode } from 'react';
import { ComponentRoot } from '../ui/maincontent';
import { HomePage } from '@/pages/HomePage';

export const RootComponents: Record<string, ReactNode> = {
    [ComponentRoot.HOME]: <HomePage />,
};
