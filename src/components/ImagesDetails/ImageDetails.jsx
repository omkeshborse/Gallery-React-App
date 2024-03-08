import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetails.css";
function ImageDetails() {
  const [imageDetails, SetImageDetails] = useState({
    description: "",
    title: "",
    url: "",
    user: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  async function fetchImageDetails() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    console.log(response.data.photo);
    SetImageDetails(response.data.photo);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchImageDetails();
  }, []);

  const { description, title, url } = imageDetails;
  return (
    <>
      {isLoading ? (
        <section className="spinner">
          <span class="loader"></span>
        </section>
      ) : (
        <section className="image-detail-wrapper">
          <div className="image-wrapper">
            <img src={url} alt={title} />
          </div>
          <div className="details-wrapper">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </section>
      )}
    </>
  );
}
export default ImageDetails;
