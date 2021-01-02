import React from 'react';
import { render, screen } from '@testing-library/react';
import { mock, when } from 'ts-mockito';
import { profile, Profile } from '../../../constants/profile';
import { SidebarProfile } from './SidebarProfile';

describe('SidebarProfile', () => {
    it('render author avatar image', () => {
        render(<SidebarProfile profile={profile} />);

        const img = screen.queryByTestId('avatar-image');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', profile.avatar);
        expect(img).toHaveAttribute('alt');
        expect(img?.getAttribute('alt')).not.toBe('');
    });

    it('render author name', () => {
        render(<SidebarProfile profile={profile} />);
        expect(screen.queryByText(profile.name)).toBeInTheDocument();
    });

    it('render author speciality', () => {
        render(<SidebarProfile profile={profile} />);
        expect(screen.queryByText(profile.speciality)).toBeInTheDocument();
    });

    it('render github link', () => {
        render(<SidebarProfile profile={profile} />);

        const link = screen.queryByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', profile.github.url);

        const image = screen.queryByTestId('github-image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', profile.github.icon);
        expect(image).toHaveAttribute('alt');
        expect(image?.getAttribute('alt')).not.toBe('');
    });
});
