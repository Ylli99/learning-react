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

    const menuOptions = [{name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Web Site Development", link: "/websites", activeIndex: 1, selectedIndex: 3}]

    const routes = [{name: "Home", link: "/", activeIndex: 0},
        {name: "Services", link: "/services", activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event)},
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4}]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, selectedIndex, menuOptions, routes]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor="primary"
            >
                {routes.map((route, index) => (
                    <Tab className={classes.tab}
                         component={Link}
                         to={route.link}
                         label={route.name}
                         aria-owns={route.ariaOwns}
                         aria-haspopup={route.ariaPopup}
                         onMouseOver={route.mouseOver}
                         key={`${route}${index}`}/>
                ))}
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
                  elevation={0}
                  keepMounted>
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
                    {routes.map(route => (
                        <ListItem divider
                                  button
                                  component={Link}
                                  to={route.link}
                                  selected={value === route.activeIndex}
                                  key={`${route}${route.activeIndex}`}
                                  onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}>
                            <ListItemText className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
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