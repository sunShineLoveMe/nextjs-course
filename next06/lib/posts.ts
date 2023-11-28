import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// post路径，返回文件名数组
const postsDirectory = path.join(process.cwd(), 'blogposts');

// 获取所有的post文件名
export function getSortedPostsData() {
    // Get file names under /posts  
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        // Use gray-matter to parse the post metadata section
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date
        }
        return blogPost
    })
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        else {
            return -1
        }
    })
}