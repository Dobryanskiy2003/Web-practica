import React, { useState, useEffect } from "react";

import alarmSound from "../../sounds/sound.mp3";
import styles from "./Timer.module.css";
import mainStyles from "../../styles/Main.module.css";


const CustomTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const audioFile = new Audio(alarmSound);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    audioFile.pause();
    audioFile.currentTime = 0;
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
    document.body.style.backgroundColor = "#b4ffbf";
    audioFile.pause();
    audioFile.currentTime = 0;
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            document.body.style.backgroundColor = "#FF8888";
            audioFile.play();
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(
        "timerState",
        JSON.stringify({ minutes, seconds })
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [minutes, seconds]);

  useEffect(() => {
    const savedTimerState = localStorage.getItem("timerState");

    if (savedTimerState) {
      const { minutes: savedMinutes, seconds: savedSeconds } = JSON.parse(
        savedTimerState
      );
      setMinutes(savedMinutes);
      setSeconds(savedSeconds);
    }
  }, []);

  const handleMinutesChange = (event) => {
    if (!isActive) {
      setMinutes(parseInt(event.target.value));
    }
  };

  const handleSecondsChange = (event) => {
    if (!isActive) {
      setSeconds(parseInt(event.target.value));
    }
  };

  return (
    <section className={styles["timer"]}>
      <div className={styles["timer__block"]}>
        <div className={styles["timer__container"]}>
          <div className={styles["timer__title"]}>
            <span>Timer</span>
          </div>
          <div className={styles["timer__content"]}>
            <div className={styles["timer__inner-container"]}>
              <div className={styles["timer__input"]}>
                <input
                  type="number"
                  value={minutes}
                  onChange={handleMinutesChange}
                  disabled={isActive}
                  min="0"
                />
                <span>minutes</span>
              </div>
              <div className={styles["timer__input"]}>
                <input
                  type="number"
                  value={seconds}
                  onChange={handleSecondsChange}
                  disabled={isActive}
                  min="0"
                  max="59"
                />
                <span>seconds</span>
              </div>
              <div className={styles["timer__btns"]}>
                <button
                  onClick={startTimer}
                  disabled={isActive}
                  className={mainStyles["btn-primary"]}
                >
                  Start
                </button>
                <button
                  onClick={stopTimer}
                  disabled={!isActive}
                  className={mainStyles["btn-secondary"]}
                >
                  Stop
                </button>
                <button
                  onClick={resetTimer}
                  className={mainStyles["btn-secondary"]}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTimer;