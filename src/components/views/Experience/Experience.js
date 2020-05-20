import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ThemeContext, SessionContext } from "../../providers";
import { Icon } from "./components";
import { Section } from "../../common";

const VerticalTimelineElements = ({ experienceList }) => {
  const {
    colors: { plum, beige },
  } = useContext(ThemeContext);
  return (
    <>
      {experienceList.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: plum,
            color: beige,
          }}
          contentArrowStyle={{ borderRight: `7px solid  ${plum}` }}
          date={experience.date}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: beige,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<Icon iconLink={experience.icon} />}
        >
          <h3 className="vertical-timeline-element-title">
            {experience.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experience.company}
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            {experience.location}
          </h4>
          <p>{experience.summary}</p>
        </VerticalTimelineElement>
      ))}
    </>
  );
};

const Experience = () => {
  const { language } = useContext(SessionContext);
  return (
    <Section headerText={language.experience} contentHeight={130} darkMode>
      <VerticalTimeline>
        <VerticalTimelineElements experienceList={language.experienceList} />
      </VerticalTimeline>
    </Section>
  );
};

export { Experience };
