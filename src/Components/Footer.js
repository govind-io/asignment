import { Button, Grid, IconButton, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Grid container style={{
            marginTop: "100px"
        }}>
            <Grid container style={{
                padding: "50px",
                backgroundColor: "#00a9b1"
            }}>
                <Grid item xs={6}>
                    <Typography variant="h3" style={{
                        color: "white"
                    }}>Lets Discuss</Typography>
                    <Typography style={{
                        color: "white",
                        marginTop: "20px"
                    }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illum dolorum et, tenetur nam aut deserunt voluptatem molestias!</Typography>
                </Grid>
                <Grid item xs={6} style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "50px",
                    position: "relative"
                }}>
                    <input style={{
                        width: "90%",
                        padding: "20px 130px 20px 30px",
                        borderRadius: "40px",
                    }}></input>
                    <Button style={{
                        backgroundColor: "purple",
                        color: "white",
                        fontSize: "13px",
                        padding: "10px 20px",
                        width: "100px",
                        position: "absolute",
                        right: "12%",
                        borderRadius: "25px"
                    }}>Sign Up</Button>
                </Grid>
            </Grid>

            <Grid container style={{
                width: "90%",
                margin: "auto",
                padding: "50px 0px"
            }}>

                <Grid item xs={3}>
                    <Grid container>
                        <Grid item>
                            <IconButton>
                                <img src={"./images/logo.png"} style={{
                                    width: "100px"
                                }} />
                            </IconButton>
                        </Grid>

                        <Grid item style={{
                            marginTop: "20px"
                        }}>
                            <Typography style={{
                                lineHeight: "30px"
                            }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi distinctio quae nesciunt quod.
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={3} style={{
                    padding: "0px 50px"
                }}>
                    <Typography  style={{
                        fontSize:"20px",
                        fontWeight:"bold"
                    }}>
                        Links
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Our Clients
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Privacy Policy
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Our Benefits
                       
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{
                    padding: "0px 50px"
                }}>
                    <Typography  style={{
                        fontSize:"20px",
                        fontWeight:"bold"
                    }}>
                        Information
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Our Clients
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Privacy Policy
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       Our Benefits
                       
                    </Typography>
                </Grid>

                <Grid item xs={3} style={{
                    padding: "0px 50px"
                }}>
                    <Typography  style={{
                        fontSize:"20px",
                        fontWeight:"bold"
                    }}>
                        Contact Us
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       +91 989958318, +1 45456 45665
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       info@bytequest.com
                    </Typography>

                    <Typography style={{
                        fontSize:"18px",
                        fontWeight:"500",
                        color:"grey",
                        marginTop:"30px",
                        cursor:"pointer"
                    }}>
                       B4, Block A, Sector 4,Noida Up,201301
                    </Typography>
                </Grid>
            </Grid>

            <hr style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "black",
                width: "100%"
            }} />
            <Grid item xs={12}>
                <Typography variant="h6" textAlign="center" style={{
                    color: "grey",
                    fontSize: "18px"
                }}>
                    Copyright 2021 ByteQuest Software Private Limited. ALl Rights Reserved
                </Typography>
            </Grid>
        </Grid>
    )
}