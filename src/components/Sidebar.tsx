import { Divider } from 'primereact/divider';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiUserFollowLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <aside className="sidebar-section">
      <div className="main-profile-image d-none d-sm-done d-md-block d-lg-block">
        <img
          src="https://res.cloudinary.com/dskl0qde4/image/upload/v1683909385/profile_pic_eviqtl.jpg"
          width="100%"
          alt="profile"
        />
      </div>
      <h1 className="fw-bold home-section--name text-center">
        Kwasi Antwi Baayeh
      </h1>
      <p className="text-muted fw-bold w-75 mx-auto text-center">
        Front-End Developer | Collaboration enthusiast | Creating modern and
        intuitive web applications.
      </p>

      <Divider align="center" className="d-none d-md-flex">
        <div className="d-md-flex align-items-center gap-1">
          <RiUserFollowLine className="fs-5" />
          <b>Connect With Me</b>
        </div>
      </Divider>

      <section className="d-none d-md-flex justify-content-center gap-3">
        <a
          href="https://github.com/Baayeh"
          rel="noopener"
          title="Github"
          target="_blank"
          style={{ color: 'black' }}
        >
          <div className="card contact-box">
            <div className="card-body text-center">
              <BsGithub className="fs-5" />
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/kabaayeh"
          rel="noopener"
          title="LinkedIn"
          target="_blank"
          style={{ color: 'black' }}
        >
          <div className="card contact-box">
            <div className="card-body text-center">
              <FaLinkedinIn className="fs-5" />
            </div>
          </div>
        </a>

        <a
          href="https://twitter.com/Cest_Baayeh"
          rel="noopener"
          title="Twitter"
          target="_blank"
          style={{ color: 'black' }}
        >
          <div className="card contact-box">
            <div className="card-body text-center">
              <BsTwitter className="fs-5" />
            </div>
          </div>
        </a>
      </section>
    </aside>
  );
};

export default Sidebar;
