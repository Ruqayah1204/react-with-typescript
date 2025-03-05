import { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(120);

  useEffect(() => {
    if (countdown <= 0) {
      alert("Time up");
      return;
    }

    const timeInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timeInterval);
  });

  return <div className="timer">Time: {countdown}</div>;
};

export default Countdown;
