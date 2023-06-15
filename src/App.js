import { useState } from 'react';
import { fetchToken, onMessageListener } from './firebase';
import { Button, Toast} from 'react-bootstrap';


// import './messaging_init_in_sw'
function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  fetchToken(setTokenFound);
  onMessageListener()
    .then(async (payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      setShow(true);
      let data = JSON.parse(payload.notification.body);
      console.log("the payloadd===========", JSON.parse(data.data.body));
      // alert(payload.notification.title,
      //   payload.notification.body,
      //   payload.notification.data)
      // const result = await confirm("we Go the data , Do you want to push It next");
      // console.log("the result result ===============",result)
      // onConfirm();
      // handleClick(result);
    })
    .catch((err) => console.log("failed: ", err));
  const onShowNotificationClicked = () => {
    setNotification({
      title: "Notification",
      body: "This is a test notification",
    });
    setShow(true);
  };

  return (
    <div className="App">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      <div className="container">
        {/* <button onClick={submit()}>Confirm dialog</button> */}
      </div>
      <header className="App-header">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button onClick={() => onShowNotificationClicked()}>Show Toast</Button>
      </header>
      <div>
        {/* <Confirm
            isOpen={open}
            loading={isLoading}
            title="Update View Count"
            content="Are you sure you want to update these posts?"
            onConfirm={handleConfirm}
            onClose={handleDialogClose}
        /> */}
      </div>
    </div>
  );
}

export default App;


