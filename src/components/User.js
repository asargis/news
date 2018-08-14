import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as userActions from "../actions/UserActions";
import withRouter from "react-router/es/withRouter";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        console.log(this.props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        if (this.props.authMethod === 'logout') {
            this.props.dispatch(userActions.userSignOut());
            localStorage.removeItem('isAuth');
            localStorage.removeItem('username');
            this.props.history.push('/');
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const authData = {};

        for (let entry of formData.entries()) {
            authData[entry[0]] = entry[1]
        }

        axios.post(
            '/auth',
            authData)
            .then((response) => {
                if (response.data.result === 'success' && response.data.isAuth === true) {
                    localStorage.setItem('username', response.data.user);
                    localStorage.setItem('isAuth', 'true');
                    this.props.dispatch(userActions.userSignIn(localStorage.getItem('username'), true));
                    this.props.history.push('/profile')
                }
            });
    }

    render() {
        const {username, password} = this.state;
        if (!this.props.isAuthorized) {
            return (
                <div className='row'>
                    <form method='post' onSubmit={this.onSubmit}>
                        <div className='col-12 m-lg-1'>
                            <input className='form-control' type='text' name='username' value={username}
                                   placeholder='Логин' onChange={this.onChange}
                                   required/>
                        </div>
                        <div className='col-12 m-lg-1'>
                            <input className='form-control' type='text' name='password' value={password}
                                   placeholder='Пароль'
                                   onChange={this.onChange}
                                   required/>
                        </div>
                        <div className='col-12 m-lg-1'>
                            <button className='btn btn-info' type='submit'>Войти</button>
                        </div>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default withRouter(connect()(User));