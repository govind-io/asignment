import { Button, Grid, IconButton, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Navbar(){
    return(
        <Grid container>
            <Grid container style={{
                backgroundColor:"black",
                padding:"10px"
            }}>

                <Grid item xs={12} style={{
                    color:"white",
                    display:"flex",
                    flexWrap:"wrap",
                    justifyContent:"right"
                }}>
                    <Typography style={{
                        display:"flex",
                        alignItems:"center",
                        marginRight:"20px",
                        cursor:"pointer"
                    }}>
                   <EmailIcon/><a> info@bytequest.com</a>
                    </Typography>

                    <Typography style={{
                        display:"flex",
                        alignItems:"center",
                        cursor:"pointer"
                    }}>
                   <LocalPhoneIcon/><a>+91 9711999770, +1 5554 5564</a>
                    </Typography>

                </Grid>
                    
              
            </Grid>
            <Grid item xs={12}>
                <Grid container style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                    <Grid item>
                        <IconButton style={{
                            marginLeft:"50px"
                        }}>
                            <img src={'/images/logo.png'} style={{
                            width:"50px",
                            height:"50px",
                            }}/>
                        </IconButton>
                    </Grid>

                    <Grid item style={{
                        display:"flex",
                        alignItems:"center"
                    }}>

                            <Typography style={{
                                marginRight:"20px",
                                cursor:"pointer",
                                color:"purple",
                                fontWeight:"bold"
                            }}>
                                <a>Home</a>
                            </Typography>

                            <Typography style={{
                                marginRight:"20px",
                                cursor:"pointer",
                                fontWeight:"bold"
                            }}>
                                <a>About Us</a>
                            </Typography>

                            <Typography style={{
                                marginRight:"20px",
                                cursor:"pointer",
                                fontWeight:"bold"
                            }}>
                                <a>Services</a>
                            </Typography>

                            <Typography style={{
                                marginRight:"20px",
                                cursor:"pointer",
                                fontWeight:"bold"
                            }}>
                                <a>Products</a>
                            </Typography>

                            <Typography style={{
                                marginRight:"20px",
                                cursor:"pointer",
                                fontWeight:"bold"
                            }}>
                                <a>Portfolio</a>
                            </Typography>

                            <Button style={{
                                backgroundColor:"purple",
                                color:"white",
                                marginRight:"50px",
                                borderRadius:"20px",
                                padding:"10px 20px"
                            }}>
                                Contact Us
                            </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}