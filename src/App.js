import "antd/dist/antd.css"
import "./index.css"
import { Row, Col } from 'antd'
import { CardContainer } from './app/components/card'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SendPage } from "./app/components/form/index"
import { RedeemPage } from "./app/components/redeem/index"
import { RedeemResult } from "./app/components/redeemResult/index."
import { MittoHeader } from "./app/components/layout/header/index"
import { MittoFooter } from "./app/components/layout/footer"
import { MittoSuccessHeader } from "./app/components/layout/successHeader"
import { MittoSuccessFooter } from "./app/components/layout/successFooter"

import { Layout } from 'antd'
import { LoginCard } from "./app/components/login"
const { Content } = Layout
const App = () =>  {
  
  return (
<Router>
<Layout>
<Switch>
  <Route path="/" exact>
      <MittoHeader/>
        <Content>
          <Row className={"container"}>
          <CardContainer>
           <Col span={36}>
              <LoginCard/>
            </Col>
          </CardContainer>
          </Row>
      </Content>
    <MittoFooter />
  </Route>
<Route path="/send">
      <MittoHeader/>
        <Content>
          <SendPage/>
        </Content>
      <MittoFooter />
  </Route> 
      <Route exact path="/redeem">
      <MittoSuccessHeader/>
        <Content>
          <style>{'body { background-color: #21CA8A; }'}
          </style>
          <RedeemPage />
          </Content>
      <MittoSuccessFooter />
      </Route>
      <Route path="/redeem/gift">
      <MittoHeader/>
        <Content>
          <RedeemResult />
          </Content>
      <MittoFooter />
      </Route>
    </Switch>
  </Layout>
</Router>
  );
}

export default App