import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";

  const MaterialProjectCard = ( props) => {
    const {  name, description , technologyUsed , others } = props.item;
    return (<Card sx={{width:"100%"}}>
        <CardContent >
            <Typography variant="h5">
                {name}
            </Typography>
            <Typography >
                {technologyUsed}
            </Typography>
            <Typography >
                {description}
            </Typography>   
        </CardContent>

    </Card>)
  }

  export default MaterialProjectCard