import React from "react";
import "./Photos.css"

export default function Photos(props) {
  console.info(props.photos);

  if (props.photos)
    return (
      <div className="Photos container">
        <section>
          <div className="row">
           
            {props.photos.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="img-fluid "
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  else {
    return null;
  }
}
