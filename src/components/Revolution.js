import React from 'react'
import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Lottie from "react-lottie";

import vision from '../assets/vision.svg'
import technologyAnimation from '../animations/technologyAnimation/data.json'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    typo1: {
        ...theme.typography.h4
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, body1: {
        fontSize: "1.25rem", color: theme.palette.third.main, fontWeight: "300"
    }, rev: {
        ...theme.typography.revolution
    }
}))

export default function Revolution(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true, autoplay: false, animationData: technologyAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Grid container direction="column">
        <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
            <Typography align={matchesMD ? "center" : undefined} className={classes.rev}>
                The Revolution
            </Typography>
        </Grid>
        <Grid className={classes.rowContainer} item container direction={matchesMD ? "column" : "row"}
              alignItems="center" style={{marginTop: "5em"}}>
            <Grid item lg>
                <img src={vision} alt="mountain through binoculars" style={{
                    maxWidth: matchesSM ? 300 : "40em",
                    marginRight: matchesMD ? 0 : "5em",
                    marginBottom: matchesMD ? "5em" : 0
                }}/>
            </Grid>
            <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.typo1}
                                gutterBottom>Vision</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.body1} paragraph>
                        The rise of computers, and subsequently the Internet, has completely altered every aspect of
                        human life. This has increased our comfort, broadened our connections, and reshaped how we
                        view the world.
                    </Typography>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.body1} paragraph>
                        What once was confined to huge rooms and teams of engineers now resides in every single one
                        of our hands. Harnessing this unlimited potential by using it to solve problems and better
                        lives is at the heart of everything we do.
                    </Typography>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.body1} paragraph>
                        We want to help businesses capitalize on the latest and greatest technology. The best way to
                        predict the future is to be the one building it, and we want to help guide the world into
                        this next chapter of technological expansion, exploration, and innovation.
                    </Typography>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.body1} paragraph>
                        By holding ourselves to rigorous standards and pristine quality, we can ensure you have the
                        absolute best tools necessary to thrive in this new frontier.
                    </Typography>
                    <Typography align={matchesMD ? "center" : "right"} className={classes.body1} paragraph>
                        We see a future where every individual has personalized software custom tailored to their
                        lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a
                        step towards that goal.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid className={classes.rowContainer} item container direction={matchesMD ? "column" : "row"}
              alignItems="center" style={{marginTop: "10em", marginBottom: "10em"}}>
            <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.typo1}
                                gutterBottom>Technology</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        In 2013, Facebook invented a new way of building websites. This new system, React.js,
                        completely revolutionizes the process and practice of website development.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        Instead of chaining together long individual pages, like traditional websites, React
                        websites are built with little chunks of code called components. These components are
                        faster, easier to maintain, and are easily reused and customized, each serving a singular
                        purpose.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        Two years later they shocked the world by releasing a similar system, React Native, for
                        producing iOS and Android apps. Instead of having to master two completely separate
                        development platforms, you can leverage the knowledge you already possessed from building
                        websites and reapply it directly! This was a huge leap forward.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest,
                        Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even
                        rebuilt using React.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        Developers have since built on top of these systems by automating project setup and
                        deployment, allowing creators to focus as much as possible on their work itself.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        These technical advancements translate into savings by significantly reducing the workload
                        and streamlining the workflow for developing new pieces of software, while also lowering the
                        barrier to entry for mobile app development.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        This puts personalization in your pocket — faster, better, and more affordable than ever
                        before.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg container justify={matchesMD ? "center" : "flex-end"}>
                <Lottie options={defaultOptions} style={{maxWidth: "40em", margin: 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} justify="center" className={classes.rowContainer}>
            <Grid item>
                <Typography className={classes.typo1} gutterBottom>Process</Typography>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#B3B3B3", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Consultation</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Our process begins the moment you realize you need a piece of technology for your business.
                        Whether you already have an idea for where to start and what to do, or if you just know you
                        want to step things up, our initial consultation will help you examine your business
                        holistically to find the best solutions.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Detailed notes will be taken on your requirements and constraints, while taking care to
                        identify other potential areas for consideration.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Cutting-edge advancements in machine learning like object detection and natural language
                        processing allow computers to do things previously unimaginable, and our expertise and
                        intuition will help usher you into this new future of possibilities.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={consultation} alt="handshake" width="100%" style={{maxWidth: 700}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#FF7373", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Mockup</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        After we settle on the best path forward and decide on a solution to pursue, details like the
                        cost and timeline will be finalized.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a
                        mockup, which doesn’t include colors, images, or any other polished design elements, but
                        captures the essential layout structure and functionality.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        This helps us understand and refine the solution itself before getting distracted by specifics
                        and looks.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={mockup} alt="basic website design outline" width="100%" style={{maxWidth: 1000, marginTop: matchesMD ? (matchesSM ? "6em" : "3em") : 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#39B54A", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Review</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Before moving any farther we come back to you with our progress. This gives you the freedom to
                        discuss any changes you may want or any ideas you may have come up with before any heavy lifting
                        has been done.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        We give you an interactive demonstration of the mockups, thoroughly explaining the thought
                        process that went into each screen and every anticipated feature.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Once you’re completely satisfied with the vision for our solution we get down to the nitty
                        gritty, fine-details of design.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img style={{maxWidth: 800, marginTop: matchesMD ? (matchesSM ? "6em" : "3em") : 0}} src={review} width="100%" alt="magnifying glass"/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#A67C52", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Design</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Using the mockups and notes taken during the consultation as guides, we will start ironing out
                        what the final product will look like. This also involves using any brand material like fonts,
                        colors, and logos to extend the experience you’re already familiar with.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        No aspect is superfluous, and care will be taken with every decision.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={design} width="100%" alt="paintbrush leaving stroke of paint" style={{maxWidth: 1000, marginTop: matchesMD ? (matchesSM ? "6em" : "3em") : 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#39B54A", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Review</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        A second round of review is essential to our goal of creating exactly what you want, exactly how
                        you want it.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        This time we’ll be going over the finalized designs in another fully interactive demonstration.
                        Again this gives you an opportunity to tweak things and make sure we get everything right the
                        first time.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={review} style={{maxWidth: 800, marginTop: matchesMD ? (matchesSM ? "6em" : "3em") : 0}} width="100%" alt="magnifying glass"/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#FBB03B", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Build</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Here’s where we get down to business.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Engineering begins after your approval on the final designs. We start by scaffolding out the
                        project on a high level, prioritizing some areas over others.', 'Each area is then developed in
                        order of importance until ready to be connected to the next piece.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Typically the backend, behind the scenes operations are completed first. Once all the services
                        are in place we can then create the front end, user side of things.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Finishing the application doesn’t mean we’re done though, because we use extensive testing to
                        guarantee compatibility with all intended devices.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Only after our rigorous examinations will we accept a product as finished, then pushing it
                        through the production pipeline. This produces an optimized, compressed, consumer version of the
                        code and assets ready for deployment.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={build} alt="building construction site" width="100%"
                     style={{maxWidth: matchesMD ? 700 : 1000, marginTop: matchesMD ? (matchesSM ? "3em" : "1.5em") : 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#C1272D", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Launch</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        The moment we’ve all been waiting for.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        When construction comes to a close you’re the first one to know. We’ll give our final
                        demonstration to show off your shiny new software in the wild so you know exactly how it will
                        look to your users.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined } style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        When you say the word, we press the button and launch your project out to the public. We’re
                        there to ensure everything goes to plan so you can start reaping the rewards of your
                        technological investment immediately.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={launch} alt="rocket" width= {matchesXS ? "95%" : "100%"} style={{maxWidth: 200, marginTop: matchesSM ? "1.75em" : 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer}
              style={{backgroundColor: "#8E45CE", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Maintain</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Our work doesn’t end there.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        After a successful launch we keep in close contact to listen to feedback and hear how the
                        project is being received.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        From there on out we make sure your application is kept up to date and taking advantage of the
                        best features and practices available. When new developments arise or new techniques are
                        discovered in future projects, we will implement those advancements in your project as part of
                        our routine maintenance.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={maintain} width="100%" alt="wrench tightening bolts" style={{maxWidth: 500, marginTop: matchesMD ? "3em" : 0}}/>
            </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? "column" : undefined} className={classes.rowContainer}
              style={{backgroundColor: "#29ABE2", height: "90em"}}>
            <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#000", marginTop: "5em"}}
                                className={classes.typo1}
                                gutterBottom>Iterate</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        The cycle repeats whenever you come up with a new idea for extending your current project, or
                        come up with a brand new system entirely.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        By planning for future features and changes we can build and evolve your application over time.
                        As new use cases and customer needs develop we can respond with continuous integration of new
                        content.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} style={{color: "#FFF", maxWidth: "20em"}}
                                className={classes.body1} paragraph>
                        Our iterative process will keep you current and competitive, allowing you to quickly implement
                        changes instead of waiting months for a single update.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg style={{alignSelf: "center"}}>
                <img src={iterate} width="100%" alt="falling dominos" style={{marginTop: matchesMD ? "3em" : 0}}/>
            </Grid>
        </Grid>
        <Grid item>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    </Grid>)
}