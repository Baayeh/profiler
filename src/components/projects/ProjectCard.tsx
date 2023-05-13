import ProjectImage from '../assets/experience-image-03.jpg';

const ProjectCard = () => {
  const style = {
    backgroundImage: `url(${ProjectImage})`,
  };

  return (
    <article className="card project-card">
      <div className="card-body d-flex flex-column flex-sm-colum flex-md-column flex-lg-row align-items-center justify-content-between">
        <section className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center gap-2">
          <div className="project-image" style={style}></div>
          <div className="text-center text-sm-center text-md-center text-lg-start">
            <span className="d-block project-date-label">2015-2020</span>
            <h5>Web Design</h5>
            <p className="text-muted fw-semibold w-75">
              The project is based on an app to book an appointment with a
              health specialist(Doctor). The doctor appointment booking app...
            </p>
          </div>
        </section>

        <div className="project-action-section">
          <button type="button" className="btn btn-custom project-action-btn">
            view project
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
