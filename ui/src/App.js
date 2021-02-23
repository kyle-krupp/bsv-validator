import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardContainer } from './app/components/card'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GiftForm } from "./app/components/form/index"
import { RedeemPage } from "./app/components/redeem"
import { RedeemResult } from "./app/components/redeemResult/index."
import { MittoHeader } from "./app/components/layout/header/index"
import { MittoFooter } from "./app/components/layout/footer"
import { Layout } from 'antd'
import { LoginCard } from "./app/components/login"
const { Content } = Layout
const App = () =>  {
  
  return (
    <Router>
      <Layout>
      <MittoHeader/>
      <Content>
      <Switch>
        {/*TODO: make login the default path*/}
        <Route path="/login">
        <Row className={"container"}>
        <CardContainer>
        <Col span={36}>
        <LoginCard/>
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
      </Content>
      <MittoFooter />
      </Layout>
    </Router>
    
  );

}

export default App