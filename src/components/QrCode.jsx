import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Header from "./Header";
import Button from "../reusables/Button";
import { QRCodeCanvas } from "qrcode.react";
import empty from "../assets/empty.png";
import Footer from "./Footer";

const QrCode = () => {
  const [text, setText] = useState("");
  // const [file, setFile] = useState(false);
  const [qr, setQr] = useState(false);

  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  const handleSwitch = (ev) => {
    setQr(!ev);
  };

  /*const handleClick = () => {
    setText(text);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFile(true);
    handleClick(text);
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

          <form action="">
            {qr ? (
              <>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={handleChange}
                  value={text}
                  placeholder="Write your contents..."
                  className=" lg:w-[35rem] w-[20rem] lg:h-[4rem] h=[1rem] p-3 rounded-[20px] mb-[2rem] text-gray text-normal border-grey input"
                />
                {/* <div className="flex items-center justify-center mb-[2rem]">
                  <Button title="Generate your QR Code" onClick={handleClick} />
            </div>*/}
              </>
            ) : (
              <input
                type="file"
                name=""
                id=""
                onChange={handleChange}
                value={text}
                placeholder="Write your contents..."
                className=" lg:w-[35rem] w-[20rem] lg:h-[4rem] h=[1rem] p-3 rounded-[20px] mb-[2rem] text-gray text-normal border-grey input"
              />
            )}
          </form>
        </div>
        <div className="h-[17rem] w-[20rem] border-2 border-grey flex justify-center items-center mb-12">
          {text.length > 0 ? (
            <>
              <QRCodeCanvas
                value={text}
                id="myqr"
                size={250}
                includeMargin={true}
              />
              <span className="cursor-pointer " onClick={handleDownload}>
                <FaCloudDownloadAlt size={25} />
              </span>
            </>
          ) : (
            <div>
              <img src={empty} alt="" className="h-[10rem] w-[10rem]" />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QrCode;
