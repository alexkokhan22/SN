import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormConrols";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {authPropsType, removeLoginDataThunk, setLoginDataThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {dialogsPropsType} from "../../redux/dialogsReducer";
import {AppStatePropsType} from "../../redux/reduxStore";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type mapStateToPropsType = {
   isAuth: boolean
}

 type mapDispatchLoginToPropsType = {
     setLogin: (email: string, password: string, rememberMe: boolean) => void
     removeLogin: () => void

}

const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} name={'email'} placeholder={'email'} validate={[requiredField]} /></div>
        <div><Field component={Input} name={'password'} type={'password'} placeholder={'Password'} validate={[requiredField]}/></div>
        <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/></div>
        remember me
        <div>
            {props.error && <div>{props.error}</div>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>(
    {
        form: 'login'
    }
) (LoginForm)

const Login = (props: mapStateToPropsType & mapDispatchLoginToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.setLogin(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default connect (mapStateToProps, {
    setLogin: setLoginDataThunk,
    removeLogin: removeLoginDataThunk
}) (Login);