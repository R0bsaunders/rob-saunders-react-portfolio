import React from 'react'
import '../../styles/style.css'

const liClass = "d-flex align-items-center me-3"

function ProjectDiv(props) {
  return (

        <div className="portfolio-height p-2">
            <div className="work-card card card-cover h-100 overflow-hidden text-bg-dark shadow-lg" id={props.divId} >

              <a href={props.appLink} target="_blank">
                <h3 className="mb-4 h3-portfolio">{props.appName}</h3>

                <div id="card-description">

                    <p>{props.appDescription}</p>
                </div>
                </a>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">

                    <ul className="work-ul d-flex list-unstyled mt-auto">

                        <li className={liClass}>
                            <i className={props.icon1}></i>
                            <small>{props.tech1}</small>
                        </li>

                        <li className={liClass}>
                            <i className={props.icon2}></i>
                            <small>{props.tech2}</small>
                        </li>

                        <li className={liClass}>
                            <i className={props.icon3}></i>
                            <small>{props.tech3}</small>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
  )};

export default ProjectDiv;