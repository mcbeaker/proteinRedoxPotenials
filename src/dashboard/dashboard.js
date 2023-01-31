import React, {Component} from 'react';
// import Notification from './Notification';
// import ListProject from '../project/ListProject';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TableRedox from '../redox/tableRedox';

class Dashboard extends Component{
    render(){
        console.log(this.props);
        const {redox} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TableRedox projects={redox}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        redox: state.firestore.ordered.redox
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'redox' }
    ])
)(Dashboard);