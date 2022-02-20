import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'

const useStyles = makeStyles(()=>({
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
    title: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    },
}))

const Banner = () => {

    const classes = useStyles()

  return (
    <div>
        <Container className={classes.bannerContent}>
            <div className={classes.title}>
            <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Chain
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Crypto Info regarding your favorite
          </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
  )
}

export default Banner