import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { message, Slider } from "antd";
import classnames from "classnames";
import { AppPlayerBar, Control, PlayInfo, Operator } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentIndexAndSongAction,
  changePlaySequenceAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "@/hook/useOnClickOutside";

const XXAppPlayerBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLock, setIsLock] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  const [isShowVolume, setIsShowVolume] = useState(false);
  const [listening, setListening] = useState(false);
  const [bottom, setBottom] = useState("-40");

  // redux-hook
  const dispatch = useDispatch();
  const {
    currentSong,
    playList,
    currentSongIndex,
    sequence,
    lyricList,
    currentLyricIndex,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  // other hook
  const audioRef = useRef(null);
  const playbarRef = useRef(null);
  // useEffect(() => {
  //   dispatch(getSongDetailAction(1480378513));
  // }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  useOnClickOutside(listening, setListening, playbarRef, setIsShowVolume);

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singers = currentSong.ar || ["未知歌手"];
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const changeMusic = (tag) => {
    if (sequence === 2 || playList.length === 1) {
      //单曲循环或播放列表只有一首
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }
    dispatch(changeCurrentIndexAndSongAction(tag));
  };
  // audio播放时长更新
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    // 未拖拽进度条
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }
    // 获取当前歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content;

      message.open({
        key: "lyric",
        content: content,
        duration: 0,
        className: "lyric-class",
      });
    }
  };
  // 播放进度修改
  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setProgress(value);
      setCurrentTime(currentTime);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);
      // 拖动后自动播放，网易云已取消该功能
      // if (!isPlaying) {
      //  playMusic()
      // }
    },
    [duration]
  );
  const sliderTipformat = useCallback(() => {
    return formatDate(currentTime, "mm:ss");
  }, [currentTime]);

  const changeLockMode = useCallback(() => {
    setIsLock(!isLock);
    // if (isLock) {
    //   setIsShow(true);
    // }
  }, [isLock]);

  const handleMouseEnter = useCallback((e) => {
    setBottom("0");
  }, []);
  const handleMouseLeave = useCallback(
    (e) => {
      if (isLock) {
        setBottom("0");
      } else {
        setBottom("-40");
      }
    },
    [isLock]
  );
  // 改变播放
  const changeSequence = () => {
    let newSequence = sequence + 1;
    if (newSequence > 2) {
      newSequence = 0;
    }
    dispatch(changePlaySequenceAction(newSequence));
  };
  // 音乐播放完毕
  const handleMusicEnded = () => {
    if (sequence === 2 || playList.length === 1) {
      //单曲循环 或者列表只有一首
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };
  // 改变音量
  const volumeChange = useCallback((value) => {
    audioRef.current.volume = value / 100;
  }, []);

  return (
    // <CSSTransition in={isShow} classNames={"unlock"} timeout={2000}>

    // </CSSTransition>

    <AppPlayerBar
      className={classnames({
        sprite_player: true,
      })}
      style={{ bottom: bottom + "px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isLock={isLock}
    >
      <div className="playbar" ref={playbarRef}>
        <div className="sprite_player top">
          <div
            className="sprite_player lock-icon"
            onClick={changeLockMode}
          ></div>
        </div>
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button
              className="sprite_player prev"
              onClick={(e) => changeMusic(-1)}
            ></button>
            <button
              className="sprite_player play"
              onClick={(e) => playMusic()}
            ></button>
            <button
              className="sprite_player next"
              onClick={(e) => changeMusic(1)}
            ></button>
          </Control>

          <PlayInfo>
            <div className="image">
              <NavLink to="/discover/player">
                <img src={getSizeImage(picUrl, 35)} alt=""></img>
              </NavLink>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong.name}</span>
                <span className="singer-name">
                  {singers.map((item, index) => {
                    return (
                      <Fragment key={item.name + ""}>
                        <a href={"/artist?id=" + item.id}>{item.name}</a>
                        {singers.length !== index + 1 ? "/" : ""}
                      </Fragment>
                    );
                  })}
                </span>
              </div>
              <div className="progress">
                <Slider
                  defaultValue={30}
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  tipFormatter={sliderTipformat}
                ></Slider>
                <div className="time">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="total-time">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>

          <Operator sequence={sequence} isShowVolume={isShowVolume}>
            <div className="left">
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
            </div>
            <div className="right sprite_player">
              <div className="volume_bar sprite_player">
                <Slider
                  vertical
                  defaultValue={30}
                  onChange={volumeChange}
                ></Slider>
              </div>
              <button
                className="sprite_player btn volume"
                onClick={(e) => setIsShowVolume(!isShowVolume)}
              ></button>
              <button
                className="sprite_player btn loop"
                onClick={(e) => changeSequence()}
              ></button>
              <button className="sprite_player btn playlist"></button>
            </div>
          </Operator>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded()}
      />
    </AppPlayerBar>
  );
});

export default XXAppPlayerBar;
