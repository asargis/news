import React from 'react';
import * as UserActions from "../actions/UserActions";
import {connect} from "react-redux";

class Home extends React.Component {
     render() {
        return (
            <div>
                Home...
            </div>
        );
    }
}

export default connect()(Home);