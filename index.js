import React, { Component, PropTypes } from 'react';
import { bylineToString, getLocalLink } from 'utils/NewsUtils';
import { COLOR_STYLE } from 'constants/FRNBaseStyles';
import Video from 'components/media/Video';
import AdvertisementUnit from 'components/AdvertisementUnit';
import { Button } from 'antd';
ReactDOM.render(<Button>xxxx</Button>);
      
var _button = require('antd/lib/button');
ReactDOM.render(<_button>xxxx</_button>);
class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'heba is testing here',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      </div>
    );
  }
}

export default RandomTest;
