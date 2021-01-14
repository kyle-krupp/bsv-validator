import React, {useState} from 'react';
import { Form, Input, Button, Result, Image } from 'antd';
import { CopyOutlined } from '@ant-design/icons'

export const GiftForm = () => {
  const [form] = Form.useForm()
  const [isSubmitted, setSubmitResult] = useState(false)


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
    <a href="https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1"></a>
    <div>&nbsp;</div>
   <Button type="primary" key="console" icon={<CopyOutlined />}>
        Copy to clipboard
      </Button>
      </>,
    ]}
  />: 
  <>
  <Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/bitcoinSVlogo.png'} width={100}></Image>
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
    <Button type="primary" htmlType="submit">Generate Payment URL</Button>
  </Form.Item>
</Form>
</>

}

  </>
      
    
  );
}