import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {removeLoginDataThunk} from "../../redux/authReducer";
import {AppStatePropsType} from "../../redux/reduxStore";

type mapStateToPropsAuthContainer = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsAuthType = {
    logOut: () => void
}

const mapStateToProps = (state: AppStatePropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

type HeaderContainerPropsType = mapStateToPropsAuthContainer & mapDispatchToPropsAuthType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logOut = {this.props.logOut}/>;
    }
}


export default connect(mapStateToProps, {logOut: removeLoginDataThunk})(HeaderContainer);