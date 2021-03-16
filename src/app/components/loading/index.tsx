import { Row, Spin } from "antd"
import { Fragment } from "react"

export const Loading = () => {
  return (
    <Fragment>
      <style>{'body { background-color: white; }'}</style>
       <Row className="container">
         <Spin size='large'/>
        </Row>
    </Fragment>
  )
}