import React from "react"

export function getWidgetHeader(title) {
    return <div style={{width: "100%"}}>
        <div className="h2">{title}</div>
        <div style={{height: "2px", width: "100%", backgroundColor: "#04c2c9"}} />
    </div>
}