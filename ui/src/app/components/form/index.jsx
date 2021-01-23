import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Result, Image, Tag, Divider, Avatar } from 'antd';
import { CopyOutlined, DollarCircleFilled, UserOutlined } from '@ant-design/icons'
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
<Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/mitto-logo-dark.png'} width={100} preview={false}></Image>
<CardContainer id={"user-info-card"}>
<Avatar src={userInfo.profilePictureUrl} size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}></Avatar>
<Divider className={"divider"}/>
<Tag icon={<UserOutlined />} color="default">{userInfo.name}</Tag>
<Divider className={"divider"}/>
<Tag icon={<DollarCircleFilled />} color="success">{userInfo.currency}</Tag>
</CardContainer>

  <h1>Send Bitcoin SV via a URL</h1>
  <Form
  layout={'vertical'}
  form={form}
  onFinish={onFinish}
>
  <Form.Item name={'E-mail'} label={'E-mail'}>
    <Input placeholder="Your email (required)" />
  </Form.Item>
  <Form.Item name={'Amount'} label={'Amount'}>
    <Input placeholder="BSV Amount (required)" />
  </Form.Item>
  <Form.Item name={'Description'}label={'Description'}>
    <Input placeholder="Brief description (optional)" />
  </Form.Item>
  <Form.Item>
    <Button className={"button"}type="primary" htmlType="submit">Generate Payment URL</Button>
  </Form.Item>
</Form>
</>

}
</>

    
  );
}