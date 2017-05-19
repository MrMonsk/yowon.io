import React, { Component } from 'react';
import Head from 'next/head';
import Box from '../components/Box';
import Link from 'next/link';

export default class extends Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <div>
                <Head>
                    <title>yowon.io</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                    <script src="https://use.fontawesome.com/6f29465722.js" />
                </Head>
                <style jsx>
                    {`
                        * {
                            font-family: 'Open Sans', sans-serif;
                        }
                    `}
                </style>
                <Box myName='Yowon Yoon' />
            </div>
        )
    }
}