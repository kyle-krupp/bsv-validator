import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Result, Image, Avatar, Divider } from 'antd';
import { CopyOutlined, GiftOutlined, SendOutlined } from '@ant-design/icons'
import { CardContainer } from '../card';
import { Link, useHistory } from 'react-router-dom'

export const GiftForm = () => {
  let history = useHistory()
  const baseUrl = window.location.href.includes("localhost") ? "localhost:3000" : "https://angry-perlman-edcb4a.netlify.app/"
  const [form] = Form.useForm()
  const [isSubmitted, setSubmitResult] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(false);
  const [redemptionToken, setRedemptionToken] = useState('')
  const [redemptionUrl, setRedemptionUrl] = useState('')
  const params = new URLSearchParams(window.location.search);
  const authToken = params.get('authToken').split("&").toString()
  localStorage.setItem('authToken', authToken)

  const isRecipent = localStorage.getItem('redemptionToken') ? true : false
  
  const checkRecipientRedirect = () => isRecipent ? history.push(`redeem/gift?authToken=${authToken}`) : null
  
  checkRecipientRedirect()

  const sendGift = async (email, amount, note) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "giverHandcashAuthToken": authToken,
      "amount" : amount,
      "currencyCode": userInfo.currency,
      "receiverEmail": email,
      "note": note
    })
  }
  const response = await fetch('https://api.mitto.cash/gift', requestOptions)
  const giftData = await response.json()
  setRedemptionToken(giftData.redemptionToken)
  setRedemptionUrl(`${baseUrl}/redeem?redemptionToken=${giftData.redemptionToken}`)
  sessionStorage.setItem("redemptionToken", giftData.redemptionToken)
  }

  useEffect(() => {
    const logUser = async () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "handCashAuthToken": authToken })
      }
      const response = await fetch('https://api.mitto.cash/login', requestOptions)
      setUserInfo(await response.json())
    }
    setLoading(true)
    logUser()
    setLoading(false)
}, [authToken]);

  const onFinish = (values) => {
    sendGift(values.email, values.amount, values.note)
    setSubmitResult(true)

  };

  return (
    <>
  {isSubmitted ?  <Result
    status="success"
    title="Successfully Generated Gift URL with HandCash!"
    subTitle="Share your secret URL"
    extra={[
    <>  
    <Link to={{
      pathname: '/redeem',
      search: `?redemptionToken=${redemptionToken}`
    }}>{redemptionUrl}</Link>
    <div>&nbsp;</div>
   <Button className={"button"} type="primary" key="console" icon={<CopyOutlined />} onClick={() => navigator.clipboard.writeText(redemptionUrl)}>
        Copy to clipboard
      </Button>
      </>,
    ]}
  />:
  loading ? "loading.." :
  <>
<CardContainer id={"user-info-card"}>
<Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/mitto-logo-dark.png'} width={50} preview={false}></Image>
<Divider/>
<Avatar src={userInfo.profilePictureUrl} size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 80 }}></Avatar>
<h3>Welcome, {userInfo.name}!</h3>

</CardContainer>

  <GiftOutlined style={{ fontSize: '20px', color: '#1345ce' }}/>

  <h3>Send a gift:</h3>
  <Form
  layout={'vertical'}
  form={form}
  onFinish={onFinish}
>
  <Form.Item name={"email"} label={"Recipient's E-mail"}>
   
    <Input placeholder={"john.doe@example.com"} />
  </Form.Item>
  <Form.Item name={'amount'} label={'Amount in'}>
  <Input placeholder={0.01} />
  </Form.Item>
  <Form.Item name={'note'}label={'Description'}>
    <Input placeholder="Brief message (optional)" />
  </Form.Item>
  <Form.Item>
    <Button className={"button"}type="primary" htmlType="submit" icon={<SendOutlined />}>Send</Button>
  </Form.Item>
</Form>
</>

}
</>

    
  );
}