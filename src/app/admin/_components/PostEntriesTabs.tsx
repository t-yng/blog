'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC } from 'react';
import { Post } from '@/app/admin/_components/Post';
import { Post as PostModel } from '@/entities';

type PostEntriesTabsProps = {
  posts: PostModel[];
  className?: string;
};

export const PostEntriesTabs: FC<PostEntriesTabsProps> = ({
  posts,
  className,
}) => {
  return (
    <Tabs className={className}>
      <TabList>
        <Tab>公開</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
