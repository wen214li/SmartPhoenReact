import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
import Title from './Title';
import tileData from './tileData.js';

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

export default function SingleLineGridList() {
  const classes = useStyles();
//   const tileData = [
//     {
//         img: iphone_xr,
//         title: 'iphone XR',
//         rank: 1,
//         url: "https://www.apple.com"
//     },
//     {
//         img: samsung_image,
//         title: 'Samsung',
//         rank: 2,
//     },
//     {
//         img: iphone_xr,
//         title: 'iphone XR',
//         rank: 3,
//         url: "https://www.apple.com"
//     },
//     {
//         img: xiaomi,
//         title: 'Xiaomi',
//         rank:4,
//         url: "https://www.apple.com"
//     },
//     {
//         img: xiaomi,
//         title: 'Xiaomi',
//         rank:5,
//         url: "https://www.apple.com"
//     },
//     {
//         img: xiaomi,
//         title: 'Xiaomi',
//         rank:6,
//         url: "https://www.apple.com"
//     },
//     {
//         img: xiaomi,
//         title: 'Xiaomi',
//         rank:7,
//         url: "https://www.apple.com"
//     },
//     {
//         img: xiaomi,
//         title: 'Xiaomi',
//         rank:8,
//         url: "https://www.apple.com"
//     },
//   ];

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