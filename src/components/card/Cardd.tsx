import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import img from "../../assets/img/frends.png";
import registan from "../../assets/img/registan.png";
import trevel from "../../assets/img/travel.png";
import school from "../../assets/img/school.png";
import uchoba from "../../assets/img/uchoba.png";
import money from "../../assets/img/money.png";
export default function Cardd():any {

  const arrCard = [{
    img:img,
    type:"Ota-ona ",
    title:"Termiz muhandistlik-texnologiya instituti tashkil etildi",
    date:"19:01 | 10-12-2021",
  },
  {
    img:registan,
    type:"O‘quvchilar",
    title:"Termiz muhandistlik-texnologiya instituti tashkil etildi",
      date:"19:01 | 10-12-2021",
    },{
    img:trevel,
    type:"O‘qituvchilar",
    title:"Talabalar uchun ptezdident va davlat stipendiyalarini tayinlash tartibitasdiqlandi",
    date:"19:01 | 10-12-2021",
  },{
    img:school,
    type:"Ota-ona ",
    title:"Termiz muhandistlik-texnologiya instituti tashkil etildi",
    date:"19:01 | 10-12-2021",
  },
  {
    img:uchoba,
    type:"O‘qituvchilar",
    title:"Termiz muhandistlik-texnologiya instituti tashkil etildi",
    date:"19:01 | 10-12-2021",
  },
  {
    img:money,
    type:"O‘qituvchilar",
    title:"Talabalar uchun ptezdident va davlatstipendiyalarini tayinlash tartibi tasdiqlandi",
    date:"19:01 | 10-12-2021",
  },
  ];
  return (
    arrCard.map((i)=>(
      <Card sx={{ maxWidth: 392, height:401, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={i.img}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" color=" #EC1212" padding="16px 0px 12px 0px" margin={0}>
            {i.type}
          </Typography>
          <Typography variant="body2" color=" #000000" paddingBottom="8px">
           {i.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography color="#000000" paddingBottom={0}>
          {i.date}
        </Typography>
      </CardActions>
    </Card>
    ))
  );
};
