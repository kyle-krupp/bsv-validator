import { Card, Col, Row } from 'antd';

export const FormCard = () => {
  return(
    <div className="site-card-wrapper">
      <Row justify="center">
      <Col span={16}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      </Row>
   
      </div>
  )
}