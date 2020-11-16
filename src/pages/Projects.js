import React, { useState } from "react"
import "../App.css"
import "./Projects.css"
import Button from "../util/ButtonUtil"
import { getWidgetHeader } from "../util/HeaderUtil"
import handleViewPort from "react-in-viewport"

function Projects({ inViewport, forwardedRef }) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    if (!shouldAnimate && inViewport) {
        setShouldAnimate(true)
    }
    return (<div className={`projects-page-container ${shouldAnimate? "fadeInDown" : ""}`} ref={forwardedRef}>
        {getWidgetHeader("PROJECTS")}
        <div className="responsive-flex-row projects-container small-widget">
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
            <ProjectItem imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" description="LOREM IPSUM"/>
        </div>
    </div>)
}

function ProjectItem({imageUrl, description}) {
    return <div className="project-item-container">
        <img src={imageUrl} className="project-item-image" alt="project_cover_image"/>
        <div className="project-item-description">
            <div className="project-item-description-title">{description}</div>
            <Button title="LEARN MORE" className="project-item-description-button"/>
        </div>
    </div>
}

export default handleViewPort(Projects, {threshold: 0.5}, {disconnectOnLeave: true})
