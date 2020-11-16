import React from "react"
import "./Button.css"

export default function Button({title, className=""}) {
    return <a className={`${className}`} href="https://reactjs.org">
        <div className="button">
            {title}
        </div>
    </a>
}