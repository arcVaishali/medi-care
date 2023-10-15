import React from "react";
import axios from "axios";
const IPFSPinataJSON = () => {
  const object = {
    name: "ananya",
    age: "16",
  };
  const res = JSON.stringify(object);
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2NmQwZGViZS0wMzg3LTRkMzctOGY3My1mZDYzMmZkMDVhM2QiLCJlbWFpbCI6InZhaXNoYWxpcmRqMTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImE3YmZlMWU0YjJjNDIwZWVhMmY0Iiwic2NvcGVkS2V5U2VjcmV0IjoiYTQyY2Y3MWE4NzJkMmM3ODdiM2U1YjIwNjQ2N2ZmYjkzYmE4Yjk3YTQ1ODg2YjdlZTdhNjkyYTc5ZjZkNjVlYyIsImlhdCI6MTY5NzM0MTkyNH0.Crn8msGZTvgayd1FYfoOSOsjlvXALeHNssOVxYraOm0",
    },
    body: JSON.stringify({
      pinataContent: res,
    }),
  };

  fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>IPFSPinataJSON</div>;
};

export default IPFSPinataJSON;
