import { css } from '@/styled-system/css';
import { Profile } from '@/config/profile';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { SidebarSection } from './SidebarSection';

export interface SidebarProfileProps {
  profile: Profile;
  className?: string;
}

export const SidebarProfile = ({ profile, className }: SidebarProfileProps) => (
  <SidebarSection title="プロフィール" className={className}>
    <Flex>
      <img
        className={avatar}
        src={profile.avatar}
        alt="筆者のアバター画像"
        width={64}
        height={64}
        decoding="async"
      />
      <Flex direction="column" gap="4px">
        <Text fontWeight="bold">{profile.name}</Text>
        <Text color="black2" fontSize="xs">
          {profile.speciality}
        </Text>
        <div>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}のGitHubプロフィールページ`}
          >
            <img
              src={profile.github.icon}
              aria-hidden="true"
              alt="GitHubのロゴ"
              width={24}
              height={24}
              decoding="async"
            />
          </a>
        </div>
      </Flex>
    </Flex>
  </SidebarSection>
);

const avatar = css({
  borderRadius: '50%',
  marginRight: '0.5rem',
  objectFit: 'cover',
});
