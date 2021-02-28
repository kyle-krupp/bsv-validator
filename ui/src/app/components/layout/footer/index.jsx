import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive'
const { Footer } = Layout

export const MittoFooter = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const isTablet = useMediaQuery({ query: '(max-width: 1224px)'})


  const isMobile = useMediaQuery({ query: '(max-width: 850px)' })


  //TODO: implement for portrait mode and retina?
  return <Footer style={{marginTop: "-35%"}}>
    {isDesktop && !isTablet && !isMobile &&
    <img style={{float: "right", width: "100%"}} src="https://bitcoin-sv-gifter.s3.amazonaws.com/Mitto+Footer+DESKTOP.png" alt="Mitto Footer"/>}
 
    {isTablet && !isMobile && <img style={{float: "right", width: "100%"}} src="https://bitcoin-sv-gifter.s3.amazonaws.com/Mitto+Footer+TABLET.png" alt="Mitto Footer"/>}
    {isMobile && <img style={{float: "right", width: "100%"}} src="https://bitcoin-sv-gifter.s3.amazonaws.com/Mitto+Footer+MOBILE.png" alt="Mitto Footer"/>}

  </Footer>
}