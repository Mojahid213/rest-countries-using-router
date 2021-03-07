import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './Country.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Country = (props) => {
  const classes = useStyles();
  const { name, capital, flag, population } = props.country;
  console.log(props.country);
  let history = useHistory();
  const detailHandeler = () => {
    history.push(`/country/${name}`);
  };
  return (
    <div className="country-div">
      <Card onClick={detailHandeler} className={classes.root} style={{backgroundColor:'seashell',border:'1px solid black',cursor:'pointer'}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <h2 style={{ color: "red" }}>Capital: </h2>
                  <h2 style={{ color: "red" }}>Population:</h2>
                </div>
                <div>
                  <h2>{capital}</h2>
                  <h2>{population}</h2>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Country;
