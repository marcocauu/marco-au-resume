import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { SessionContext, ThemeContext } from "../../providers";
import { windowOpen, scrollToTop } from "../../../helpers";
import { Section } from "../../common";

const useStyles = (color) =>
  makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      fontFamily: "inherit",
      "&:hover": {
        backgroundColor: color,
        color: "white",
      },
    },
    input: {
      display: "none",
    },
  }))();

const CenterContents = styled.div`
  text-align: center;
  flex-direction: column;
`;

const StyledDivRow = styled.div`
  align-content: row;
`;

const ContactMe = () => {
  const { language } = useContext(SessionContext);
  const {
    colors: { plum },
  } = useContext(ThemeContext);
  const classes = useStyles(plum);

  return (
    <Section headerText={language.contact} contentHeight={50}>
      <CenterContents>
        <div>
          <p>
            {language.inquiries}
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#97;&#114;&#99;&#111;&#46;&#97;&#117;&#117;&#64;&#108;&#105;&#118;&#101;&#46;&#99;&#111;&#109;">
              &#104;&#101;&#114;&#101;
            </a>
            .
          </p>
          {language.contactMe.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        <StyledDivRow>
          <Button
            id="viewOnGithubButton"
            variant="outlined"
            className={classes.button}
            onClick={windowOpen(language.githubUrl, true)}
          >
            {language.viewOnGithub}
          </Button>
          <Button
            id="viewLinkedinButton"
            variant="outlined"
            className={classes.button}
            onClick={windowOpen(language.linkedinUrl, true)}
          >
            {language.viewLinkedin}
          </Button>
        </StyledDivRow>
        <StyledDivRow>
          <Button
            id="scrollToTopButton"
            className={classes.button}
            onClick={scrollToTop()}
          >
            {language.scrollToTop}
          </Button>
        </StyledDivRow>
      </CenterContents>
    </Section>
  );
};

export { ContactMe };
