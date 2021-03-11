import { Button, Row, Col } from 'antd';
import { CopyOutlined } from '@ant-design/icons'

export const SendResult = (props) => {
  return (
<Row justify="center" align="middle" className="send-gift-section">
  <Col xs={{span: 18}} lg={{span:12}} >
    <Row justify="center">
      <img src="https://mitto-bsv-gifter.s3.amazonaws.com/payment-generated-success.png" alt="success" style={{marginBottom: "30px"}}/>
    </Row>
    <Row justify="center">
    <h1 style={{color: "#21CA8A", textAlign: "center"}}>Email Sent!</h1>
    <p style={{color: "#5A728A", fontSize: "20px", textAlign: "center"}}>Recipient will be asked to download HandCash. They will receive your gift to get started with BSV.</p>
    <p style={{color: "#5A728A", fontSize: "15px", textAlign: "center"}}>Alternatively share this url with the recipient:</p>
    </Row>
    <Row justify="center">
        <Button className={"button send-gift-copy"} style={{backgroundColor: "white", color: "#A6B0C3", borderColor: "#A6B0C3"}} type="primary" key="console" icon={<CopyOutlined />} onClick={() => navigator.clipboard.writeText(props.redemptionUrl)}>
        Copy Secret URL
      </Button>
    </Row>
  </Col>
  </Row>
  )
}