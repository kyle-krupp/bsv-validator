import React, { useEffect, useState } from 'react'

export const RedeemResult = () => {
  const [status, setStatus] = useState(200)
  const authToken = localStorage.getItem('authToken')
  const redemptionToken = localStorage.getItem('redemptionToken')

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

  useEffect(() => {
   redeemGift()
   localStorage.clear()
     // eslint-disable-next-line
  }, [])
  return <div style={{color: 'white'}}>{status === 200 ? "Redemption success! Check your HandCash wallet for $$$": "oops, something went wrong.."}</div>
}