import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import styles from './NavBar.module.css'
 

function NavBar({a, links}) {
    const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={styles.menu} variant="h6" color="inherit" component="div" onClick={() => navigate(`../${links}`, { replace: true })}>
            {a}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar