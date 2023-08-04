import React, { useState, useEffect } from "react";

export default function BackendTest() {
  const [resp, setResp] = useState("");
  useEffect(() => {
    fetch("/testEndPoint")
      .then((resp) => {
        // console.log(resp.text());
        return resp.text();
      })
      .then((data) => setResp(data));
  });
  return <p>{resp}</p>;
}

// export default BackendTest;
