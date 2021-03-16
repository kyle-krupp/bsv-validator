import { Row, Col, Button } from "antd";
import { Fragment } from "react";
import { useHistory } from 'react-router-dom'


export const ErrorPage = () => {
  let history = useHistory()

  const goBackToLogin = () => {
    history.push(`/`)
  }

  return (
<Fragment>
<style>{'body { background-color: white; }'}</style>
<Row justify="center" align="middle" className="receive-gift-section">
  <Col xs={{span: 18}} lg={{span:12}} >
    <Row justify="center">
      <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/error.png" alt="receive" style={{marginBottom: "30px"}}/>
    </Row>
    <Row justify="center">
        <h1 style={{textAlign: "center"}}>Sorry, this content isn't available.</h1>
        <p style={{color: "#5A728A", fontSize: "20px", textAlign: "center", fontWeight: "lighter"}}>The link you followed may be broken or has expired.</p>
    </Row>
    <Row justify="center">
      <Button style={{backgroundColor: "#3861FB", color: "white", borderRadius: "10px", borderColor: "#3861FB"}} onClick={goBackToLogin}>
        Go Back
      </Button>
    </Row>
  </Col>
</Row>
</Fragment>

  )
}