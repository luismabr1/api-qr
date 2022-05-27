import React, { useCallback, useState } from "react";

import Dropzone from "../Dragzone";
import ImageList from "../ImageList";
import styles from "./index.module.css"

// cuid is a simple library to generate unique IDs
import cuid from "cuid";

function DragDrop() {
  // Create a state called images using useState hooks and pass the initial value as empty array
  const [images, setImages] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // Loop through accepted files
    acceptedFiles.map(file => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      console.log(file.path)
      reader.readAsDataURL(file);
      return file;
    });
  }, [])


  return (
    <div className={styles.containerMain}>
      <h1 >Foto</h1>
      <Dropzone onDrop={onDrop} accept={"image/webp"} />
      <ImageList images={images} />
    </div>
  );

}

export default DragDrop