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
                            height: '50vh',
                            width: '50vw',
                            backgroundColor: '#f45c41',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }
                    }
                >
                    <h1 style={{color: 'white' }}>{myName}</h1>
                    <p style={{color: 'white'}}>Dank memes and the 2K dream.</p>
                    <div className='icon-list' style={{color: 'white', display: 'flex', flexDirection: 'row'}}>
                        <a style={{textDecoration: 'none', color: 'white', paddingRight: 10}} href="https://github.com/mrmonsk" target="_blank"><i className="fa fa-github-alt fa-2x" /></a>
                        <a style={{textDecoration: 'none', color: 'white'}} href="mailto:yowonyoon@gmail.com?Subject=Hello"><i className="fa fa-envelope fa-2x" /></a>
                    </div>
                </div>
            </div>
        )
    }
}