import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultStore = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0,
  showPlayList: false,

  songInfo: { song: {}, lyricList: [] },
  simiPlaylist: [],
  simiSongs: [],
});
function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_SHOW_PLAYLIST:
      return state.set("showPlayList", action.showPlayList);
    case actionTypes.CHANGE_SONG_INFO:
      return state.set("songInfo", action.songInfo);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs);
    default:
      return state;
  }
}
export default reducer;
