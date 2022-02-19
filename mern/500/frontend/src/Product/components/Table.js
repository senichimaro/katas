// import {
//   useState,
//   useEffect
// } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'




function Table({ isData }){

  // const [{} , setIsData ] = useState(isData)

  return (
    <Container>
      <Row>
    {
      isData.map(({ events, id, imageUrl, launches, newsSite, publishedAt, summary, title, updatedAt, url }) => (
        <Col className="d-flex justify-content-center g-4" key={id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'160px'}} variant="top" src={ imageUrl } />
            <Card.Body>
              <div class="position-relative">
                <span style={{top:-50}} className="position-absolute badge rounded-pill bg-light text-black-50">{ newsSite }</span>
              </div>
              <Card.Title>{ title.length > 70 ? `${title.substring(0,70)}...` : title }</Card.Title>
              <Card.Text>{ summary.substring(0,100) }...</Card.Text>
            </Card.Body>
            <div className="m-3">
              <a className="text-secondary" href={ url } target="_blank" rel="noreferrer">Read</a>
              {/*<a className="my-1 px-5 btn btn-primary" href={ url } target="_blank" rel="noreferrer">Read</a>*/}
            </div>
          </Card>
        </Col>
      ))
    }
      </Row>
    </Container>
  )
}


export default Table
