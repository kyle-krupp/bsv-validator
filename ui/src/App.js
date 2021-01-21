import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardContainer } from './app/components/card'
import { LoginCard } from "./app/components/login"


const App = () =>  {
  return (
    <>
    <Row className={"container"}>
        <CardContainer>
      <Col span={24}>
        <LoginCard/>
      </Col>
      </CardContainer>
      </Row>
    </>
    
  );
}

export default App