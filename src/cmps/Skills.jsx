import iconPerson from '../assets/images/icon-person.svg'
import iconCog from '../assets/images/icon-cog.svg'
import iconChart from '../assets/images/icon-chart.svg'
import SkiilRightIcon from '../assets/images/bg-pattern-home-3.svg'
export function Skills() {
  return (
    <section className="skills-section full">
      <div className="skills-container full">
        <div className="skills-header-container">
          <h1 className="skills-header-title">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="skills-content-container">
          <div className="skill skill-1">
            <img src={iconPerson} alt="Experienced Individuals" className="skill-icon" />
            <div className="skill-info">
              <p className="skill-title colored">Experienced Individuals</p>
              <p className="skill-description">
                Our network is made up of highly experienced professionals who are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="skill skill-2">
            <img src={iconCog} alt="Easy to Implement" className="skill-icon" />
            <div className="skill-info">
              <p className="skill-title colored">Easy to Implement</p>
              <p className="skill-description">
                Our processes have been refined over years of implementation meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="skill skill-3">
            <img src={iconChart} alt="Enhanced Collaboration" className="skill-icon" />
            <div className="skill-info">
              <p className="skill-title colored">Enhanced Productivity</p>
              <p className="skill-description">
                Our customized platform with in-built analytics helps you manage your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={SkiilRightIcon} alt="" className="skill-right-icon" />
    </section>
  );
}