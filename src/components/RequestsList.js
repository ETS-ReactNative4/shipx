import React from 'react'
import RequestCard from './RequestCard';
import { connect } from 'react-redux';
import { fetchAllRequests } from '../actions/index';
import { Card } from 'semantic-ui-react'


class RequestsList extends React.Component {

  componentDidMount() {
    this.props.fetchAllRequests()
  }

  // componentDidUpdate = (prevProps, prevState) => {
    
  // }
  
  

  render(){
    // console.log('props', this.props.requests.requestsList)
    // console.log(this.props.fetchAllRequests)

    const requests = this.props.fetchAllRequests()



    return(
      <div className="requestsList">
        <Card.Group centered itemsPerRow={4}>
      {this.props.requests.requestsList.map(request => {
        return <RequestCard key={request.id} request={request}/>
      })}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    requests: state.requests
  }
}

export default connect(mapStateToProps, { fetchAllRequests })(RequestsList)