import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Button, IconButton,
    makeStyles,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tab,
    Tabs,
    ThemeProvider,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import {lightTheme} from "./Theme";
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'

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
            marginBottom: "3em",
            [theme.breakpoints.down("md")]: {
                marginBottom: "2em"
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: "1.25em"
            }

        },
        logo: {
            height: "8em",
            [theme.breakpoints.down("md")]: {
                height: "7em"
            },
            [theme.breakpoints.down("xs")]: {
                height: "5.5em"
            }
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
        },
        drawerIconContainer: {
            marginLeft: "auto",
        },
        drawerIcon: {
            width: "50px",
            height: "50px"
        },
        drawer: {
            backgroundColor: lightTheme.palette.common.blue
        },
        drawerItem: {
            ...lightTheme.typography.tab,
            color: "white",
            opacity: 0.7
        },
        drawerItemEstimate: {
            backgroundColor: lightTheme.palette.common.orange
        },
        drawerItemSelected: {
            opacity: 1
        }
    })
);

export default function Header(props) {
    const theme = useTheme();
    const classes = useStyles();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOptions = [{name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "Web Site Development", link: "/websites"}]

    const routes = [{name: "Home", link: "/"}, {name: "Services", link: "/services"}, {name: "The Revolution", link: "/revolution"}, {name: "Contact Us", link: "/contact"}]

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setValue(2)
                }
                break;
            case "/about":
                if (value !== 3) {
                    setValue(3)
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4)
                }
                break;
            case "/estimate":
                if (value !== 5) {
                    setValue(5)
                }
                break;
            default:
                break;
        }
    }, [value, selectedIndex]);

    const tabs = (
        <React.Fragment>
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
                  open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{onMouseLeave: handleClose}}
                  classes={{paper: classes.menu}}
                  elevation={0}>
                {menuOptions.map((option, i) => (
                    <MenuItem key={option}
                              component={Link}
                              to={option.link}
                              classes={{root: classes.menuItem}}
                              onClick={(event) => {
                                  handleMenuItemClick(event, i);
                                  setValue(1);
                                  handleClose()
                              }}
                              selected={i === selectedIndex && value === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)}
                             classes={{paper: classes.drawer}}>
                <List disablePadding>
                    <ListItem selected={value === 0}
                              onClick={() => {setOpenDrawer(false); setValue(0)}}
                              divider
                              button
                              component={Link} to="/">
                        <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 1}
                              onClick={() => {setOpenDrawer(false); setValue(1)}}
                              divider
                              button
                              component={Link}
                              to="/services">
                        <ListItemText className={value === 1 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 2}
                              onClick={() => {setOpenDrawer(false); setValue(2)}}
                              divider
                              button
                              component={Link}
                              to="/revolution">
                        <ListItemText className={value === 2 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 3}
                              onClick={() => {setOpenDrawer(false); setValue(3)}}
                              divider
                              button
                              component={Link}
                              to="/about">
                        <ListItemText className={value === 3 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>About us</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 4}
                              onClick={() => {setOpenDrawer(false); setValue(4)}}
                              divider
                              button
                              component={Link}
                              to="/contact">
                        <ListItemText className={value === 4 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 5}
                              className={classes.drawerItemEstimate}
                              onClick={() => {setOpenDrawer(false); setValue(5)}}
                              divider
                              button
                              component={Link}
                              to="/estimate">
                        <ListItemText className={value === 5 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <ThemeProvider theme={lightTheme}>
            <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={handleChange}
                                disableRipple>
                            <img alt="company logo" src={logo} className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </ThemeProvider>
    );
}