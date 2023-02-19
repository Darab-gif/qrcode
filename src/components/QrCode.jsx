import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Header from "./Header";
import Button from "../reusables/Button";
import empty from "../assets/empty.png";
import Footer from "./Footer";
import axios from "axios";
import QRCode from "qrcode.react";

const QrCode = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [fileShortUrl, setFileShortUrl] = useState("");
  const [qr, setQr] = useState(false);

  const handleTextChange = (ev) => {
    setText(ev.target.value);
  };

  //created file reader to handle the file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log({file})
    setFile(file);
  };

  const handleSwitch = (ev) => {
    setQr(!ev);
  };

  const handleTextSubmit = async (event) => {
    event.preventDefault();

    /*if (text) {
      try {
        const response = await axios.post(
          "https://tinyurl.com/api-create.php",
          {
            url: text,
            domain: "tiny.one",
            alias: "",
            format: "json",
            // Replace API_KEY with your TinyURL API key
            api_key:
              "nkSAyAXoCCNOsCaRM1JjxvAChHOfviDKZaDcWWAKxhGwc5eW1ypue9TH2N9w",
          }
        );
        setText(response.data.short_url);
      } catch (error) {
        console.error(error);
      }
    }*/
  };

  const handleFileSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = async (event) => {
          const body = {
            url: event.target.result.slice(0, 10),
            domain: `tiny.one`,
          };
          const apiKey = `nkSAyAXoCCNOsCaRM1JjxvAChHOfviDKZaDcWWAKxhGwc5eW1ypue9TH2N9w`;
          await fetch(`https://api.tinyurl.com/create`, {
            method: "post",
            headers: {
              authorization: ` Bearer ${apiKey}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((response) => {
              if (response.status !== 200) {
                console.log(
                  `There was a problem with the fetch operation. Status Code: ${response.status}`
                );
                return response.json();
              }
            })
            .then((data) => {
              console.log(data.data.tiny_url);
              setFileShortUrl(data.data.tiny_url);
            });
        };
        fileReader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
      }
    }
  };

  /*const handleFileSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
          console.log(event.target.result);
        };
        fileReader.readAsText(file);
      } catch (error) {
        console.error(error);
      }
    }
  };*/

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
  /*
  //shareButton functionality

  const handleShare = () => {
    const file = document.getElementById("myqr");

    if (navigator.share) {
      console.log(file.nodeValue);
      navigator.share({ file });
    }
  };*/
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="lg:text-[60px] flex justify-center items-center text-24 text-black font-700 mb-[40px]">
            QR Code Generator
          </h1>
          <div className="flex lg:gap-10 gap-4 items-center justify-center mb-[2rem]">
            <Button title="Text" onClick={() => handleSwitch(false)} />
            <Button title="Files" onClick={() => handleSwitch(true)} />
          </div>

          {qr ? (
            <div className="flex flex-col items-center justify-center">
              <form
                onSubmit={handleTextSubmit}
                className="flex flex-col items-center justify-center"
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
                {text && text.length > 0 ? (
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
                onSubmit={handleFileSubmit}
                className="flex flex-col items-center justify-center"
              >
                <input
                  type="file"
                  id="fileInput"
                  accept=".png, .jpg, .jpeg, .gif, .pdf, .docx, .doc"
                  onChange={handleFileChange}
                  className=" lg:w-[35rem] w-[20rem] lg:h-[4rem] h=[1rem] p-3 rounded-[20px] mb-[2rem] text-gray text-normal border-grey input"
                />
                <Button title="Generate QR Code" type="submit" />
                {fileShortUrl && (
                  <p>
                    Short URL:{" "}
                    <a href={fileShortUrl} target="_blank" rel="noreferrer">
                      {fileShortUrl}
                    </a>
                  </p>
                )}
              </form>
              <div className="h-[17rem] w-[20rem] border-2 mt-8 border-grey flex justify-center gap-4 items-center mb-12">
                {file && (
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <QRCode
                      value={fileShortUrl || ""}
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
