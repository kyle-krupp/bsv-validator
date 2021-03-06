import { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import useWindowSize from "@rooks/use-window-size"
import Confetti from 'react-confetti'
import { ErrorPage } from '../error'
import { Loading } from '../loading'


export const RedeemResult = () => {
  const [status, setStatus] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const { innerWidth, innerHeight } = useWindowSize()
  const params = new URLSearchParams(window.location.search);
  const redeemGift = async () => {
  const authToken = params.get('authToken')
  const redemptionToken = params.get('redeemToken') 

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
    setLoading(false)
  }

  useEffect(() => {
    redeemGift()
    localStorage.clear()
    // eslint-disable-next-line
  }, [])


  return (
    <>
    { isLoading ?  <Loading />: status === 200 ? 
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
: 
<>
<ErrorPage />
</>
}
  </>
  )
  
}