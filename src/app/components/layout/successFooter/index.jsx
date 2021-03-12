import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive'
const { Footer } = Layout

export const MittoSuccessFooter = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const isTablet = useMediaQuery({ query: '(max-width: 1224px)'})


  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })


  //TODO: implement for portrait mode and retina?
  return <Footer style={{marginTop: "-35%"}}>
    {isDesktop && !isTablet && !isMobile &&
    <img style={{float: "right", width: "75%"}} src="https://mitto-bsv-gifter.s3.amazonaws.com/Mitto+Success+Footer+DESKTOP.png" alt="Mitto Footer"/>}
 
    {isTablet && !isMobile && <img style={{float: "right", width: "75%"}} src="https://mitto-bsv-gifter.s3.amazonaws.com/Mitto+Success+Footer+TABLET.png" alt="Mitto Footer"/>}
    {isMobile && <img style={{float: "right", width: "100%"}} src="https://mitto-bsv-gifter.s3.amazonaws.com/Mitto+Success+Footer+MOBILE.png" alt="Mitto Footer"/>}

  </Footer>
}