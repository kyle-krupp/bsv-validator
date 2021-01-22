import React from 'react'
import { Image } from 'antd'

export const LoginCard = () => {
  const connectWithHandCash = () => window.location.href = 'https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1'
  return (
    <>
        <Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/mitto-logo-resizedv1.png'} className={'logo-image'}width={100}></Image>

        <div onClick={connectWithHandCash} id="connectButton" app-id="123-456">Connect with HandCash</div>
    </>
  )
}