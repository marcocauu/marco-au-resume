import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { SessionContext } from "../../providers";
import { DivCentered, Description } from "../../common";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontFamily: "inherit",
  },
  input: {
    display: "none",
  },
}));

const CenterContents = styled(DivCentered)`
  text-align: center;
  flex-direction: column;
`;

const ContactMe = () => {
  const { language } = useContext(SessionContext);
  const classes = useStyles();

  return (
    <CenterContents height={50}>
      <Description
        description={language.contactMe}
        width={"60%"}
        disablePadding
        pretext={
          <>
            <p>
              {language.inquiries}
              <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#97;&#114;&#99;&#111;&#46;&#97;&#117;&#117;&#64;&#108;&#105;&#118;&#101;&#46;&#99;&#111;&#109;">
                &#104;&#101;&#114;&#101;
              </a>
              .
            </p>
          </>
        }
      />
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => window.open(language.githubUrl, "_blank")}
      >
        {language.viewOnGithub}
      </Button>
    </CenterContents>
  );
};

export { ContactMe };
