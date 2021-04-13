import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Like({ like }) {
  return (
    <>
      {like.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      {like.total_likes ? like.total_likes : null}
    </>
  );
}
