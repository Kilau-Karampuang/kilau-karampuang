import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="flex justify-center mx-auto w-full max-w-2xl mb-24">
      <div className="relative" style={{ width: "100%", paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
