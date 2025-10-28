import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  leftClick = () => {
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex > 0
          ? prevState.currentIndex - 1
          : prevState.currentIndex,
    }))
  }

  rightClick = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex < reviewsList.length - 1
          ? prevState.currentIndex + 1
          : prevState.currentIndex,
    }))
  }

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const {
      imgUrl, 
      username, 
      companyName, 
      description
      } = reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="heading">Reviews</h1>
          <div className="profile">
            <button
              onClick={this.leftClick}
              type="button"
              className="arrow-btn"
              data-testid="leftArrow"
            >
              <img
                className="arrow"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="review-content">
              <img alt={username} src={imgUrl} />
              <p className="username">{username}</p>
              <p className="companyName">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              onClick={this.rightClick}
              type="button"
              className="arrow-btn"
              data-testid="rightArrow"
            >
              <img
                className="arrow"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
