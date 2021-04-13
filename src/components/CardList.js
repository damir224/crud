import React, { useEffect } from 'react';
import { makeStyles, Container, Card, Typography } from '@material-ui/core/';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SimpleCard from './SimpleCard';
import { getCardsSagaAC } from '../store/cards/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 1100,
  },
  add: {
    width: 300,
    height: 300,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CardList() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state);
  const [cardListArr, setCardListArr] = React.useState([]);
  useEffect(() => {
    dispatch(getCardsSagaAC(state.userReducers.user.token));
  }, [dispatch, state.userReducers.user.token]);
  useEffect(() => {
    setCardListArr(state.cardsReducers.cards);
  }, [state.cardsReducers.cards]);

  return (
    <>
      {cardListArr.length !== 0 && (
        <Typography variant='h2' align='center'>
          Card List
        </Typography>
      )}
      <Container className={classes.root}>
        {state.userReducers.user.role === 'admin' ? (
          <Card
            className={classes.add}
            style={{
              borderStyle: 'dashed',
              borderRadius: 4,
              borderWidth: 1,
            }}
          >
            <Link
              to='/create'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div style={{ display: 'flex' }}>
                <AddBoxIcon fontSize='large' />
              </div>
            </Link>
          </Card>
        ) : null}
        {cardListArr.length && state.userReducers.user.isAuth ? (
          cardListArr.map((e) => {
            return <SimpleCard key={e.id} card={e} />;
          })
        ) : (
          <Typography variant='h4'>
            Sorry! You need to be logged in to access this page.
          </Typography>
        )}
      </Container>
    </>
  );
}
