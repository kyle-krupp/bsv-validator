import React from 'react'
export const RedeemPage = () => {
  const params = new URLSearchParams(window.location.search);
  const redemptionToken = params.get('redemptionToken')
  localStorage.setItem('redemptionToken', redemptionToken)
  const connectWithHandCash = () => window.location.href = 'https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1'

  return (
    <>
    <div style={{color: 'white'}}>You got some money! Login with HandCash to redeem</div>
    <div onClick={connectWithHandCash} id="connectButton" app-id="123-456">Connect with HandCash</div>
    </>
  )
}