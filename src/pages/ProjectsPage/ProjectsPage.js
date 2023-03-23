import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ProjectDiv from '../../components/ProjectDiv/ProjectDiv'
import './Project.css'
import { projects } from '../../pages/ProjectsPage/Projects'
import { ProjectJumbo } from './ProjectJumbo';


function ProjectsPage() {
  return (
    <main>
      <Jumbotron 
        h1={ProjectJumbo.jumbotronH1}
        p={ProjectJumbo.jumbotronP}
      />
      <section id="work">
          <div className="container px-4 py-5" id="custom-cards">
              <h2 className="pb-2 border-bottom">My Portfolio</h2>
              <p>Here are a few examples of websites I have built to date:</p>
              
              <div className="row row-cols-md-2 row-cols-lg-2 row-cols-xl-3 align-items-stretch g-4 py-5">
              
                {projects.map( p => <ProjectDiv 
                  divId={p.divId}
                  appLink={p.appLink}
                  appImage={p.appImage}
                  appName={p.appName}
                  appDescription={p.appDescription}
                  icon1={p.icon1}
                  tech1={p.tech1}
                  icon2={p.icon2}
                  tech2={p.tech2}
                  icon3={p.icon3}
                  tech3={p.tech3}
                  key={p.id} />)
                }

              </div>
              
          </div>
      </section>
    </main>
  );
};

export default ProjectsPage