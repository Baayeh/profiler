type ProjectProps = {
  image: string;
  title: string;
  description: string;
  source: string;
  date: string;
};

const ProjectCard = ({
  image,
  title,
  description,
  source,
  date,
}: ProjectProps) => {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <article className="card project-card">
      <div className="card-body d-flex flex-column flex-sm-colum flex-md-column flex-lg-row align-items-center justify-content-between">
        <section className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center gap-2">
          <div className="project-image" style={style}></div>
          <div className="text-center text-sm-center text-md-center text-lg-start">
            <span className="d-block project-date-label">{date}</span>
            <h5 className="mt-1">{title}</h5>
            <p className="text-muted fw-semibold w-75">
              {description.length > 100
                ? `${description.slice(0, 100)}...`
                : description}
            </p>
          </div>
        </section>

        <div className="project-action-section">
          <a href={source} target="_blank">
            <button type="button" className="btn btn-custom project-action-btn">
              view project
            </button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
