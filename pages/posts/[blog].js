import React from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from '../../components/Header';

function Blog(props) {
    const {data, content} = matter(props.content);

    return (
        <div id="blog-post-container">
            <div className="container">
            <Header />
            <h1 className="header">{data.title}</h1>
            <h3>{data.description}</h3>
            <ReactMarkdown children={content} />
            </div>
        </div>
    );
}

export const getServerSideProps = async context => {

    const fs = require("fs");

    const {blog} = context.params;

    const content = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, 'utf8')

    return {
        props: {
            content
        }
    };
}

export default Blog;