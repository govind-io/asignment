import { Grid, Typography } from "@mui/material"
import ServiceCard from "./ServiceCard"

export default function ServiceSection(){
    return (
        <>
        <Grid container style={{
            marginTop:"50px"
        }}>
        <Typography style={{
            textAlign:"center",
            width:"100vw"
        }}>
            Lorem ipsum dolor
        </Typography>
        <Typography style={{
            textAlign:"center",
            width:"100vw",
            fontSize:"25px",
            fontWeight:"bold"
        }}>
            Services
        </Typography>
    </Grid>

    <div style={{
        width:"100%",
        margin:"0px",
        padding:"0px",
        marginTop:"50px",
        display:"flex",
        justifyContent:"space-around",
        marginBottom:"100px"
    }}>
        <ServiceCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} title={"Website Design and Development"}/>
        <ServiceCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} title={"On Demand Devs"}/>
        <ServiceCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} title={"Webhosting"}/>
        <ServiceCard desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} title={"Webhosting"}/>
    </div>
        </>
    )
}