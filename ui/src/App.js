import "antd/dist/antd.css";
import { Layout, Row, Col, Card } from 'antd';
import { FormCard } from './app/components/card/index.tsx';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <>
  <Row justify="center">
    <Col span={16}>
      <Layout>
      <Header/>
      <Content>   
            <FormCard/>
      </Content>
      <Footer />
    </Layout>
  </Col>
</Row>
  </>
  );
}

export default App;
