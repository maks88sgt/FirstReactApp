import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        };
        this.props.getUserProfile(userId);

    };

    render() {
        return (
            <Profile {...this.props}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps,{getUserProfile}) (WithURLDataContainerComponent);