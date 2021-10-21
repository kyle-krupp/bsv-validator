import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive'
const { Header } = Layout

export const MittoSuccessHeader = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const isTablet = useMediaQuery({ query: '(max-width: 1224px)'})


  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })


  //TODO: implement for portrait mode and retina?
  return <Header>
    {isDesktop && !isTablet && !isMobile &&
    <img src="https://mitto-bsv-gifter.s3.amazonaws.com/new+success+headers/success-header-desktop.png" alt="Mitto Header"/>}
 
    {isTablet && !isMobile && <img src="https://mitto-bsv-gifter.s3.amazonaws.com/new+success+headers/success-header-tablet.png" alt="Mitto Header"/>}
    {isMobile && <img src="https://mitto-bsv-gifter.s3.amazonaws.com/new+success+headers/success-header-mobile.png" alt="Mitto Header"/>}
    
  </Header>
}
