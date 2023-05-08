import {sql} from "@vercel/postgres";
import {Post} from "@/interfaces/Post";

export async function fetchPosts() {
    try {
        const {rows, fields} = await sql`SELECT * FROM Posts;`;
        return rows as Post[];
    } catch (e: any) {
        console.log("Could not fetch posts from database");
        return [];
    }
}

export async function createPost(post: Post): Promise<void> {
    try {
        await sql`INSERT INTO Posts (id, title, content, author, date)
            VALUES (${post.id}, ${post.title}, ${post.content}, ${post.author}, ${post.date});`;
    } catch (e: any) {
        console.log('Could not insert post into the database');
        throw e;
    }
}

async function seed() {
    try {
        // Check if the "Posts" table exists
        const {rows: tableExists} = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_name = 'Posts'
      );
    `;

        // If the table doesn't exist, create it and insert sample data
        if (!tableExists[0].exists) {
            await sql`
        CREATE TABLE Posts (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          author TEXT NOT NULL,
          date TIMESTAMPTZ NOT NULL
        );
      `;
            // Sample blog posts
            const samplePosts: Post[] = [
                {
                    id: 1,
                    title: "Sample Post 1",
                    content: "This is a sample blog post 1",
                    author: "John Doe",
                    date: new Date().toISOString(),
                },
                {
                    id: 2,
                    title: "Sample Post 2",
                    content: "This is a sample blog post 2",
                    author: "Jane Doe",
                    date: new Date().toISOString(),
                },
            ];

            for (const post of samplePosts) {
                await createPost(post);
            }

            console.log("Seeded successfully.");
        } else {
            console.log("Table 'Posts' already exists. Skipping seeding.");
        }
    } catch (e: any) {
        console.error("Seeding failed:", e);
    }
}

seed();