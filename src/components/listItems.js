import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AndroidIcon from '@material-ui/icons/Android';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppleIcon from '@material-ui/icons/Apple';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import {Link} from "react-router-dom";


export default function MyListItems() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return(
    <div>
      <Link to='/overview' className='text-link'>
        <ListItem button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
      </Link>

      <Link to='/ios' className='text-link'>
        <ListItem button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}>
          <ListItemIcon>
            <AppleIcon />
          </ListItemIcon>
          <ListItemText primary="IOS" />
        </ListItem>
      </Link>
      
      <Link to='/android' className='text-link'>
        <ListItem button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}>
          <ListItemIcon>
            <AndroidIcon />
          </ListItemIcon>
          <ListItemText primary="Android" />
        </ListItem>
      </Link>
      
      <Link to='/report' className='text-link'>
        <ListItem button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}>
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </Link>

      <Link to='/placeholder' className='text-link'>
        <ListItem button
          selected={selectedIndex === 4}
          onClick={event => handleListItemClick(event, 4)}>
          <ListItemIcon>
            <CropLandscapeIcon />
          </ListItemIcon>
          <ListItemText primary="Placeholder" />
        </ListItem>
      </Link>
    </div>
  );
}

