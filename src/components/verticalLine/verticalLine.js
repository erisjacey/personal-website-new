import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  verticalLine: {
    borderLeft: '1px solid black',
    height: '60px',
    margin: '9% 0%',
  },
}));

const VerticalLine = () => {
  const classes = useStyles();

  return (
    <div className={classes.verticalLine} />
  );
};

export default VerticalLine;
