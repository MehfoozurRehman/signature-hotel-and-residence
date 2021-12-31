import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import photoGalleryImg1 from "../Assets/photo-gallery/1.jpg";
import photoGalleryImg2 from "../Assets/photo-gallery/2.jpg";
import photoGalleryImg3 from "../Assets/photo-gallery/3.jpg";
import photoGalleryImg4 from "../Assets/photo-gallery/4.jpg";
import photoGalleryImg5 from "../Assets/photo-gallery/5.jpg";
import photoGalleryImg6 from "../Assets/photo-gallery/6.jpg";

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    photoGalleryImg1,
    photoGalleryImg2,
    photoGalleryImg3,
    photoGalleryImg4,
    photoGalleryImg5,
    photoGalleryImg6,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="photo__gallery__container__content">
      {images.map((src, index) => (
        <img
          loading="lazy"
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          alt="photo__gallery__container__content__img"
          className="photo__gallery__container__content__img"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
