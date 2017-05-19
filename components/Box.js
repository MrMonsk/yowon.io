import React, { Component } from 'react';

export default class extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { myName } = this.props;
        return (
            <div 
                style = {
                    { 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: '100vh'
                    }
                }
            >
                <div className='box'
                    style = {
                        {
                            height: '70vh',
                            width: '70vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }
                    }
                >
                    <style jsx>{`
                        .box {
                            background: linear-gradient(120deg, #f45c41, #9c41f4);
                            background-size: 200% 200%;

                            animation: transition 24s ease infinite;
                            }

                            @keyframes transition { 
                                0%{background-position:0% 50%}
                                50%{background-position:100% 50%}
                                100%{background-position:0% 50%}
                            }
                        }
                    `}</style>
                    <h1 style={{color: 'white' }}>{myName}</h1>
                    <p style={{color: 'white'}}>Dank memes and the 2K dream.</p>
                    <div className='icon-list' style={{color: 'white', display: 'flex', flexDirection: 'row'}}>
                        <a style={{textDecoration: 'none', color: 'white', paddingRight: 10}} href="https://github.com/mrmonsk" target="_blank" title="github"><i className="fa fa-github-alt fa-2x" /></a>
                        <a style={{textDecoration: 'none', color: 'white', paddingRight: 10}} href="http://coda.yowonyoon.com" target="_blank" title="my blog"><i className="fa fa-rss fa-2x" /></a>
                        <a style={{textDecoration: 'none', color: 'white', paddingRight: 10}} href="mailto:yowonyoon@gmail.com?Subject=Hello" title="email me"><i className="fa fa-envelope fa-2x" /></a>
                    </div>
                </div>
            </div>
        )
    }
}