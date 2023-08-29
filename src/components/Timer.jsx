import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function CountdownTimer({ targetTime, onTimeExpired }) {
  const [currentTime, setCurrentTime] = useState(targetTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      if (currentTime <= 0) {
        onTimeExpired();
      }
    };
  }, [onTimeExpired, currentTime]);
  const seconds = currentTime % 60;
  const minutes = Math.floor((currentTime / 60) % 60);
  const hours = Math.floor((currentTime / 3600) % 24);

  return (
    <div>
      {currentTime <= 0 ? (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>Time's up!</p>
      ) : (
        <p>
          {hours < 10 ? "0" : ""}
          {hours}:{minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </p>
      )}
    </div>
  );
}

export default CountdownTimer;
