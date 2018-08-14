import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Home from '../components/Home';
import News from '../components/News';
import Profile from '../components/Profile';
import User from './User';
import NotFound from '../components/NotFound';
import {withRestricted} from '../components/restricted';
import * as userActions from "../actions/UserActions";

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    static logout() {
        localStorage.removeItem('isAuthorized');
        localStorage.removeItem('username');
    }

    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Профиль</Link>
                        </li>
                        <li>
                            <Link to='/news'>Новости</Link>
                        </li>
                        <li>
                            <Link
                                to={this.props.state.user.isAuthorized === true ? '/logout' : '/login' }>
                                { this.props.state.user.isAuthorized === true ? 'Выйти' : 'Войти' }
                            </Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={withRestricted(Profile)}/>
                    <Route exact path='/news/' component={News}/>
                    <Route path='/login' component={ () => <User authMethod='login' /> }/>
                    <Route path='/logout' component={ () => <User authMethod='logout' /> }/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect()(AppRouter));
