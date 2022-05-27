import React from "react";
import styles from "./index.module.css";
// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className={styles.fileItems}>
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component
const ImageList = ({ images }) => {

  // render each image by calling Image component
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
      />
    );
  };

  // Return the list of files
  return <section className={styles.fileList}>{images.map(renderImage)}</section>;
};

export default ImageList;