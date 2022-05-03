import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Button,
    makeStyles,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    ThemeProvider,
    Toolbar,
    useScrollTrigger
} from "@material-ui/core";
import {lightTheme} from "./Theme";
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


const useStyles = makeStyles(theme => ({

        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "3em"
        },
        logo: {
            height: "8em"
        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        tabContainer: {
            marginLeft: 'auto'
        },
        tab: {
            ...lightTheme.typography.tab,
            minWidth: 10,
            marginLeft: "25px",
        },
        button: {
            ...lightTheme.typography.estimate,
            borderRadius: "50px",
            marginLeft: "50px",
            marginRight: "25px",
            height: "45px",
        },
        menu: {
            backgroundColor: lightTheme.palette.common.blue,
            color: "white",
            borderRadius: "0px"
        },
        menuItem: {
            ...lightTheme.typography.tab,
            opacity: 0.7,
            "&:hover": {
                opacity: 1
            }
        }
    })
);

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    const menuOptions = [{name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "Web Site Development", link: "/websites"}]


    useEffect(() => {

        switch (window.location.pathname) {
            case "/":
                if (value !== 0){
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1){
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1){
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if (value !== 1){
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (value !== 1){
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;
            case "/revolution":
                if (value !== 2){
                    setValue(2)
                }
                break;
            case "/about":
                if (value !== 3){
                    setValue(3)
                }
                break;
            case "/contact":
                if (value !== 4){
                    setValue(4)
                }
                break;
            case "/estimate":
                if (value !== 5){
                    setValue(5)
                }
                break;
            default:
                break;
        }
    }, [value, selectedIndex]);

    return (
        <ThemeProvider theme={lightTheme}>
            <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={handleChange}
                                disableRipple>
                            <img alt="company logo" src={logo} className={classes.logo}/>
                        </Button>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabContainer}
                            indicatorColor="primary">
                            <Tab className={classes.tab}
                                 component={Link}
                                 to="/"
                                 label="Home"/>
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
                                 aria-haspopup={anchorEl ? "true" : undefined}
                                 onMouseOver={event => handleClick(event)}
                                 className={classes.tab}
                                 component={Link}
                                 to="/services"
                                 label="Services"/>
                            <Tab className={classes.tab}
                                 component={Link}
                                 to="/revolution"
                                 label="The Revolution"/>
                            <Tab className={classes.tab}
                                 component={Link}
                                 to="/about"
                                 label="About us"/>
                            <Tab className={classes.tab}
                                 component={Link}
                                 to="/contact"
                                 label="Contact us"/>
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Free Estimate
                        </Button>
                        <Menu id="simple-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{onMouseLeave: handleClose}}
                              classes={{paper: classes.menu}}
                              elevation={0}>
                            {menuOptions.map((option, i) => (
                                <MenuItem key={option}
                                          component={Link}
                                          to={option.link}
                                          classes={{root: classes.menuItem}}
                                          onClick={(event) => {handleMenuItemClick(event, i); setValue(1); handleClose()}}
                                          selected={i === selectedIndex && value === 1}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </ThemeProvider>
    );
}