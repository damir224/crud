import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeCardSagaAC } from '../store/cards/actions.js';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default function SimpleCard({
  card: { id, title, content, liked, total_likes },
}) {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const token = state.userReducers.user.token;
  const dispatch = useDispatch();

  return (
    <Card
      className={classes.root}
      style={{
        border: 10,
        borderStyle: 'solid',
        borderRadius: 1,
        borderWidth: 1,
      }}
    >
      <CardContent>
        <Typography variant='h6' component='h5'>
          {title}
        </Typography>
        <Typography variant='body2' component='p' style={{ marginTop: '1em' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        {state.userReducers.user.role === 'admin' ? (
          <Link to={`/info/${id}`}>
            <Button size='small'>
              <EditIcon />
            </Button>
          </Link>
        ) : null}
        <Button
          size='small'
          onClick={() => {
            dispatch(likeCardSagaAC({ id, token }));
          }}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          {total_likes ? total_likes : null}
        </Button>
      </CardActions>
    </Card>
  );
}
