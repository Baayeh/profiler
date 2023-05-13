import { Projects, Services, Sidebar } from '../components';
import {
  TabPanel,
  TabPanelHeaderTemplateOptions,
  TabView,
} from 'primereact/tabview';
import { GrOverview, GrProjects } from 'react-icons/gr';
import { Projects, Sidebar } from '../components';
import Overview from '../components/Overview';

const Home = () => {
  const overview = (options: TabPanelHeaderTemplateOptions) => {
    return (
      <div
        className="d-flex gap-2 align-items-center px-3"
        style={{ cursor: 'pointer' }}
        onClick={options.onClick}
      >
        <GrOverview className="small" />
        Overview
      </div>
    );
  };
  return (
    <div className="home-section position-relative row w-100 m-0">
      <div className="col-lg-4 col-md-5 col-sm-12 col-12">
        <Sidebar />
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 col-12">
        <Services />
        <Projects />
        <TabView>
          <TabPanel
            headerTemplate={overview}
            headerClassName="flex align-items-center"
          >
            <Overview />
          </TabPanel>
      </div>
    </div>
  );
};

export default Home;
