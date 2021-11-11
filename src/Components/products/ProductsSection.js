import { Grid, Typography } from "@mui/material";
import ProductCard from "././ProductCard";

export default function ProductsSection(){
    return(
        <>
        <Grid container style={{
            marginTop:"20px"
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
            Products
        </Typography>
    </Grid>

    <div style={{
        width:"100%",
        margin:"0px",
        padding:"0px",
        marginTop:"50px",
        display:"flex",
        justifyContent:"space-around"
    }}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
    </>
    )
}