import React from 'react'
import Drawer from '@mui/material/Drawer';

const SideMenu = (props) => {
  return (
    <Drawer anchor='left' open={props.drawerState} onClose={() => {props.setDrawerState(false)}}>
        <p>Something</p>
    </Drawer>
  )
}

export default SideMenu