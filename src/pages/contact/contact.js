import React from 'react';
import {
  Container, Box, Typography, Link, Button,
} from '@mui/material';
import { LINK_EMAIL } from 'myConstants';

const Contact = () => (
  <Container id="contact">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Typography
        variant="h2"
      >
        Get In Touch!
      </Typography>
      <Typography
        variant="body1"
        sx={{ width: '60%', marginTop: '1%' }}
      >
        Have a potential position or project you&apos;d like to collaborate with?
        Or do you just want to say hi?
        Drop me a message and we&apos;ll go from there!
        I&apos;m always open to new projects and experiences, so I&apos;ll do my best to reply!
      </Typography>
      <Link
        href={LINK_EMAIL}
        target="_blank"
        sx={{ marginTop: '3%' }}
      >
        <Button variant="outlined">
          Say Hi!
        </Button>
      </Link>
      <Typography
        variant="body2"
        sx={{ position: 'absolute', bottom: '-395%' }}
      >
        Developed by Eris Jacey Masagca, 2022
      </Typography>
    </Box>
  </Container>
);

export default Contact;
