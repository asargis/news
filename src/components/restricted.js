import React from 'react';
import { withRouter } from 'react-router-dom';

export const withRestricted = (WrappedComponent) => {
    class Restricted extends React.Component {
        componentWillMount() {
            Restricted.checkAuthentication(this.props);
        }

        static checkAuthentication(params) {
            const { history } = params;
            if (localStorage.getItem('isAuth') == null && localStorage.getItem('isAuth') !== 'true') {
                history.replace({ pathname: '/login' });
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        };
    }

    return withRouter(Restricted);
};