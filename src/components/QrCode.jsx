import React, { useState } from "react";
import { FaCloudDownloadAlt, FaLink, FaAlignJustify } from "react-icons/fa";
import Header from "./Header";
import Button from "../reusables/Button";
import empty from "../assets/empty.png";
import Footer from "./Footer";
import QRCode from "qrcode.react";

const QrCode = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [displayText, setDisplayText] = useState(false);
  const [displayUrl, setDisplayUrl] = useState(false);
  const [qr, setQr] = useState(false);

  const handleTextChange = (ev) => {
    setText(ev.target.value);
  };

  //created file reader to handle the file input
  const handleUrlChange = (event) => {
    const url = event.target.value;
    setUrl(url);
  };

  //handle text submit button
  const handleTextSubmit = (event) => {
    event.preventDefault();
    setText(text);
    setDisplayText(true);
  };

  //handle url submit button
  const handleUrlSubmit = (event) => {
    event.preventDefault();
    setShortUrl(url);
    setDisplayUrl(true);
  };

  //handle the switch functionality
  const handleSwitch = (ev) => {
    setQr(!ev);
  };

  //download function
  const handleDownload = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="lg:text-[60px] flex justify-center items-center text-24 text-black font-700 mb-[40px]">
            QR Code Generator
          </h1>
          <div className="flex lg:gap-10 gap-4 items-center justify-center mb-[2rem]">
            <Button
              title="Text"
              onClick={() => handleSwitch(false)}
              sign={<FaAlignJustify />}
            />
            <Button
              title="URL"
              onClick={() => handleSwitch(true)}
              sign={<FaLink />}
            />
          </div>

          {qr ? (
            <div className="flex flex-col items-center justify-center">
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleTextSubmit}
              >
                <input
                  type="text"
                  id="textInput"
                  value={text}
                  placeholder="Input your contents..."
                  onChange={handleTextChange}
                  className=" lg:w-[35rem] w-[20rem] lg:h-[4rem] h=[1rem] p-3 rounded-[20px] mb-[2rem] text-gray text-normal border-grey input"
                />
                <Button title="Generate QR Code" type="submit" />
              </form>

              <div className="h-[17rem] w-[20rem] border-2 mt-8 border-grey flex justify-center gap-4 items-center mb-12">
                {displayText ? (
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <QRCode
                      value={text}
                      id="myqr"
                      color="#407BFF"
                      bgColor="#ffffff"
                    />

                    <Button
                      title="Download"
                      onClick={handleDownload}
                      sign={<FaCloudDownloadAlt />}
                    />
                  </div>
                ) : (
                  <div>
                    <img src={empty} alt="" className="h-[10rem] w-[10rem]" />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleUrlSubmit}
              >
                <input
                  type="url"
                  id="fileInput"
                  placeholder="https://www.yourlink.com"
                  value={url}
                  onChange={handleUrlChange}
                  className=" lg:w-[35rem] w-[20rem] lg:h-[4rem] h=[1rem] p-3 rounded-[20px] mb-[2rem] text-gray text-normal border-grey input"
                />
                <Button title="Generate QR Code" type="submit" />
                <div className="mt-3 w-[15rem]  truncate">
                  {shortUrl && (
                    <p>
                      <span className="text-[20px] font-700">URL:</span>
                      <a
                        href={shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-primary  text-normal font-500 ml-3"
                      >
                        {shortUrl}
                      </a>
                    </p>
                  )}
                </div>
              </form>
              <div className="h-[17rem] w-[20rem] border-2 mt-8 border-grey flex justify-center gap-4 items-center mb-12">
                {displayUrl ? (
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <QRCode
                      value={shortUrl || ""}
                      id="myqr"
                      color="#407BFF"
                      bgColor="#ffffff"
                    />
                    <Button
                      title="Download"
                      onClick={handleDownload}
                      sign={<FaCloudDownloadAlt />}
                    />
                  </div>
                ) : (
                  <div>
                    <img src={empty} alt="" className="h-[10rem] w-[10rem]" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QrCode;
