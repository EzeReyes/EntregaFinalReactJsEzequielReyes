import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./CardComponent.css";




const CardComponent = ( {data} ) => {

  return (
    <Card className="cardProducts" sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia className='cardMedia'
          component="img"
          height="150"
          image={data.img}
          alt={data.id}
        />
        <CardContent className='cardContent'>
          <Typography gutterBottom variant="h5" component="div">
            {data.nombre}
          </Typography>
          <Typography variant="h5">
            {data.tipo}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
  );
}


export default CardComponent;
