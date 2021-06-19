import React from 'react';
import Head from 'next/head';

function Header(props) {

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="Description" content="This is a cool blog!"></meta>
            <title>Awesome Blog</title>
        </Head>
    );
}

export default Header;

