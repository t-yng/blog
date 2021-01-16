import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SidebarSection } from './SidebarSection';

describe('SidebarSection', () => {
    it('render title', () => {
        const title = 'This is section title';
        render(<SidebarSection title={title} />);
        expect(screen.queryByText(title)).toBeInTheDocument();
    });

    it('render children', () => {
        const Chilren = () => <div>chilren</div>;

        const root = renderer.create(
            <SidebarSection title="title">
                <Chilren />
            </SidebarSection>
        ).root;

        expect(root.findByType(Chilren)).not.toBeNull();
    });
});
