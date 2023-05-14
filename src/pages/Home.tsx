import {
  TabPanel,
  TabPanelHeaderTemplateOptions,
  TabView,
} from 'primereact/tabview';
import { GrOverview } from 'react-icons/gr';
import { Projects, Sidebar } from '../components';
import Overview from '../components/Overview';
import Advisor from '../components/advice/Advisor';
import Experience from '../components/experience/Experience';

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

  const experience = (options: TabPanelHeaderTemplateOptions) => {
    return (
      <div
        className="d-flex gap-2 align-items-center px-3"
        style={{ cursor: 'pointer' }}
        onClick={options.onClick}
      >
        <i className="pi pi-th-large small" />
        Experience
      </div>
    );
  };

  const advise = (options: TabPanelHeaderTemplateOptions) => {
    return (
      <div
        className="d-flex gap-2 align-items-center px-3"
        style={{ cursor: 'pointer' }}
        onClick={options.onClick}
      >
        <i className="pi pi-android small" />
        Advisor
      </div>
    );
  };

  return (
    <div className="home-section position-relative row w-100 m-0">
      <div className="col-lg-4 col-md-5 col-sm-12 col-12">
        <Sidebar />
      </div>
      <div className="col-lg-8 col-md-7 col-sm-12 col-12">
        <TabView>
          <TabPanel
            headerTemplate={overview}
            headerClassName="flex align-items-center"
          >
            <Overview />
          </TabPanel>
          <TabPanel
            headerTemplate={experience}
            headerClassName="flex align-items-center"
          >
            <Experience />
            <Projects />
          </TabPanel>
          <TabPanel
            headerTemplate={advise}
            headerClassName="flex align-items-center"
          >
            <Advisor />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Home;
