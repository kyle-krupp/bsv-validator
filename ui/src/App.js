import "antd/dist/antd.css"
import "./index.css"
import { Row, Col, Image } from 'antd'
import { CardContainer } from './app/components/card'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GiftForm } from "./app/components/form/index"
import { RedeemPage } from "./app/components/redeem"
import { RedeemResult } from "./app/components/redeemResult/index."
import { MittoHeader } from "./app/components/layout/header"

const App = () =>  {
  const connectToHandcash = () => window.location.href = "https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1"
  
  return (
    <Router>
      <MittoHeader/>
      <Switch>
        {/*TODO: make login the default path*/}
        <Route path="/login">
        <Row className={"container"}>
        <CardContainer>
        <Col span={36}>
        <Image src={'https://bitcoin-sv-gifter.s3.amazonaws.com/mitto-logo-resizedv1.png'} className={'logo-image'} width={100}></Image>
         <div onClick={connectToHandcash} id="connectButton" app-id="123-456">Connect with HandCash</div>
        </Col>
        </CardContainer>
        </Row>
        </Route>
        <Route path="/send">
        <Row className={"container"}>
        <CardContainer>
        <Col span={36}>
        <GiftForm/>
        </Col>
        </CardContainer>
        </Row>
        </Route> 
        <Route exact path="/redeem">
          <RedeemPage />
        </Route>
        <Route path="/redeem/gift">
        <RedeemResult />
        </Route>
        
      </Switch>
    </Router>
    
  );

}

export default App