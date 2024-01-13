import { css } from '@linaria/core';
import { Profile } from '@/config/profile';
import { colors } from '@/styles/color';
import { Flex } from '../Flex';
import { Text } from '../Text/Text';
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
        <Text color={colors.black2} fontSize="0.75rem">
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
              className={icon}
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

const avatar = css`
  border-radius: 50%;
  margin-right: 0.5rem;
  object-fit: cover;
  height: 4rem;
  width: 4rem;
`;

const icon = css`
  height: 24px;
  width: 24px;
`;
