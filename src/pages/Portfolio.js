import React, { useState } from "react"
import "../App.css"
import "./Portfolio.css"
import { getWidgetHeader } from "../util/HeaderUtil"
import handleViewPort from "react-in-viewport"
import "../css/common.css"
import locationLogo from "../assets/location.svg"
import calendarLogo from "../assets/calendar.svg"
import footballLogo from "../assets/football.svg"

export default function() {
    return <div className="flex-column portfolio-container" style={{alignItems: "flex-start"}}>
        <div className="responsive-flex-row" style={{justifyContent: "space-between", width: "100%"}}>
            <ViewPortWork />
            <div className="flex-column portfolio-skill-engagement">
                <ViewPortSkills />
                <ViewPortExternalEngagements />
            </div>
        </div>
        <ViewPortEducation />
    </div>
}

const ViewPortWork = handleViewPort(Work, {threshold: 0.25}, {disconnectOnLeave: true})

function Work({ inViewport, forwardedRef }) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    if (!shouldAnimate && inViewport) {
        setShouldAnimate(true)
    }
    return <div style={{alignItems: "flex-start"}} className={`flex-column portfolio-work-container ${shouldAnimate? "fadeInDown" : ""}`} ref={forwardedRef}>
        {getWidgetHeader("WORK EXPERIENCE")}
        <WorkExperience
            companyName="Google"
            designation="Software Engineer"
            duration="2019 - present"
            projects={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            ]}
        />
        <WorkExperience
            companyName="Google"
            designation="Software Engineer"
            duration="2018 - 2019"
            projects={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]}
        />
    </div>
}

function WorkExperience({companyName, designation, duration, projects}) {
    return <div className="flex-column small-widget" style={{width: "100%"}}>
        <div>
            <span className="h3">{designation}</span>
            <span>{` - ${companyName}`}</span>
        </div>
        <div>{duration}</div>
        {projects.map((project, idx) => <li key={idx}>{project}</li>)}
    </div>
}

const ViewPortEducation = handleViewPort(Education, {threshold: 1}, {disconnectOnLeave: true})

function Education({inViewport, forwardedRef}) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    if (!shouldAnimate && inViewport) {
        setShouldAnimate(true)
    }
    return <div className={`flex-column ${shouldAnimate? "fadeInDown" : ""}`} style={{alignItems: "flex-start", width: "100%", opacity: 0}} ref={forwardedRef}>
        {getWidgetHeader("EDUCATION")}
        <div className="responsive-flex-row" style={{alignSelf: "stretch", justifyContent: "space-between"}}>
            <EducationItem
                degree="Bachelor Of Technology(CSE)"
                name="IIIT Delhi"
                duration="2014 - 2018"
            />
            <EducationItem
                degree="High School"
                name="Delhi Public School"
                duration="2012 - 2013"
            />
        </div>
    </div>
}

function EducationItem({degree, name, duration}) {
    return <div className="flex-column small-widget potfolio-education-item">
        <div className="h3">{degree}</div>
        <div className="flex-row" style={{alignItems: "center"}}>
            <img src={locationLogo} className="small-icon" alt="" style={{marginRight: 16}}/>
            <div>{name}</div>
        </div>
        <div className="flex-row" style={{alignItems: "center"}}>
            <img src={calendarLogo} className="small-icon" alt="" style={{marginRight: 16}}/>
            <div>{duration}</div>
        </div>
    </div>
}

const ViewPortSkills = handleViewPort(Skills, {threshold: 0.5}, {disconnectOnLeave: true})

function Skills({inViewport, forwardedRef}) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    if (!shouldAnimate && inViewport) {
        setShouldAnimate(true)
    }
    return <div className={`flex-column portfolio-skills-container ${shouldAnimate? "fadeInDown" : ""}`} ref={forwardedRef}>
        {getWidgetHeader("SKILLS")}
        <div className="flex-column small-widget" style={{width: "100%"}}>
            <SkillItem name="React" score={80}/>
            <SkillItem name="React" score={70}/>
            <SkillItem name="React" score={95}/>
            <SkillItem name="React" score={84}/>
            <SkillItem name="React" score={76}/>
            <SkillItem name="React" score={65}/>
            <SkillItem name="React" score={82}/>
        </div>
    </div>
}

function SkillItem({name, score}) {
    return <div className="flex-row portfolio-skill-item" style={{width: "100%"}}>
        <div style={{marginRight: "24px"}}>{name}</div>
        <div className="flex-row" style={{flex: 1, height: "12px", alignSelf: "center"}}>
            <div style={{ width: `${score}%`, backgroundColor: "#04c2c9"}}/>
            <div style={{ width: `${100-score}%`, backgroundColor: "#252934"}}/>
        </div>
    </div>
}

const ViewPortExternalEngagements = handleViewPort(ExternalEngagements, {threshold: 0.5}, {disconnectOnLeave: true})

function ExternalEngagements({inViewport, forwardedRef}) {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    if (!shouldAnimate && inViewport) {
        setShouldAnimate(true)
    }
    return <div className={`${shouldAnimate? "fadeInDown" : ""} flex-column`} style={{opacity: 0}} ref={forwardedRef} >
        {getWidgetHeader("HOBBIES")}
        <div className="portfolio-hobby-container small-widget" style={{flex: 1, width: "100%"}}>
            <HobbyItem name="Football" icon={footballLogo}/>
            <HobbyItem name="Football" icon={footballLogo}/>
            <HobbyItem name="Football" icon={footballLogo}/>
            <HobbyItem name="Football" icon={footballLogo}/>
            <HobbyItem name="Football" icon={footballLogo}/>
            <HobbyItem name="Football" icon={footballLogo}/>
        </div>
    </div>
}

function HobbyItem({name, icon}) {
    return <div className="portfolio-hobby-item flex-column">
        <img src={icon} alt="" className="medium-icon"/>
        <div>{name}</div>
    </div>
}
