  {
    $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
    $('button#next').on('click', function() {
      if (player.playState !== 'playing') { return; }
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }

      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);
  });
    $('button#previous').on('click', function() {
      if (player.playState !== 'playing') { return; }
      const CURRENT_SONG_INDEX = album.songs.indexOf(player.currentlyPlaying);
      const PREVIOUS_SONG_INDEX = CURRENT_SONG_INDEX - 1;
      if (PREVIOUS_SONG_INDEX < 0) { return; }

      const PREVIOUS_SONG = album.songs[PREVIOUS_SONG_INDEX];
      player.playPause(PREVIOUS_SONG);
  });


  setInterval( () => {
     if (player.playState !== 'playing') { return; }
     const currentTime = player.getTime();
     const duration = player.getDuration();
     const percent = (currentTime / duration) * 100;

     $('#time-control .current-time').text(player.prettyTime(currentTime))
     $('#time-control .total-time').text(player.prettyTime(duration))

     $('#time-control input').val(percent);
     }, 1000);
     $('#time-control input').on('input', function (event) {
       player.skipTo(event.target.value);

   });
}
