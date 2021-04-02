import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStatePropsType} from "../redux/reduxStore";
import {connect} from "react-redux";

type MspType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStatePropsType): MspType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirectComponent  <T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<MspType> {
        render() {
            let {isAuth, ...restProps} = this.props
            if(isAuth === false) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...restProps as T}/>;
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedRedirectComponent
}



