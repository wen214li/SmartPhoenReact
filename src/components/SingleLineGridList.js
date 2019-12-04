import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    width: 100,
    height: 100,
  },
  gridList: {
    flexWrap: 'nowrap',
    width: 1200,
    height: 400,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();
  const tileData = props.data
  return (
    <React.Fragment>
        <Title>Top 10 Best Seller Models</Title>
        <GridList className={classes.gridList} cols={4} spacing={10}>
            {tileData.map(tile => (
            <GridListTile key={tile.img} rows={1.6}>>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.rank + '.' + tile.title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton 
                        aria-label={`star ${tile.title}`}
                        href="https://www.apple.com"
                    >
                    <PageviewIcon className={classes.title} />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
        </React.Fragment>
  );
}