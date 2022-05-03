import React from 'react';
import {
  Container, Box, Typography, Grid,
} from '@mui/material';
import LogoNUS from 'myAssets/experience/logo_nus.png';
import LogoACJC from 'myAssets/experience/logo_acjc.png';
import LogoMatchub from 'myAssets/experience/logo_matchub.png';
import TranscriptNUS from 'myAssets/experience/transcript_nus.pdf';
import TranscriptACJC from 'myAssets/experience/transcript_acjc.pdf';
import TeachingFeedbackReports from 'myAssets/experience/teaching-feedback-reports.pdf';
import { WEBSITE_MATCHUB } from 'myConstants';
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
      'Java', 'JavaScript', 'Python', 'Vim', 'Functional Programming',
      'Object-Oriented Programming', 'Procedural Programming',
    ],
    link: {
      name: 'View Teaching Feedback Reports',
      url: TeachingFeedbackReports,
    },
  },
];

const Experience = () => {
  const renderAcademicExperience = () => (
    <>
      <Typography
        variant="h3"
        sx={{ margin: '1% 0%' }}
      >
        ACADEMIC
      </Typography>
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
    </>
  );

  const renderWorkExperience = () => (
    <>
      <Typography
        variant="h3"
        sx={{ margin: '1% 0%' }}
      >
        WORK
      </Typography>
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
    </>
  );

  return (
    <Container id="experience">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        textAlign="justify"
        sx={{ flexBasis: '100%' }}
      >
        <Typography
          variant="h2"
        >
          Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: '1%' }}
        >
          Through my academic and working journeys,
          I have learned, excelled and grown significantly.
        </Typography>
        {renderAcademicExperience()}
        {renderWorkExperience()}
      </Box>
    </Container>
  );
};

export default Experience;
