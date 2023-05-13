import { Projects, Services, Sidebar } from '../components';

const Home = () => {
  return (
    <div className="home-section position-relative row w-100 m-0">
      <div className="col-lg-4 col-md-5 col-sm-12 col-12">
        <Sidebar />
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 col-12">
        <Services />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
