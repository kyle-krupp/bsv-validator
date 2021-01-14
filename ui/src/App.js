import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardContainer } from './app/components/card'
import { GiftForm } from './app/components/form'


const App = () =>  {
  return (
    <>
    <Row className={"container"}>
      <CardContainer>
      <Col span={24}>
        <GiftForm/>
      </Col>
      </CardContainer>
    </Row>
    </>
    
  );
}

export default App