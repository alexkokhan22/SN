import React from "react";
import s from "./FormControle.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}




export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        // <div className={s.formControl + " " + (error ? s.error : "")}>
        //     <div>
        //         <textarea {...props.input} {...props}/>
        //     </div>
        //     {error && <span>{props.meta.error}</span>}
        //
        // </div>

        <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        // <div className={s.formControl + " " + (error ? s.error : "")}>
        //     <div>
        //         <input {...props.input} {...props}/>
        //     </div>
        //     {error && <span>{props.meta.error}</span>}
        //
        // </div>
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}