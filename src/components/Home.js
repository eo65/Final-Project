import React, { Component } from "react";
import "./Home.css";
 
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://i.imgur.com/bzB9L5V.jpg",
		"https://i.imgur.com/2nJvanu.jpg",
		"https://i.imgur.com/IpOdVFS.jpg",
		"https://i.imgur.com/SZJrA3s.jpg",
		"https://i.imgur.com/Bcn4poC.jpg",
		"https://i.imgur.com/qDns4Lb.jpg",
		"https://i.imgur.com/dyQzfrG.jpg",
		"https://i.imgur.com/slAdbsA.jpg",
		"https://i.imgur.com/ci5RSLK.jpg",
		"https://i.imgur.com/KzwCvCX.jpg",
		"https://i.imgur.com/uOVX9vJ.jpg",
		"https://i.imgur.com/6QlKhAT.jpg",
		"https://i.imgur.com/sTKDynU.jpg",
		"https://i.imgur.com/kRSEUhh.jpg",
		"https://i.imgur.com/l3cf9Yl.jpg",
		"https://i.imgur.com/WznqWSr.jpg",
		"https://i.imgur.com/sMr7b8p.jpg",
		"https://i.imgur.com/1VRDlub.jpg",
		"https://i.imgur.com/Nv3nbic.jpg",
		"https://i.imgur.com/eEZl0eR.jpg?1",
		"https://i.imgur.com/lTlSrrG.jpg",
		"https://i.imgur.com/xwEEG86.jpg",
		"https://i.imgur.com/a3syhMQ.jpg",
		"https://i.imgur.com/OM9bt9Y.jpg",
		"https://i.imgur.com/sIUHSfe.jpg",
		"https://i.imgur.com/Z2AUvaQ.jpg",
		"https://i.imgur.com/97KGXfs.jpg",
		"https://i.imgur.com/8CneBSa.jpg",
		"https://i.imgur.com/Jh64anl.jpg",
		"https://i.imgur.com/CqdzRx4.jpg",
		"https://i.imgur.com/BdhiCMR.jpg",
		"https://i.imgur.com/ys8ZQF7.jpg",
		"https://i.imgur.com/WpGv1dU.jpg",
		"https://i.imgur.com/a0Ho3Fp.jpg",
		"https://i.imgur.com/oVIIqsn.jpg",
		"https://i.imgur.com/PSvHNgr.jpg",
		"https://i.imgur.com/yp7PAhE.jpg",
		"https://i.imgur.com/SNJW5H5.jpg",
		"https://i.imgur.com/Pv6mXsZ.jpg",
		"https://i.imgur.com/EKAv9cG.jpg",
		"https://i.imgur.com/UWU7guU.jpg",
		"https://i.imgur.com/6snL1fA.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }
  
   componentDidMount() {
    var that = this;
    this.timeout = setTimeout(function () {
        that.goToNextSlide()
      }, 3000);    
  }
  
  componentDidUpdate() {
    var that = this;
    if(this.pause === true) {
      clearInterval(this.timeout);
      this.timePause = setTimeout(function(){
        clearInterval(this.timePause);        
      }, 8000);
      this.pause = false;
    }         
    this.timeout = setTimeout(function () {
      that.goToNextSlide()
    }, 3000);
    
  }
    
  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
	  return (
      <div className="slider">
		<div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
      </div>

    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Home;