"use client";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
import CTA from "../../components/cta";
  import { experiences, skills } from "../../app.constant";
  import "react-vertical-timeline-component/style.min.css";

export default function About() {
    return (
        <section className='max-container'>
          <h1 className='head-text'>
            Hello, I&apos;m{" "}
            <span className='blue-gradient_text font-semibold drop-shadow'>
              {" "}
              Mritunjay
            </span>{" "}
            👋
          </h1>
    
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            An adaptable and responsible software engineer seeking a position in your firm which will utilize my technical skills for the success of your organization. I am dedicated to developing and optimizing interactive, user-friendly, and feature-rich websites. I am a methodological, organized, self-learner. I leverage analytical skills and put strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, and build new websites
    from start to finish.
            </p>
          </div>
    
          <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>
    
            <div className='mt-16 flex flex-wrap gap-12 justify-around sm:justify-start'>
              {skills.map((skill) => (
                <div className='block-container w-20 h-20' key={skill.name}>
                  <div className='btn-back rounded-xl' />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          <div className='py-16'>
            <h3 className='subhead-text'>Work Experience.</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
              <p>
                After completing my graduation in 2015, I started my career as a
                Software Engineer. I have worked with few companies in India and Thiland.
              </p>
            </div>
    
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={experience.icon}
                          alt={experience.company_name}
                          className='w-[60%] h-[60%] object-contain'
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                    }}
                    visible={true}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p
                        className='text-black-500 font-medium text-base'
                        style={{ margin: 0 }}
                      >
                        {experience.company_name}
                      </p>
                    </div>
    
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className='text-black-500/50 font-normal pl-1 text-sm'
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
    
          <hr className='border-slate-200' />
    
          <CTA />
        </section>
      );
}