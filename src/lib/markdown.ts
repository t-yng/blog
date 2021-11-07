import path from 'path';
import sizeOf from 'image-size';

const IMAGES_DIR_ROOT = path.join(process.cwd(), 'public');

export const parseImageTextWithSize = (
    content: string,
    imagesDirRoot = IMAGES_DIR_ROOT
) => {
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    const matches = content.matchAll(regex);
    for (const match of matches) {
        const [pattern, alt, src] = match;
        const dimensions = sizeOf(path.join(imagesDirRoot, src));
        content = content.replace(
            pattern,
            `<img src="${src}" alt="${alt}" width="${dimensions.width}" height="${dimensions.height}" />`
        );
    }

    return content;
};
