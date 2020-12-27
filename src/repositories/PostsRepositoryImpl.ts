import fs from 'fs';
import crypto from 'crypto';
import { join } from 'path';
import { format } from 'date-fns';
import matter from 'gray-matter';
import { Post } from '../entities/Post';
import { PostsRepository } from './PostsRepository';

export class PostsRepositoryImpl implements PostsRepository {
    getAllPosts(): Post[] {
        const slugs = this.getPostsSlugs();
        return slugs.map(slug => this.getPostBySlug(slug));
    }

    private getPostBySlug(slug: string): Post {
        const fullPath = join(
            PostsRepositoryImpl.postsDirectory(),
            slug,
            'index.md'
        );
        const fileContent = fs.readFileSync(fullPath);
        const { data, content, excerpt } = matter(fileContent, {
            excerpt: true,
            excerpt_separator: '\n',
        });

        return {
            id: crypto.createHash('md5').update(slug).digest('hex'),
            excerpt: excerpt ?? '',
            slug,
            date: this.formatDate(data['date']),
            title: data['title'],
            tags: data['tags'],
            content,
        };
    }

    private formatDate(date: Date) {
        return format(date, 'yyyy年 MM月 dd日');
    }

    private getPostsSlugs(): string[] {
        return fs.readdirSync(PostsRepositoryImpl.postsDirectory());
    }

    private static postsDirectory(): string {
        return join(process.cwd(), 'content/posts');
    }
}
