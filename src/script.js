<script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>;

var qr;
(function () {
  qr = new QRious({
    element: document.getElementById("code"),
    size: 200,
    value: "JavaScript no be child play",
  });
})();
