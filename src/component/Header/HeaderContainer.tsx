import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {setUsersDataThunk} from "../../redux/authReducer";
import {AppStatePropsType} from "../../redux/reduxStore";
import {headerApi} from "../../api/api";

type mapStateToPropsAuthContainer = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsAuthType = {
    setUsersData: () => void
}

const mapStateToProps = (state: AppStatePropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

type HeaderContainerPropsType = mapStateToPropsAuthContainer & mapDispatchToPropsAuthType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUsersData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}


export default connect(mapStateToProps, {setUsersData: setUsersDataThunk})(HeaderContainer);