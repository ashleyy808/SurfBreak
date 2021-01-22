/*
import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


class Destination extends Component {
    constructor(props){
        super(props);
        this.state={
            location:'',
            nearestForecast: '',
            gMap:'',

            quality:'',
            difficulty:'',
            beachTitle:'',
            body:'',

            reviews:''
        }
        
        this.initMap=this.initMap.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleDeleteReview=this.handleDeleteReview.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    initMap(){
        this.state.gMap= new window.google.maps.Map(document.getElementById('show-map'), {
            zoom: 13,
            maxZoom: 15
        });
        const {destination}=this.state;
        this.state.gMap.setCenter({lat:lat,lng:lng});

            new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.state.gMap,
            label: destination.name,
        })
        
    }



    handleDelete(destinationId){
        const {requestDestination,deleteDestination}=this.props;
        deleteDestination(destination)
            .then(requestDestination())
            .then(this.props.history.push('/destination'))
    }

    handleDeleteReview(destinationId, reviewId){
      const {fetchReviews,deleteReview} = this.props;
      deleteReview(destinationId,reviewId)
        .then(fetchReviews(destinationId))
    }

    componentWillUnmount(){
      this.props.requestDestinations()
    }

    update(field) {
        return (
            e => {
                this.setState({ [field]: e.target.value })
            }
        )
    }

    handleSubmit(e){
        e.preventDefault();
        const{createReview,currentUser,fetchReviews}=this.props;
        const{quality,difficulty,title,body}=this.state;

        let review={
            creatorId:currentUser.id,
            quality:quality,
            difficulty:difficulty,
            title:title,
            body:body
        }

        const{destination}=this.state;
        createReview(destination._id,review)
            .then(fetchReviews(destination._id))
            .then(this.setState({
              quality: '',
              difficulty: '',
              title: '',
              body: '',
            }))

    }

    render() {
      const { destination, nearestForecast } = this.state;
      const {currentUser}=this.props;

      if(!destination) return null
      return (
        <div className="destination-container">
          <div className="destination-content" style={{ color: "white" }}>
            <h1 className="destination-title">{destination.name}</h1>
            <br />
            <div className="destination-map-and-content">
              <br />
              <div id="show-map"></div>
              <div className="destination-desc-and-metrics">
                <h2>About</h2>
                <p className="destination-desc">{destination.description}</p>
                <br />
                <div className="destination-metrics">
                  <h2>
                    Surf Forecast {"  "}
                    </h2>
                  <br/>
                  <span>Water Level: {nearestForecast.water_level} ft</span>
                  <span>
                    Water Temp: {nearestForecast.water_temperature} degrees F
                  </span>
                  <span>
                    Currents: {nearestForecast.currents} seconds
                  </span>
                  <span>
                    Current Predictions: {nearestForecast.currents_predictions}
                  </span>
                </div>
              </div>
            </div>

            <br/>
            {currentUser ? (
              currentUser.id == destination.creatorId ? (
                <button id='delete-button' className='show-buttons'
                  onClick={() => {
                    this.handleDelete(destination._id);
                  }}
                >
                  Delete Spot
                </button>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <div className="Destination-review-form">
              {currentUser && currentUser.id ? (
                <form onSubmit={this.handleSubmit}>
                  <h3 id='rev'>Write a Review:</h3>
                  <label>
                    {" "}
                    Quality <br />
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={this.state.quality}
                      onChange={this.update("quality")}
                    ></input>
                  </label>
                  <br />
                  <label>
                    {" "}
                    Difficulty <br />
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={this.state.difficulty}
                      onChange={this.update("difficulty")}
                    ></input>
                  </label>
                  <br />
                  <label>
                    {" "}
                    Title <br />
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.update("title")}
                    ></input>
                  </label>
                  <br />
                  <label>
                    Body <br />
                    <textarea
                      cols="30"
                      rows="10"
                      value={this.state.body}
                      onChange={this.update("body")}
                    />
                  </label>
                  <br />
                  <input className='show-buttons' type="submit" value="Create Review"></input>
                </form>
              ) : (
                  <div>
                    <Link to='/login' id='logincreate'>Login</Link> to write a review
                            <br />
                    <br />
                  </div>
              )}
            </div>
            <div className="destination-reviews">
              {this.props.reviews && this.props.currentUser ? (
                <div>
                  <h2>Reviews</h2>
                  <ul>
                    {
                    this.props.reviews.filter(review => review.destinationId===destination._id).map(review =>
                      (<li key={review._id} className="review-wrapper">
                        <h3>{review.title}</h3>
                        <div className="destination-rating">
                          <span>Quality: {review.quality}</span>
                          <span className="difficulty">Difficulty: {review.difficulty}</span>
                        </div>
                        <div className="review-body">{review.body}</div>
                        <br />
                        {review.creatorId===this.props.currentUser.id ? (
                          <button id='delete-button' className='show-buttons'
                            onClick={() => {
                              this.handleDeleteReview(destination._id, review._id);
                            }}
                          >
                            Delete Review
                          </button>
                        ) : ""}
                      </li>
                      )
                      )}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    }
}



export default withRouter(Destination);
*/