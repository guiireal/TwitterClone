import React, { Component } from 'react'
import twitterlogo from '../twitter.svg'

import './Login.css'

export default class Login extends Component {

    state = {
        username: '',
    }

    handleInputChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username } = this.state;

        if (!username.length) return;
        
        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');

    }

    render() {
        return (
            <div className='login-wrapper'>
                <img src={twitterlogo} alt='GoTwitter' />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder='Nome do Usuário'
                        value={this.state.username}
                        onChange={this.handleInputChange} />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}