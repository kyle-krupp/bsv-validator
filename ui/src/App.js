import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardWrapper } from './app/components/card/index.tsx'


const App = () =>  {
  return (
    <>
    <Row className={"container"}>
      <Col span={24}>
      <CardWrapper/> 
      </Col>
    </Row>
    </>
    
  );
}

export default App