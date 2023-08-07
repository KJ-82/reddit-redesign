import React from 'react';
import PostItem from './PostItem';
import './Posts.css';

export default function Posts() {
    const posts = [
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Questions about new wallet",
            user: "theindependentonline",
            subreddit: "politics",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Love this picture",
            user: "jsxbeast",
            subreddit: "world",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "My view this morning",
            user: "saintsfan11",
            subreddit: "agriculture",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Nothing better than this",
            user: "jtr2003",
            subreddit: "life",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "I appreciate it",
            user: "thisisdaway",
            subreddit: "USA",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "The journey awaits",
            user: "EU4life",
            subreddit: "life",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "I love to travel",
            user: "travelgirl",
            subreddit: "travel",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "What do you guys think of this?",
            user: "23jordan",
            subreddit: "perspective",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Good Vibes",
            user: "eazybreezy",
            subreddit: "vibecentral",
            comment_count: Math.floor(Math.random() * 50),
        },
        {
            upvote: Math.floor(Math.random() * 50),
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Can't bother me here",
            user: "waverunner64",
            subreddit: "paradise",
            comment_count: Math.floor(Math.random() * 50),
        },
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}