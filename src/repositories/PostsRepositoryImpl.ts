import fs from 'fs';
import crypto from 'crypto';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../entities/Post';
import { PostsRepository } from './PostsRepository';
import { profile } from '../constants/profile';

export class PostsRepositoryImpl implements PostsRepository {
    getAllPosts(): Post[] {
        const slugs = this.getAllSlugs();
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
        const { data, content } = matter(fileContent);

        return {
            id: crypto.createHash('md5').update(slug).digest('hex'),
            slug,
            date: data['date'],
            title: data['title'],
            description: data['description'],
            tags: data['tags'],
            author: data['author'] || profile.name,
            content,
        };
    }

    getPostsByTag(tag: string) {
        const posts = this.getAllPosts();
        return posts.filter(post => {
            const tags = post.tags.map(tag => tag.toLowerCase());
            return tags.includes(tag.toLowerCase());
        });
    }

    private getAllSlugs(): string[] {
        return fs.readdirSync(PostsRepositoryImpl.postsDirectory());
    }

    private static postsDirectory(): string {
        return join(process.cwd(), 'content/posts');
    }
}
