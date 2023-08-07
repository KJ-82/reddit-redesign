import React from 'react';
import './SideNav.css';
export default function SideNav() {
    const menus = [
        {to: 'r/popular', text: "Popular"},
        {to: 'r/all', text: "All"},
        {to: 'r/random', text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "wordnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaminig",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "tele",
        "soccer",





    ]
    return (
        <div className="sidenav">
            <div className="sidenav_logo">
                <img img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="reddit" />
            </div>
            <div className="sidenav_search" >
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div>
            <div className="sidenav_link" >
                <ul className="sidenav_menu">
                    {menus.map(menu =>(
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />
                <ul className="sidenav_subreddit">
                        {subreddits.map(subreddit => (
                            <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                        ))}
                </ul>
            </div>

        </div>
    )
}