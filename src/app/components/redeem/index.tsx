import { Row, Col } from "antd";

export const RedeemPage = () => {
  const params = new URLSearchParams(window.location.search);
  const redemptionToken = params.get('redemptionToken')
  localStorage.setItem('redemptionToken', redemptionToken)
  const connectWithHandCash = () => window.location.href = 'https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1'

  return (
<Row justify="center" align="middle" className="receive-gift-section">
  <Col xs={{span: 18}} lg={{span:12}} >
    <Row justify="center">
      <img src="https://mitto-bsv-gifter.s3.amazonaws.com/payment-received-success.png" alt="success" style={{marginBottom: "30px"}}/>
    </Row>
    <Row justify="center">
    <h1 style={{color: "white", textAlign: "center"}}>You've received money!</h1>
    <p style={{color: "white", fontSize: "20px", textAlign: "center", fontWeight: "lighter"}}>Redeem your gift:</p>
    </Row>
    <Row justify="center">
    <div onClick={connectWithHandCash} id="connectButtonReceive" app-id="123-456">Connect HandCash</div>
    </Row>
  </Col>
</Row>
    
  )
}