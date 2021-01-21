import "antd/dist/antd.css"
import "./index.css"
import { Row, Col, Image } from 'antd'
import { CardContainer } from './app/components/card'
import {useAsync} from "./app/hooks/auth/asyncAuth"


const App = () =>  {

  const connectWithHandCash = () => {
    const fetcher = window.fetch("https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1")
    return fetcher.json()
  }

  const { execute, status, value, error } = useAsync(connectWithHandCash, false)

  return (
    <>
    <Row className={"container"}>
        <CardContainer>
        <Col span={24}>

      <Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/mitto-logo-resizedv1.png'} className={'logo-image'} width={100}></Image>

        <div onClick={execute} id="connectButton" app-id="123-456">Connect with HandCash</div>
        {status === 'success' && <div>{value}</div>}

        {status === 'error' && <div>{error}</div>}
      </Col>
      </CardContainer>
      </Row>
    </>
    
  );

}

export default App