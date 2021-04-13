import { makeStyles } from '@material-ui/core/';

export const useStylesNavBar = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  pos: {
    display: 'flex',
    justifyItems: 'center',
    position: 'static'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const useStylesCardList = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 1100
  },
  add: {
    width: 300,
    height: 300,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const useStylesSumpleCard = makeStyles({
  root: {
    width: 300,
    height: 300,
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});
