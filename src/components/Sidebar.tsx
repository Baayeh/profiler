import { Divider } from 'primereact/divider';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiUserFollowLine } from 'react-icons/ri';
import Profile from '../assets/100_3.jpg';

const Sidebar = () => {
  return (
    <aside className="sidebar-section">
      <div className="main-profile-image d-none d-sm-done d-md-block d-lg-block">
        <img src={Profile} width="100%" alt="profile" />
      </div>
      <h1 className="fw-bold home-section--name">Kwasi Antwi Baayeh</h1>
      <p className="text-muted fw-bold w-75 mx-auto">
        Full-Stack Web developer, clean code enthusiast, deep thrills for
        React/Redux, TypeScript and Ruby on Rails. Looking for my next job
        opportunity!
      </p>

      <Divider align="center">
        <div className="d-flex align-items-center gap-1">
          <RiUserFollowLine className="fs-5"></RiUserFollowLine>
          <b>Connect With Me On</b>
        </div>
      </Divider>

      <section className="d-flex justify-content-center gap-3">
        <div className="card contact-box">
          <div className="card-body">
            <FaLinkedinIn className="fs-5"></FaLinkedinIn>
          </div>
        </div>

        <div className="card contact-box">
          <div className="card-body">
            <BsTwitter className="fs-5"></BsTwitter>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
