import React, {useState} from "react";
import {Button, Grid, makeStyles, TextField, Typography, useMediaQuery, useTheme} from "@material-ui/core"
import {Link} from "react-router-dom"
import background from "../assets/background.jpg";
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import ButtonArrow from "./ui/ButtonArrow";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import mobileBackground from '../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    typo1: {
        ...theme.typography.h4
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, body1: {
        fontSize: "1.25rem", color: theme.palette.third.main, fontWeight: "300"
    },
    background: {
        paddingBottom:"10em",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    typo: {
        ...theme.typography.h2
    },
    typo2: {
        ...theme.typography.subtitle1
    },
    sub2: {
        ...theme.typography.subtitle2
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2%",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em",
        ...theme.typography.subtitle1
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    revolutionText: {
        ...theme.typography.h3
    },
    informationBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop:"5em",
        borderRadius: 5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width:245,
        fontSize:"1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    return (
        <Grid item container direction="row">
            <Grid item container direction="column" alignItems="center" justify="center" lg={4} xl={3} style={{marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.typo1} style={{lineHeight: 1}}>Contact Us</Typography>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.body1} style={{color: theme.palette.common.blue}}>We're
                                waiting.</Typography>
                        </Grid>
                        <Grid item container style={{marginTop:"2em"}}>
                            <Grid item>
                                <img style={{marginRight: "0.5em"}} src={phoneIcon} alt="phone"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.body1}
                                            style={{color: theme.palette.common.blue, fontSize: "1rem"}}>(555)
                                    555-5555</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}}>
                            <Grid item>
                                <img style={{marginRight: "0.5em", verticalAlign: "bottom"}} src={emailIcon} alt="envelope"/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.body1} style={{
                                    color: theme.palette.common.blue,
                                    fontSize: "1rem"
                                }}>zachary@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{maxWidth:"20em"}}>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField error helperText="Please enter a name" fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField fullWidth label="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                            </Grid>
                            <Grid item style={{marginBottom:"0.5em"}}>
                                <TextField fullWidth label="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></TextField>
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth:"20em"}}>
                            <TextField fullWidth InputProps={{disableUnderline: true}} className={classes.message} multiline rows={10} value={message} id="message" onChange={(e) => setMessage(e.target.value)}></TextField>
                        </Grid>
                        <Grid item container justify="center" style={{marginTop:"2em"}}>
                            <Button className={classes.sendButton} variant="contained">Send Message <img style={{marginLeft:"1em"}} src={airplane} alt="paper airplane"/></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justify={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} className={classes.background} alignItems="center" lg={8} xl={9}>
                <Grid item style={{marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2">Simple Software. <br/> Revolutionary
                                Results.</Typography>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.sub2} style={{fontSize: "1.5rem"}}>Take advantage of the 21st
                                Century.</Typography>
                            <Grid container justify={matchesMD ? "center" : undefined} item>
                                <Button onClick={() => props.setValue(2)} component={Link} to="/revolution"
                                        variant="outlined" className={classes.learnButton}>
                                    <span style={{marginRight: 5}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} variant="contained"
                            className={classes.estimateButton}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}