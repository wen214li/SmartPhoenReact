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

function preventDefault(event) {
  event.preventDefault();
}

export const mainListItems = (
  <div>
    <Link to='/overview' className='text-link'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
    </Link>

    <Link to='/ios' className='text-link'>
      <ListItem button>
        <ListItemIcon>
          <AppleIcon />
        </ListItemIcon>
        <ListItemText primary="IOS" />
      </ListItem>
    </Link>
    
    <Link to='/android' className='text-link'>
      <ListItem button>
        <ListItemIcon>
          <AndroidIcon />
        </ListItemIcon>
        <ListItemText primary="Android" />
      </ListItem>
    </Link>
    
    <Link to='/report' className='text-link'>
      <ListItem button>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Link>

    <Link to='/placeholder' className='text-link'>
      <ListItem button>
        <ListItemIcon>
          <CropLandscapeIcon />
        </ListItemIcon>
        <ListItemText primary="Placeholder" />
      </ListItem>
    </Link>
  </div>

);
