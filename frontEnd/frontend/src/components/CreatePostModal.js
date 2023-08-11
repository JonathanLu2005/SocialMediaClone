import GenericModal from "./Modal";
import "../App.css";
import React, { useState } from "react";
import RadioSelector from "./RadioSelector";
import { getCookie } from "../utils";
function UploadImage({ setImg }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "0",
          textAlign: "center",
          borderBottom: "1px solid black",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          Create A Post
        </p>
      </div>
      {/* <img style={{ width: "5%", height: "5%" }} src={img}></img> */}
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0]; // Get the selected file from the input event

          if (file) {
            const reader = new FileReader(); // Create a new FileReader instance

            reader.onload = (e) => {
              // When the reader finishes loading the file
              setImg(e.target.result); // Update the img state with the data URL of the loaded image
            };

            reader.readAsDataURL(file); // Start reading the selected file as a data URL
          }
        }}
      ></input>
    </div>
  );
}
function DisplayAndEdit({ img }) {
  var cookie = getCookie("csrftoken");

  const [selected, setSelected] = useState(null);
  const [currentImg, setImg] = useState(img);
  const handleSelected = (num) => {
    let width;
    let height;
    if (num === 0) {
      setSelected({ width: 1080, height: 1080 }); //setting image dims
      width = 1080;
      height = 1080;
    }
    if (num === 1) {
      setSelected({ width: 1080, height: 566 });
      width = 1080;
      height = 566;
    } else {
      setSelected({ width: 1080, height: 1350 });
      width = 1080;
      height = 1350;
    }
    const formData = new FormData();
    formData.append("image", currentImg);
    formData.append("width", width);
    formData.append("height", height);

    // const csrfToken = document.querySelector(
    //   "[name=csrfmiddlewaretoken]"
    // ).value; //keeps django happy stops xss

    fetch("/api/resize/", {
      method: "POST",
      body: formData,
      headers: {
        "X-CSRFToken": cookie,
      },
    })
      .then((response) => setImg(response))
      // .then((data) => {
      //   // Handle the resized image data in the response
      //   console.log(data.resized_image);
      // })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <RadioSelector
        options={["Square Photo", "Landscape Photo", "Vertical Photo"]}
        setSelected={handleSelected}
      />
      <div>
        <img
          src={img}
          style={{
            objectFit: "contain",
          }}
        ></img>
      </div>
    </div>
  );
}
function CreatePostModal({ closeModal }) {
  const [img, setImg] = useState(null);
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        borderRadius: "6px",
        padding: "60px",
        position: "relative",
      }}
      className="modal-fade-in"
    >
      {img === null ? (
        <UploadImage setImg={setImg} />
      ) : (
        <DisplayAndEdit img={img} />
      )}
    </div>
  );
}

export default CreatePostModal;
