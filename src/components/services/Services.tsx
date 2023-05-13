import { Divider } from 'primereact/divider';
import { RiMagicLine } from 'react-icons/ri';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="services-section mt-5 mt-sm-5 mt-md-0 mt-lg-0">
      <Divider align="center">
        <div className="d-flex align-items-center gap-1">
          <RiMagicLine className="fs-1"></RiMagicLine>
          <h3 className="display-4">What I Do</h3>
        </div>
      </Divider>

      <section className="mt-4 row justify-content-center mx-1 w-100">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
          <ServiceCard />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
          <ServiceCard />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
          <ServiceCard />
        </div>
      </section>
    </div>
  );
};

export default Services;
