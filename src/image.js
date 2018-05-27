// @flow
import React, { Component } from 'react';
import './App.css';

type Props = {
  src: string,
  alt: string,
  className: string
};

type State = {
  loaded: boolean
};

class Image extends Component<Props, State> {
  img: ?HTMLImageElement;

  constructor(props: Props) {
      super(props);
      this.state = {loaded: false};
      this.imgLoad = this.imgLoad.bind(this);
  }

  imgLoad = () => {
    this.setState({loaded: true});
  }

  render() {
    return (
      <img ref={img => (this.img = img)} alt={this.props.alt} className={`${this.props.className} ${this.state.loaded ? "image-loaded" : "image"}`}
        src={require(`${this.props.src}`)} onLoad={this.imgLoad} />
    )
  }
}

export default Image;
