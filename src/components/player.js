import React from "react";

Player.propTypes = {
  voice: "",
};

export default function Player({ voice }) {
  if (!voice) {
    return null;
  }
  return (
    <div className="flex justify-center mb-6 pt-8 pb-6">
      <audio controls src={"data:audio/mpeg;base64," + voice} type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
