import { Button, Typography } from "@mui/material";

export default function ServiceCard(props){
    const {title,desc,}=props
    return(
        <>
        <div style={{
            width:"20%",
        }}>
            <div style={{
                width:"100%",
                height:"300px",
                backgroundColor:"grey"
            }}>

            </div>
            <div>

                <Typography variant="h3" style={{
                    textAlign:"center",
                    width:"100%",
                    fontSize:"30px",
                    marginTop:"10px",
                    height:"70px"
                }}>
                    {title}
                </Typography>

                <Typography style={{
                    textAlign:"center",
                    width:"100%",
                    fontSize:"20px",
                    color:"grey",
                    marginTop:"10px",
                    height:"70px"
                }}>
                    {desc}
                </Typography>
                
                <Button style={{
                    width:"100%",
                    border:"1px solid black",
                    boxShadow:"0 3px 10px",
                    marginTop:"20px",
                    cursor:"pointer"
                }}
                >
                    Read more
                </Button>
            </div>
        </div>
        </>
    )
}