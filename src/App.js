import React, { useEffect, useState } from "react";
import { notification } from "antd";
import logo from "./logo.svg";
import "./App.css";

import "antd/dist/antd.css";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [alreadyShownInstallNotification, setAlreadyShownInstallNotification] =
    useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();

      setDeferredPrompt(e);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt");
    };
  }, []);

  useEffect(() => {
    deferredPrompt && showNotification();
  }, [deferredPrompt]);

  function showNotification() {
    const notificationKey = "install-notification";

    if (!alreadyShownInstallNotification) {
      notification.open({
        key: notificationKey,
        message: "We have an app!",
        description: "Would you like to install our app? Click here!",
        duration: 0,
        onClick: async () => {
          deferredPrompt.prompt();
          notification.close(notificationKey);
        },
      });
    }

    setAlreadyShownInstallNotification(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
