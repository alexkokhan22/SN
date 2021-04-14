import React from "react";
import s from "./FormControle.module.css"




export const Textarea = (props: any) => {
    const error = props.meta.touched && props.meta.error

    return (
        <div className={s.formControl + " " + (error ? s.error : "")}>
            <div>
                <textarea {...props.input} {...props}/>
            </div>
            {error && <span>{props.meta.error}</span>}

        </div>
    )
}

export const Input = (props: any) => {
    const error = props.meta.touched && props.meta.error

    return (
        <div className={s.formControl + " " + (error ? s.error : "")}>
            <div>
                <input {...props.input} {...props}/>
            </div>
            {error && <span>{props.meta.error}</span>}

        </div>
    )
}