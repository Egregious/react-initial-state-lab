// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
  
state = {
    currentSlideIndex: 0
}

render() {
    return (
        <div className="image-slider">
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        </div>
        )
    }
}
  