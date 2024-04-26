import "./assets/resumeDesigns.css";
import SkillsDesign from "./SkillsDesign";
import ProfileDesign from "./ProfileDesign";
import ExperienceDesign from "./ExperienceDesign";
import EducationDesign from "./EducationDesign";
import CertificationDesign from "./CertificationDesign";
import InterestDesign from "./InterestDesign";
import ProjectDesign from "./ProjectDesign";
import AwardDesign from "./AwardDesign";
import OrganizationDesign from "./OrganizationDesign";
import PublicationDesign from "./PublicationDesign";
import ReferenceDesign from "./ReferenceDesign";
import { useState } from 'react';

// REACT SORTABLE FOR SORTING THE SECTIONS
import { ReactSortable } from "react-sortablejs";

// REACT PDF FOR FLEXIBLE LAYOUTS


const ClassicsDesign = ({
  profileData,
  skillData,
  expData,
  eduData,
  certData,
  interestData,
  projectData,
  courseData,
  awardData,
  orgData,
  pubData,
  refData,
  sortSections,
  handleSectionsChange
}) => {


  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  return (
    <div className=" overflow-y-scroll resGeneralContainer">


      <ReactSortable list={sortSections} setList={handleSectionsChange}>
        {sortSections.map((section, index) => {
          switch (section.name) {
            case "ProfileInput":
              return (
                <>  <p className="mainHeader">PROFILE</p>
                  <div className="mainRowContainer">
                    <ProfileDesign
                      fullName={profileData.fullName}
                      jobTitle={profileData.jobTitle}
                      email={profileData.email}
                      website={profileData.website}
                      phone={profileData.phone}
                      address={profileData.address}
                      github={profileData.github}
                      benance={profileData.benance}
                      link1={profileData.link1}
                      link2={profileData.link2}
                      bio={profileData.bio}
                    />
                  </div>
                  <div className="classicLine"></div>
                </>)
            case "Skills":
              return (<>
                <p className="mainHeader">SKILLS</p>
                <div className="mainRowContainer">
                  {skillData.map((skill, index) => (
                    <SkillsDesign
                      key={index}
                      skill={skill.skill}
                      subSkill={skill.subSkill}
                    />
                  ))}
                </div>
                <div className="classicLine"></div>
              </>);
            case "ProfessionalExp":
              return (<>

                <p className="mainHeader">PROFESSIONAL EXPERIENCE</p>
                <div className="mainRowContainer">
                  {/* Iterate over expData and render ExperienceDesign component */}
                  {expData.map((exp, index) => (
                    <ExperienceDesign
                      key={index}
                      position={exp.position}
                      company={exp.company}
                      location={exp.location}
                      startDate={exp.startDate}
                      stopDate={exp.stopDate}
                      info={exp.info}
                    />
                  ))}
                </div>
                <div className="classicLine"></div>
              </>);
            case "Education":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">EDUCATION</p>
                <div className="mainRowContainer">
                  {eduData.map((edu, index) => (
                    <EducationDesign
                      key={index}
                      school={edu.school}
                      field={edu.field}
                      city={edu.city}
                      country={edu.country}
                      startDate={edu.startDate}
                      endDate={edu.endDate}
                      info={edu.info}
                    />
                  ))}
                </div>

                <div className="classicLine"></div>
              </>);
            case "Certificate":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">CERTIFICATIONS</p>
                <div className="mainRowContainer">

                  {certData.map((cert, index) => (
                    <CertificationDesign
                      key={index}
                      certification={cert.certification}
                      organization={cert.organization}
                      link={cert.link}
                      dDate={cert.dDate}
                    />
                  ))}
                </div>

                <div className="classicLine"></div>
              </>);
            case "Interest":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">INTEREST | HOBBY</p>
                <div className="mainInterestContainer">
                  {interestData.map((interest, index) => (
                    <InterestDesign key={index} interest={interest.interest} />
                  ))}
                </div>

                <div className="classicLine"></div>
              </>);
            case "Project":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">PROJECT</p>
                <div className="mainColumnContainer">
                  {projectData.map((project, index) => (
                    <ProjectDesign
                      key={index}
                      title={project.title}
                      subTitle={project.subTitle}
                      startDate={project.startDate}
                      endDate={project.endDate}
                      city={project.city}
                      country={project.country}
                      info={project.info}
                    />
                  ))}
                </div>

                <div className="classicLine"></div>
              </>);
            case "Course":
              return (
                <>

                  {/* Iterate over expData and render ExperienceDesign component */}
                  <p className="mainHeader">AWARDS</p>
                  <div className="mainRowContainer">
                    {awardData.map((award, index) => (
                      <AwardDesign
                        key={index}
                        title={award.title}
                        body={award.body}
                        link={award.link}
                        endDate={award.endDate}
                        info={award.info}
                      />
                    ))}
                  </div>

                  <div className="classicLine"></div>
                </>
              );
            case "Award":
              return (
                <>

                  {/* Iterate over expData and render ExperienceDesign component */}
                  <p className="mainHeader">AWARDS</p>
                  <div className="mainRowContainer">
                    {awardData.map((award, index) => (
                      <AwardDesign
                        key={index}
                        title={award.title}
                        body={award.body}
                        link={award.link}
                        endDate={award.endDate}
                        info={award.info}
                      />
                    ))}
                  </div>

                  <div className="classicLine"></div>
                </>
              );
            case "Organization":
              return (<>  {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">ORGANIZATIONS</p>
                <div className="mainRowContainer">
                  {orgData.map((org, index) => (
                    <OrganizationDesign
                      key={index}
                      title={org.title}
                      position={org.position}
                      location={org.location}
                      startDate={org.startDate}
                      endDate={org.endDate}
                      info={org.info}
                    />
                  ))}
                </div>

                <div className="classicLine"></div></>);
            case "Publication":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">PUBLICATION</p>
                <div className="mainRowContainer">
                  {pubData.map((pub, index) => (
                    <PublicationDesign
                      key={index}
                      title={pub.title}
                      publisher={pub.publisher}
                      link={pub.link}
                      endDate={pub.endDate}
                      info={pub.info}
                    />
                  ))}
                </div>

                <div className="classicLine"></div>
              </>);
            case "Reference":
              return (<>
                {/* Iterate over expData and render ExperienceDesign component */}
                <p className="mainHeader">REFERENCE</p>
                <div className="mainRowContainer">
                  {refData.map((ref, index) => (
                    <ReferenceDesign
                      key={index}
                      name={ref.name}
                      job={ref.job}
                      company={ref.company}
                      email={ref.email}
                      phone={ref.phone}
                      city={ref.city}
                      country={ref.country}
                    />
                  ))}
                </div>
                <div className="classicLine"></div>
              </>);
            default:
              return null;
          }
        })}










      </ReactSortable>

    </div >

  );
};

export default ClassicsDesign;
