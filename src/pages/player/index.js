import React, { memo } from 'react'
import { PlayerWrapper,PlayerLeft,PlayerRight } from './style'

const XXPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <PlayerLeft>
          <h2>XXPlayerInfo</h2>
          <h2>XXSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>XXSimiPlaylist</h2>
          <h2>XXSongContent</h2>
          <h2>DownLoad</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  ) 
})

export default XXPlayer
