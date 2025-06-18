import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {Link} from 'react-router-dom'
function Menu1()  {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div
            style={{
                marginLeft: "40%",
            }}>

            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                Open Menu 
            </Button> 
             <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClose}>
                    My Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/">Log out</Link>
                </MenuItem>
            </Menu>


        </div>
    );
};

export default Menu1;