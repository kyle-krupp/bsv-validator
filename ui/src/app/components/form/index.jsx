import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Result, Image, Tag, Avatar, InputNumber, Divider } from 'antd';
import { CopyOutlined, DollarCircleFilled, GiftOutlined, SendOutlined } from '@ant-design/icons'
import { CardContainer } from '../card';

export const GiftForm = () => {
  const [form] = Form.useForm()
  const [isSubmitted, setSubmitResult] = useState(false)

  const initialState = {
    name: "",
    currency: "",
    profilePictureUrl: ""
  }

  const [userInfo, setUserInfo] = useState(initialState)


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const authToken = params.get('authToken').split("&").toString()
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "handCashAuthToken": authToken })
    };
    fetch('http://mittocash-prod.us-east-1.elasticbeanstalk.com/login', requestOptions)
        .then(response => response.json())
        .then(data => setUserInfo(data))
}, []);

  const onFinish = () => {
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
    <div>this is just a test</div>
    <div>&nbsp;</div>
   <Button className={"button"} type="primary" key="console" icon={<CopyOutlined />}>
        Copy to clipboard
      </Button>
      </>,
    ]}
  />: 
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
  <Form.Item name={"Recipient's E-mail"} label={"Recipient's E-mail"}>
   
    <Input placeholder={"john.doe@example.com"} />
  </Form.Item>
  <Form.Item name={'Amount'} label={'Amount in'}>
  <Tag icon={<DollarCircleFilled />} color="success">{userInfo.currency}</Tag>
  <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
    />
  </Form.Item>
  <Form.Item name={'Note'}label={'Description'}>
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