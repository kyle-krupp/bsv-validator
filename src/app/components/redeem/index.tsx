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
      <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/recipient-icon.png" alt="receive" style={{marginBottom: "30px"}}/>
    </Row>
    <Row justify="center">
    <h1 style={{color: "#21CA8A", textAlign: "center"}}>You've received Bitcoin!</h1>
    <p style={{color: "#5A728A", fontSize: "20px", textAlign: "center", fontWeight: "lighter"}}>Someone has sent you a BSV gift, login with HandCash to redeem.</p>
    </Row>
    <Row justify="center">
    <div onClick={connectWithHandCash} id="connectButtonReceive" app-id="123-456">Redeem your gift</div>
    </Row>
  </Col>
</Row>
  )
}