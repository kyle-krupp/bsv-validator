import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Result, Avatar, Row, Col, Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons'
import { CardContainer } from '../card';
import { Link, useHistory } from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map'

export const GiftForm = () => {
  let history = useHistory()
  const baseUrl = window.location.href.includes("localhost") ? "localhost:3000" : "https://angry-perlman-edcb4a.netlify.app"
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
  <Row>
    <Col span={6} offset={18}>
      <Row>
        <Col span={4}>
          <Tooltip placement='bottom' title='This is your local currency. You can update your currency by changing the wallet settings in the HandCash app.'>
            <img src="https://bitcoin-sv-gifter.s3.amazonaws.com/info-icon.png" alt="info"/>
          </Tooltip>
        </Col>
        <Col span={4}>
          <div className='local-currency'>
            <p>
            {getSymbolFromCurrency(userInfo.currency)}{userInfo.currency}
            </p>
          </div>
        </Col>
      </Row>
     
    </Col>
  </Row>

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
<Row className="container">
<CardContainer>
<Avatar src={userInfo.profilePictureUrl} size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 80 }}></Avatar>
<h3>{userInfo.name}</h3>

  <Form
  layout={'vertical'}
  form={form}
  onFinish={onFinish}
>
  <Form.Item name="email">
  <img src="https://bitcoin-sv-gifter.s3.amazonaws.com/recipient-icon.png" alt="recipient" className='form-icon'/>
    <Input placeholder="Enter recipient's email address" />
  </Form.Item>
  <Form.Item name='amount'>
    <img src="https://bitcoin-sv-gifter.s3.amazonaws.com/amount-icon.png" alt="amount" className='form-icon'/>
  <Input placeholder='Enter amount' />
  </Form.Item>
  <Form.Item name='note'>
  <img src="https://bitcoin-sv-gifter.s3.amazonaws.com/description-icon.png" alt="description" className='form-icon'/>
    <Input placeholder='Add a description' />
  </Form.Item>
  <Form.Item>
    <Button className={"send-button"}type="primary" htmlType="submit">
      <img src="https://bitcoin-sv-gifter.s3.amazonaws.com/send-icon.png" alt="send" className='button-icon'/>
      Send</Button>
  </Form.Item>
</Form>
</CardContainer>
</Row>
</>

}
</>

    
  );
}