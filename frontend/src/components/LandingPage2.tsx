import "./LandingPage2.css"
import image from '../images/kevin3.jpg';
import { Typography, Stack, Button } from '@mui/material'


const title = "[your name here]"
const description = "We use AI to generate your own personal portfolio."
const linkText = "Try for free"

function LandingPage2() {
    return (
        <div className="full bgImg" style={{ 
            backgroundImage: `url(${image})`,
          }}>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            spacing={5}
            marginRight={10}
            >
            <Typography  variant="h1" className='text'>
                Personal Space
            </Typography>
            <Typography  variant="h2" className='text'>
                We use AI to generate your personal portfolio
            </Typography>
            <a href="/form">
                <Button variant="contained" className="button">See more</Button>
            </a>

            </Stack>            
        </div> 
    );
}

export default LandingPage2;