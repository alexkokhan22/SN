import React from 'react';
import './App.css';
import Nav from "./component/Nav/Nav";
import Music from "./component/Music/music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/login/login";
import {connect} from 'react-redux';
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppStatePropsType} from "./redux/reduxStore";
import Preloader from "./component/common/Preloader/Preloader";


type MapDispatchToPropsType = {
    initializedUser: () => void
}

type MapStateToPropsType = {
    initialized: boolean
    isAuth: boolean
}


const mapStateToProps = (state: AppStatePropsType): MapStateToPropsType => (
    {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth

    }
)

type AppProps = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.initializedUser()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        );
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializedUser: initializeAppTC
    }))(App)
