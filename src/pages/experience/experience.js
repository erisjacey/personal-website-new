import React, { useState, useRef } from 'react';
import {
  Container, Box, Typography, Grid, Slide,
} from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';
import LogoNUS from 'myAssets/experience/logo_nus.png';
import LogoACJC from 'myAssets/experience/logo_acjc.png';
import LogoMatchub from 'myAssets/experience/logo_matchub.png';
import LogoVisa from 'myAssets/experience/logo_visa.png';
import TranscriptNUS from 'myAssets/experience/transcript_nus.pdf';
import TranscriptACJC from 'myAssets/experience/transcript_acjc.pdf';
import TeachingFeedbackReports from 'myAssets/experience/teaching-feedback-reports.pdf';
import { WEBSITE_MATCHUB, WEBSITE_VISA } from 'myConstants';
import AcademicPaper from 'myComponents/experience/academicPaper';
import WorkPaper from 'myComponents/experience/workPaper';

const AcademicExperience = [
  {
    title: 'National University of Singapore',
    logo: LogoNUS,
    description: 'B. Comp Computer Science (Hons)',
    duration: '2019 - 2023',
    grade: 'Current CAP: 4.73 / 5.0',
    transcript: TranscriptNUS,
  },
  {
    title: 'Anglo-Chinese Junior College',
    logo: LogoACJC,
    description: 'GCE A Levels',
    duration: '2015 - 2016',
    grade: '5 Distinctions',
    transcript: TranscriptACJC,
  },
];

const WorkExperience = [
  {
    title: 'Visa',
    logo: LogoVisa,
    role: 'Software Engineer Intern',
    duration: 'May 2022 - Aug 2022',
    modules: [],
    skills: [
      'Back-End', 'Java', 'Spring', 'Jira',
      'Jenkins', 'Openshift', 'Splunk',
    ],
    link: {
      name: 'Visit Website',
      url: WEBSITE_VISA,
    },
  },
  {
    title: 'MatcHub.co',
    logo: LogoMatchub,
    role: 'Software Engineer Intern',
    duration: 'Dec 2020 - Aug 2021',
    modules: [
      'CP3200',
    ],
    skills: [
      'Full-Stack', 'React.js', 'Django', 'AWS',
      'Python', 'JavaScript', 'Netlify', 'Docker',
    ],
    link: {
      name: 'Visit Website',
      url: WEBSITE_MATCHUB,
    },
  },
  {
    title: 'National University of Singapore',
    logo: LogoNUS,
    role: 'Teaching Assistant',
    duration: 'Aug 2020 - Apr 2022',
    modules: [
      'CS1010E',
      'CS1101S',
      'CS2030S',
    ],
    skills: [
      'Java', 'JavaScript', 'Python', 'Vim',
      'Functional Programming', 'OOP',
    ],
    link: {
      name: 'View Teaching Feedback Reports',
      url: TeachingFeedbackReports,
    },
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const renderAcademicExperience = () => (
    <>
      <Slide
        direction="right"
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 2000, exit: 2000 }}
        container={containerRef.current}
      >
        <Typography
          variant="h4"
          sx={{ margin: '1% 0%' }}
        >
          ACADEMIC
        </Typography>
      </Slide>
      <Slide
        direction="right"
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 2000, exit: 2000 }}
        container={containerRef.current}
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {AcademicExperience.map((school) => (
            <Grid item>
              <AcademicPaper school={school} />
            </Grid>
          ))}
        </Grid>
      </Slide>
    </>
  );

  const renderWorkExperience = () => (
    <>
      <Slide
        direction="left"
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 2000, exit: 2000 }}
        container={containerRef.current}
      >
        <Typography
          variant="h4"
          sx={{ margin: '1% 0%' }}
        >
          WORK
        </Typography>
      </Slide>
      <Slide
        direction="left"
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 2000, exit: 2000 }}
        container={containerRef.current}
      >
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {WorkExperience.map((job) => (
            <Grid item>
              <WorkPaper job={job} />
            </Grid>
          ))}
        </Grid>
      </Slide>
    </>
  );

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        setIsVisible(visibility);
      }}
    >
      <Container id="experience" ref={containerRef}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign="justify"
          sx={{ flexBasis: '100%' }}
        >
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Typography
              variant="h2"
            >
              Experience
            </Typography>
          </Slide>
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 2000, exit: 2000 }}
            container={containerRef.current}
          >
            <Typography
              variant="body1"
              sx={{ marginTop: '1%' }}
            >
              Through my academic and working journeys,
              I have learned, excelled and grown significantly.
            </Typography>
          </Slide>
          {renderAcademicExperience()}
          {renderWorkExperience()}
        </Box>
      </Container>
    </VisibilitySensor>
  );
};

export default Experience;
