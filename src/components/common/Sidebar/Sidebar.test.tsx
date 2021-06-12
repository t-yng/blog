import React from 'react';
import renderer from 'react-test-renderer';
import { profile } from '../../../config/profile';
import { Sidebar } from './Sidebar';
import { SidebarProfile } from './SidebarProfile';
import { SidebarTags } from './SidebarTags';

describe('Sidebar', () => {
    it('render some components', () => {
        const tags = [
            {
                name: 'TypeScript',
                count: 2,
            },
        ];
        const root = renderer.create(
            <Sidebar tags={tags} profile={profile} />
        ).root;

        expect(root.findByType(SidebarTags).props.tags).toEqual(tags);
        expect(root.findByType(SidebarProfile).props.profile).toEqual(profile);
    });
});
