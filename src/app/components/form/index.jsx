import {useState, useEffect} from 'react';
import { Form, Input, Button, Avatar, Row, Col, Tooltip } from 'antd';
import { CardContainer } from '../card';
import { useHistory } from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map'
import { SendResult } from './sendResult'

export const SendPage = () => {
  let history = useHistory()
  const baseUrl = window.location.href.includes("localhost") ? "localhost:3000" : "https://mitto.cash"
  const [form] = Form.useForm()
  const [isSubmitted, setSubmitResult] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [loading, setLoading] = useState(false);
  const [redemptionUrl, setRedemptionUrl] = useState('')
  const [isPublicUrl, setPublicUrl] = useState(false)
  const params = new URLSearchParams(window.location.search);
  const authToken = params.get('authToken')
  const redeemToken = params.get('redeemToken')
  console.log(`authToken: ${authToken}`)
  console.log(`redeemToken: ${redeemToken}`)

  const userName = userInfo?.name

  const isRecipient = () => redeemToken ? history.push(`/redeem/gift?authToken=${authToken}&redeemToken=${redeemToken}`) : null


  const sendGift = async (email, amount, note) => {
    email ? setPublicUrl(false) : setPublicUrl(true)
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
  setRedemptionUrl(`${baseUrl}/redeem?redeemToken=${giftData.redemptionToken}`)
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
    isRecipient()
    // eslint-disable-next-line
}, [authToken]);

  const onFinish = (values) => {
    sendGift(values.email, values.amount, values.note)
    setSubmitResult(true)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const validateMessages = {
    // eslint-disable-next-line
    required: "'${name}' is required!"
  };

  return (
    <>
  <Row>
    <Col xs={{span: 8, offset: 12}} lg={{span: 6, offset: 16}}>
      <Row className="info-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={{span: 10}} lg={{span:4}}>
          <Tooltip placement='bottom' title='This is your local currency. You can update your currency by changing the wallet settings in the HandCash app.'>
            <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/info-icon.png" alt="info"/>
          </Tooltip>
        </Col>
        <Col xs={{span: 10}} lg={{span:4}}>
            <button className="ant-btn ant-btn-primary local-currency">
            {getSymbolFromCurrency(userInfo.currency)}{userInfo.currency}
            </button>
        </Col>
      </Row>
    </Col>
  </Row>

  {isSubmitted ?  <SendResult redemptionToken={redeemToken} redemptionUrl={redemptionUrl} isPublicURl={isPublicUrl}/> :
  loading ? "loading.." :
<>
<Row className="container">
<CardContainer>
<Avatar src={userInfo.profilePictureUrl} size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 80 }}></Avatar>
<h3 id="userName">{userName}</h3>

<Form
  layout={'vertical'}
  form={form}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  validateMessages={validateMessages}
>
<Form.Item>
  <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/recipient-icon.png" alt="recipient" className='form-icon'/>
  <Form.Item name="email">
    <Input placeholder="Enter recipient's email address (optional)" />
    </Form.Item>
</Form.Item>

<Form.Item required={true} requiredMark={true}>
    <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/amount-icon.png" alt="amount" className='form-icon'/>
    <Form.Item name='amount'>
      <Input placeholder={`Enter amount in ${userInfo.currency}`} />
    </Form.Item>
</Form.Item>

<Form.Item>
  <Button className={"send-button"} type="primary" htmlType="submit">
    <img src="https://mitto-bsv-gifter.s3.amazonaws.com/icons/send-icon.png" alt="send" className='button-icon'/>
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