import axios from "axios";
import { useEffect, useState } from "react";
import "./ImageList.css";
import Image from "../ImageComponent/Image";
let url =
  "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";

function ImageList() {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchImages() {
    const response = await axios.get(url);
    // console.log(response.data.photos);
    setImagesList(response.data.photos);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      {isLoading ? (
        <section className="spinner">
          <span class="loader"></span>
        </section>
      ) : (
        <section className="image-list">
          <div className="image">
            {imagesList.map((i) => {
              console.log(i);
              const { description, id, title, url } = i;
              return <Image key={i.id} {...i} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}
export default ImageList;
