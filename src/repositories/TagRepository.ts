import { Tag } from '@/types';
import { type Locale, defaultLocale } from '@/config/i18n';
import { PostRepository } from './PostRepository';

export class TagRepository {
  getAllTags(locale: Locale = defaultLocale) {
    const postsRespository = new PostRepository();
    const posts = postsRespository.getAllPosts(locale);
    const groupTags = posts.reduce(
      (acc, post) => {
        // タグごとにカウントを更新する
        for (const tag of post.tags) {
          if (Object.keys(acc).includes(tag)) {
            acc[tag] = {
              name: tag,
              count: acc[tag].count + 1,
            };
          } else {
            acc[tag] = {
              name: tag,
              count: 1,
            };
          }
        }
        return acc;
      },
      {} as { [key: string]: Tag }
    );

    return Object.values(groupTags);
  }
}
