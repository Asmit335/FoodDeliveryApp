import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <>
      <div className="appDownload">
        <p>For Better Experience Download</p>
        <div className="appDownloadPlatform">
          <a href="https://play.google.com/" target="_blank">
            <img title="playStore" src="./images/play_store.png" alt="" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img title="appStore" src="./images/app_store.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
