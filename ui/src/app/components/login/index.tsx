export const LoginCard = () => {
  const connectWithHandCash = () => window.location.href = 'https://app.handcash.io/#/authorizeApp?appId=5fff949f4033300c3d87aed1'
  return (
    <>
        <h1>Send Bitcoin via Email.</h1>
        <h3>Simple, Fast and Private.</h3>
        <div onClick={connectWithHandCash} id="connectButton" app-id="123-456">Connect HandCash</div>
    </>
  )
}