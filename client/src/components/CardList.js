import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './SimpleCard';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 700,
  },
  add: {
    minWidth: 200,
    maxWidth: 200,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CardList() {
  const classes = useStyles();
  const a = [
    {
      title: 'Title',
      body:
        'a lot of text a lot of text a lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of text a lot of text a lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of text a lot of text a lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
    {
      title: 'Title',
      body:
        'a lot of texta lot of texta lot of texta lot of texta lot of texta lot',
    },
  ];

  return (
    <>
      <Typography variant='h2' align='center'>
        Card List
      </Typography>
      <Container className={classes.root}>
        <Card className={classes.add}>
          <AddBoxIcon />
        </Card>
        {a.map((e, i) => {
          return <SimpleCard key={i} cart={e} />;
        })}
      </Container>
    </>
  );
}
