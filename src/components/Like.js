import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';

export default function Like({ like }) {
  // const state = useSelector((state) => state);
  console.log('state');
  // const [test, setTest] = React.useState({ liked: like[0], total: like[1] });
  // console.log(`state.cardsReducers`, state.cardsReducers.cards);
  // console.log(`like`, like);
  // const changeLikeFunc = (like) => {
  //   let obj = {};
  //   if (like[0]) {
  //     obj.liked = false;
  //     obj.total = like[1] - 1;
  //   } else {
  //     obj.liked = true;
  //     obj.total = like[1] + 1;
  //   }
  //   return obj;
  // };
  return (
    <div
      onClick={() => {
        // setTest(changeLikeFunc);
      }}
    >
      {like.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      {like.total ? like.total : null}
    </div>
  );
}
