import React from 'react'
import Drawer from '@mui/material/Drawer';
import { CiCoffeeBean } from 'react-icons/ci';

const SideMenu = (props) => {
  return (
    <Drawer anchor='left' open={props.drawerState} onClose={() => {props.setDrawerState(false)}}>
        <div id='sideMenu'>
            <h1><CiCoffeeBean size='35px'/>Menu</h1>
        </div>
    </Drawer>
  )
}

export default SideMenu