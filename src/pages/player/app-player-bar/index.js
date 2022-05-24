import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Slider } from "antd";
import { AppPlayerBar, Control, PlayInfo, Operator } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "../store/actionCreators";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

const XXAppPlayerBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // redux-hook
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  // other hook
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singers = currentSong.ar || ["未知歌手"];
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };
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
  const changeSequence = () => {};

  return (
    <AppPlayerBar className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>

        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt=""></img>
            </a>
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

        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} />
    </AppPlayerBar>
  );
});

export default XXAppPlayerBar;
