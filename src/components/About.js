import React from 'react'
import {Avatar, Grid, makeStyles, Typography, useTheme, useMediaQuery, Hidden} from "@material-ui/core";
import pen from '../assets/history.svg'
import profile from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    typo: {
        ...theme.typography.h2
    }, missionStatement: {
        ...theme.typography.h2,
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    }, typo1: {
        ...theme.typography.h4
    }, typo2: {
        ...theme.typography.subtitle1
    }, sub2: {
        ...theme.typography.subtitle2
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, body1: {
        fontSize: "1.25rem", color: theme.palette.third.main, fontWeight: "300"
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300,
            maxWidth: 300
        }
    },
    caption: {
        ...theme.typography.caption
    }
}))

export default function About(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography align={matchesMD ? "center" : undefined} className={classes.typo}>About Us</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests,
                    technology is meant to bring us closer to what we care about in the best way possible. Arc
                    Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to
                    the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid item container style={{marginTop:"10em", marginBottom:"10em"}} className={classes.rowContainer} direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-around">
                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.typo1} gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph
                                        style={{fontWeight: 700, fontStyle: "italic"}}>
                                We're the new kid on the block.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                            <Typography className={classes.body1} paragraph>
                                It all started with one question: Why aren’t all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers,
                                educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                                software
                                engineering and computing power, compounded by the proliferation of smart phones, has
                                opened
                                up infinite worlds of possibility. Things that have always been done by hand can now be
                                done
                                digitally and automatically, and completely new methods of interaction are created
                                daily.
                                Taking full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                                All this change can be a lot to keep up with, and that’s where we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={pen} alt="quill pen sitting on top of book" style={{maxHeight: matchesMD ? 200 : '22em'}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" style={{marginBottom:"15em"}} className={classes.rowContainer} alignItems="center">
                <Grid item>
                    <Typography className={classes.typo1} align="center" gutterBottom>Team</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.body1} paragraph align="center">Zachary Reece, Founder</Typography>
                    <Typography className={classes.body1} paragraph align="center">I started coding when I was 9 years
                        old.</Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar}/>
                </Grid>
                <Grid item container justify={matchesMD ? "center" : undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                            <Typography className={classes.body1} align="center" paragraph>
                                I taught myself basic coding from a library book in third grade, and ever since then my
                                passion has solely been set on learning — learning about computers, learning mathematics and
                                philosophy, studying design, always just learning.
                            </Typography>
                            <Typography className={classes.body1} align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have
                                developed. I'm currently teaching a course about building responsive modern user interfaces
                                on Udemy.com as well as beginning work on my first machine learning mobile application.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container alignItems={matchesMD ? "center" : undefined} direction="column" lg style={{marginBottom: matchesMD ? "2.5em" : 0}}>
                        <Grid item>
                            <img src={yearbook} alt="yearbook page about founder" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.caption}>a page from my Sophomore yearbook</Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                            <Typography className={classes.body1} align="center" paragraph>
                                I taught myself basic coding from a library book in third grade, and ever since then my
                                passion has solely been set on learning — learning about computers, learning mathematics and
                                philosophy, studying design, always just learning.
                            </Typography>
                            <Typography className={classes.body1} align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have
                                developed. I'm currently teaching a course about building responsive modern user interfaces
                                on Udemy.com as well as beginning work on my first machine learning mobile application.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : "flex-end"} lg >
                        <Grid item>
                            <img src={puppy} alt="dog" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.caption}>my miniature dapple dachshund, Sterling</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}