import React from 'react';
import Radium from 'radium';

import {
  Card, CardHeader, CardMedia, CardTitle,
  CardActions, CardText, RaisedButton, Avatar,
  FlatButton
} from 'material-ui';

import './_Landing.scss';
import YinYang from './images/yin_yang.png';

@Radium
class Landing extends React.Component {
  render() {
    return (
      <div id='landing'>
        <Card className='card'>
          <CardHeader
            title="Starship Millhouse"
            subtitle="Advanced Trading Platform"
            avatar={<Avatar>SM</Avatar>}/>
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src={YinYang}/>
          </CardMedia>
          <CardTitle title="This is some shit" subtitle="With a subtitle"/>
          <CardActions>
            <FlatButton label="You Can do this"/>
            <FlatButton label="Or This"/>
          </CardActions>
          <CardText>
            Filla Text, Yo!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Landing;
