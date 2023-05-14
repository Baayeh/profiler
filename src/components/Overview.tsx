import { Divider } from 'primereact/divider';
import { BiMailSend } from 'react-icons/bi';
import { BsGit, BsGithub, BsTools, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiUserFollowLine } from 'react-icons/ri';
import { SiReact, SiRedux, SiTailwindcss } from 'react-icons/si';
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
} from 'react-icons/tb';

const Overview = () => {
  return (
    <section className="overview">
      <p className="m-0 h4">Howdy, folks! 👋</p>
      <h1 className="display-6">It's your friendly neighborhood developer</h1>
      <p>
        I'm here to help you out! Whether you need an application built from
        scratch or an existing one polished up, I've got you covered.
      </p>
      <p>
        With my skills and expertise, I can create top-notch software that'll
        make your users smile. Plus, I'm always up for a chat and love getting
        to know my clients and their needs.
      </p>
      <p>Let's make something amazing together! 😎</p>

      <div className="socials mt-4">
        <Divider align="center" className="d-flex d-md-none">
          <div className="d-flex align-items-center gap-1">
            <RiUserFollowLine className="fs-5" />
            <b>Connect With Me</b>
          </div>
        </Divider>

        <section className="d-flex d-md-none justify-content-center gap-3">
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

          <a
            href="mailto:kabaayeh@gmail.com"
            rel="noopener"
            title="Mail"
            target="_blank"
            style={{ color: 'black' }}
          >
            <div className="card contact-box">
              <div className="card-body text-center">
                <BiMailSend className="fs-5" />
              </div>
            </div>
          </a>
        </section>
      </div>

      <div className="stack my-5">
        <Divider align="center" className="d-flex">
          <div className="d-flex align-items-center gap-1">
            <BsTools className="fs-5" />
            <b>Stacks Under My Belt</b>
          </div>
        </Divider>

        <div className="d-flex justify-content-around flex-wrap gap-3">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <TbBrandJavascript style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>JavaScript</span>
          </a>
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <TbBrandCss3 style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>CSS</span>
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <TbBrandTypescript style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>TypeScript</span>
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <SiReact style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>ReactJs</span>
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <SiRedux style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>Redux</span>
          </a>
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <TbBrandBootstrap style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>Bootstrap</span>
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <SiTailwindcss style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>TailwindCSS</span>
          </a>

          <a
            href="https://git-scm.com/"
            target="_blank"
            className="d-flex flex-column justify-content-center align-items-center text-decoration-none"
          >
            <BsGit style={{ fontSize: '2.5rem' }} />
            <span style={{ fontSize: '1rem' }}>Git</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Overview;
