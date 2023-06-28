import { render, screen } from '@testing-library/react';
import { profile } from '../../../config/profile';
import { SidebarProfile } from './SidebarProfile';

describe('SidebarProfile', () => {
  it('render author avatar image', () => {
    render(<SidebarProfile profile={profile} />);

    const img = screen.getByRole('img', { name: '筆者のアバター画像' });
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

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', profile.github.url);

    const image = link?.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', profile.github.icon);
    expect(image?.getAttribute('alt')).not.toBe('');
  });
});
