import styles from './ProjectsStyles.module.css';
import logo from '../../assets/logo.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import lift from "../../assets/lift.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logo}
          link="https://homehub-jwy1.onrender.com/"
          h3="HomeHub.com"
          p="A real estate platform to connect buyers, sellers, renters, and landlords in a seamless online marketplace"
          
        />
        <ProjectCard
          src={lift}
          link="https://lift-simulation-pink.vercel.app/"
          h3="Lift Simulation"
          p="A web app where you can simulate lift mechanics"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> 
         <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
