import { Routes, Route } from "react-router-dom";
import ImageList from "../components/ImageList/ImageList";
import ImageDetails from "../components/ImagesDetails/ImageDetails";

function CommonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ImageList />} />
      <Route path="/image-details/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CommonRoutes;
