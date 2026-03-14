import React from 'react'
import MacWindow from './MacWindow'
import './sportify.scss'
const Sportify = () => {
  return (
    <MacWindow width="max(20vw,20rem)">
      <div className="sportify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/1aqKaWLMH7FpByDzriUiSc?utm_source=generator&theme=0" 
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Sportify