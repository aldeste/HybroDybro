import React, { PureComponent, PropTypes } from 'react';
import AsyncComp from '../../AsyncComp';

class AsyncImg extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  render() {
    const { src, alt, className } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default AsyncComp('src')(AsyncImg);
