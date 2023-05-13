import { MdOutlineFitScreen } from 'react-icons/md';

const ServiceCard = () => {
  return (
    <div className="card service-card">
      <div className="card-body">
        <span className="icon-box">
          <MdOutlineFitScreen></MdOutlineFitScreen>
        </span>

        <h1>Engaging Content For Your Website</h1>
        <p>
          I'm a copywriter and content writer who has worked in various web
          agencies and websites so I understand what it takes to write an
          engaging webpage content that will make people linger.
        </p>

        <div className="text-center text-sm-center text-md-right text-lg-right">
          <button type="button" className="btn btn-custom">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
