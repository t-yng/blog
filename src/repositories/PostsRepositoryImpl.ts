import fs from 'fs';
import crypto from 'crypto';
import { join } from 'path';
import { format } from 'date-fns';
import matter from 'gray-matter';
import { Post } from '../entities/Post';
import { PostsRepository } from './PostsRepository';
import { profile } from '../constants/profile';

export class PostsRepositoryImpl implements PostsRepository {
    getAllPosts(): Post[] {
        const slugs = this.getPostsSlugs();
        return slugs
            .map(slug => this.getPostBySlug(slug))
            .filter((x): x is Post => x != null);
    }

    getPostBySlug(slug: string): Post | null {
        const fullPath = join(
            PostsRepositoryImpl.postsDirectory(),
            slug,
            'index.md'
        );

        if (!fs.existsSync(fullPath)) {
            return null;
        }

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
            description: data['description'],
            tags: data['tags'],
            author: data['author'] || profile.name,
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
