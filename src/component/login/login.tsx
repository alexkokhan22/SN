import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormConrols";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {removeLoginDataThunk, setLoginDataThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStatePropsType} from "../../redux/reduxStore";
import loginStyles from './login.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type mapDispatchLoginToPropsType = {
    setLogin: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    removeLogin: () => void
}

const mapStateToProps = (state: AppStatePropsType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captcha
    }
}

type IProps = {
    captchaUrl: string
}

const LoginForm = (props: InjectedFormProps<FormDataType, IProps> & IProps) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} name={'email'} placeholder={'email'} validate={[requiredField]}/></div>
        <div><Field component={Input} name={'password'} type={'password'} placeholder={'Password'}
                    validate={[requiredField]}/></div>
        <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/></div>
        remember me
        <div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} name={'captcha'}/>}
        </div>
        <div className={props.error ? loginStyles.error : ' '}>
            {props.error && <div>{props.error}</div>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType, IProps>(
    {
        form: 'login'
    }
)(LoginForm)

const Login = (props: mapStateToPropsType & mapDispatchLoginToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.setLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl ? props.captchaUrl : ''}/>
    </div>
}

export default connect(mapStateToProps, {
    setLogin: setLoginDataThunk,
    removeLogin: removeLoginDataThunk
})(Login);