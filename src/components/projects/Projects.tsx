import { Divider } from 'primereact/divider';
import { BsFolder2Open } from 'react-icons/bs';
import projects from './ProjectArray';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className="services-section mt-5 mt-sm-5 mt-md-0 mt-lg-0">
      <Divider align="center">
        <div className="d-flex align-items-center gap-1">
          <BsFolder2Open className="fs-1"></BsFolder2Open>
          <h3 className="display-4">Projects</h3>
        </div>
      </Divider>

      <div className="row">
        {projects &&
          projects.map((project) => {
            return (
              <div className="col-12">
                <ProjectCard
                  image={project.image}
                  description={project.description}
                  title={project.title}
                  source={project.source}
                  date={project.date}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Project;
