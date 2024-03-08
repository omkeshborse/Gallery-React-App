import { useState } from "react";
import "./Image.css";
import { Link } from "react-router-dom";
function Image({ description, id, title, url }) {
  //   console.log(url);

  return (
    <>
      <Link to={`image-details/${id}`}>
        <img src={url} alt={title} />
      </Link>
    </>
  );
}
export default Image;
