import React from 'react'
import Drawer from '@mui/material/Drawer';
import { CiCoffeeBean } from 'react-icons/ci';

const SideMenu = (props) => {
  return (
    <Drawer anchor='left' open={props.drawerState} onClose={() => {props.setDrawerState(false)}}>
        <div id='sideMenu'>
            <h1><CiCoffeeBean size='35px'/>Menu</h1>
            <div>
                <h3>Some option</h3>
                <h3>Some option</h3>
                <h3>Some option</h3>
            </div>
        </div>
    </Drawer>
  )
}

export default SideMenu