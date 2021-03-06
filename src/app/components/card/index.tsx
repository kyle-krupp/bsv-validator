import React, { PropsWithChildren } from 'react'
import { Card } from 'antd'

export const CardContainer = (props: PropsWithChildren<any>): React.ReactElement => <Card className={'card'} bordered={false}>{props.children}</Card>