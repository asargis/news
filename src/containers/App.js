import React, {Component} from "react";
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "../components/AppRouter";
import {bindActionCreators} from "redux";
import * as userActions from '../actions/UserActions';
import * as pageActions from '../actions/PageActions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <AppRouter state={this.props}/>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators([userActions, pageActions], dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
