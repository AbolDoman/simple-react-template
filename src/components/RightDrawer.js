import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SideBar from "../SideBar";
import MenuIcon from '@mui/icons-material/Menu';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () => {
        setState(prevState => !prevState);
    };
    return (
        <React.Fragment >
            <Button onClick={()=>toggleDrawer()}><MenuIcon /></Button>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={()=>toggleDrawer()}
            >
                <SideBar/>
            </Drawer>
        </React.Fragment>
    );
}
