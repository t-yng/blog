export type Profile = {
  name: string;
  speciality: string;
  avatar: string;
  github: {
    icon: string;
    url: string;
  };
};

export const profile: Profile = {
  name: 't-yng',
  speciality: 'フロントエンドエンジニア',
  avatar: '/avatar.jpg',
  github: {
    icon: '/icons/github-32px.png',
    url: 'https://github.com/t-yng',
  },
};
