import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";




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

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{getUserProfile}) (WithURLDataContainerComponent);