import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";

import { DivCentered } from "../../common";
import { ThemeContext } from "../../providers";
import { Icon } from "./components";

const VerticalTimelineElements = ({ experienceList }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      {experienceList.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.plum,
            color: colors.beige,
          }}
          contentArrowStyle={{ borderRight: `7px solid  ${colors.plum}` }}
          date={experience.date}
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: colors.beige,
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

const Experience = ({ experienceList }) => {
  return (
    <DivCentered height={130} darkMode>
      <VerticalTimeline>
        <VerticalTimelineElements experienceList={experienceList} />
      </VerticalTimeline>
    </DivCentered>
  );
};

Experience.propTypes = {
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { Experience };
