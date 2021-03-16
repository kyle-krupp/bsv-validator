import { useState } from 'react'
import { Row, Col } from 'antd'
import useWindowSize from "@rooks/use-window-size"
import Confetti from 'react-confetti'
import { useHistory } from 'react-router-dom'


export const RedeemResult = () => {
  let history = useHistory()
  const [status, setStatus] = useState(200)
  const authToken = localStorage.getItem('authToken')
  const redemptionToken = localStorage.getItem('redemptionToken')
  const { innerWidth, innerHeight } = useWindowSize()
  const redeemGift = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          "receiverHandCashAuthToken": authToken,
          "redemptionToken": redemptionToken
        })
    }
    const response = await fetch('https://api.mitto.cash/gift/redeem', requestOptions)
    setStatus(response.status)
  }
  redeemGift()

  localStorage.clear()

  return (
    <>
    { status === 200 ? 
    <>
    <Confetti
    width={innerWidth}
    height={innerHeight}
    recycle={false}
  />
    <Row justify="center" align="middle" className="receive-gift-section">
    <Col xs={{span: 18}} lg={{span:12}} >
      <Row justify="center">
        <img src="https://mitto-bsv-gifter.s3.amazonaws.com/payment-received-success.png" alt="success" style={{marginBottom: "30px"}}/>
      </Row>
      <Row justify="center">
      <h1 style={{color: "white", textAlign: "center"}}>Gift successfully redeemed!</h1>
      <p style={{color: "white", fontSize: "20px", textAlign: "center", fontWeight: "lighter"}}>Your gifted BSV amount has been applied to your wallet. Check HandCash to see your updated balance.</p>
      </Row>
      <Row justify="center">
        <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/amount-icon-light.png" alt="wallet"/>
      </Row>
    </Col>
  </Row>
</>
: history.push('/error', {
  authToken: authToken,
  redemptionToken: redemptionToken
})
}
  </>
  )
  
}