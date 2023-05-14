import { MdWorkHistory } from 'react-icons/md';

const Experience = () => {
  return (
    <section>
      <h4 className="d-flex align-items-center gap-2 m-0">
        <MdWorkHistory />
        <span>Work</span>
      </h4>
      <div className="mt-3 mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">Allianz Ghana</h5>
          <p className="m-0">Accra, Ghana</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">IT Officer</p>
          <p className="m-0">June 2019 – August 2022</p>
        </div>
        <ul className="mt-3">
          <li>Awarded the employee of the year 2021.</li>
          <li>Designated tech person to handle IT hardware issues.</li>
          <li>
            Designated as the first point of contact as users knew I was patient
            and accommodating.
          </li>
          <li>
            Designated to manage employee accounts as this was a very crucial
            task.
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">Microverse</h5>
          <p className="m-0">Remote</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">Mentor</p>
          <p className="m-0">October – November 2022</p>
        </div>
        <ul className="mt-3">
          <li>
            Mentored junior web developers, providing them with technical
            assistance and direction when needed.
          </li>
          <li>
            Proposed 10% improvements to code organization to improve code
            quality and overall performance.
          </li>
          <li>
            Provided words of wisdom and important information about maintaining
            motivation to achieve longevity in the program.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Experience;
