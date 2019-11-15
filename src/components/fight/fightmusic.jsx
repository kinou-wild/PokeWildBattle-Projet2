import React, { Component } from 'react';
import soundfile from '../assets/alert.mp3'
import Sound from 'react-sound'
 const firstMusic = () => {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={handleSongLoading}
   onPlaying={handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
}
export default firstMusic