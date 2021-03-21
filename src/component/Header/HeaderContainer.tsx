import React from 'react';
import Header from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {setUsersData} from "../../redux/authReducer";
import {AppStatePropsType} from "../../redux/reduxStore";
import {headerApi} from "../../api/api";

type mapStateToPropsAuthContainer = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsAuthType = {
    setUsersData: (id: number, login: string, email: string) => void
}

type HeaderContainerPropsType = mapStateToPropsAuthContainer & mapDispatchToPropsAuthType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        headerApi.setUsersLogin().then((data) => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setUsersData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}


const mapStateToProps = (state: AppStatePropsType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect (mapStateToProps, {setUsersData}) (HeaderContainer);