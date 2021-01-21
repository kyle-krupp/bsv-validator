import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardContainer } from './app/components/card'
import { GiftForm } from './app/components/form'
import { LoginCard } from "./app/components/login"
import { useState } from 'react'


const App = () =>  {

  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => setLoggedIn(true)

  return (
    <>
        <Row className={"container"}>
        <CardContainer>
      <Col span={24}>
    {isLoggedIn ? <GiftForm/> : <LoginCard/>}
      </Col>
      </CardContainer>
      </Row>
    </>
    
  );
}

export default App