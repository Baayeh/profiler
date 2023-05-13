import { MouseEvent, useState } from 'react';
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

const Navigation = () => {
  const [currentTheme, setCurrentTheme] = useState('');

  const toggleTheme = (
    theme: string,
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    const root = document.querySelector(':root');
    setCurrentTheme(theme);
    root?.setAttribute('color-scheme', `${theme}`);
    localStorage.setItem('app-theme', theme);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 w-100">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center gap-2">
          <div className="profile-container d-block d-sm-block d-md-none d-lg-block">
            <img
              src="https://res.cloudinary.com/dskl0qde4/image/upload/v1683909385/profile_pic_eviqtl.jpg"
              width="100%"
              alt="profile"
            />
          </div>
          <a
            href="#"
            className="navbar-brand-link d-none d-sm-none d-md-block d-lg-block"
          >
            I am Kwasi
          </a>
        </div>

        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {currentTheme === 'light' ? (
              <BiSun className="fs-3"></BiSun>
            ) : (
              <BsMoonStars className="fs-3"></BsMoonStars>
            )}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href=""
                onClick={(e) => toggleTheme('light', e)}
              >
                <BiSun className="mr-2"></BiSun> Light
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href=""
                onClick={(e) => toggleTheme('dark', e)}
              >
                <BsMoonStars className="mr-2"></BsMoonStars> Dark
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
