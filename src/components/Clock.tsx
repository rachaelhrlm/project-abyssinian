import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";

const Clock: FC = () => {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en", { hour: "numeric", minute: "numeric" }));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div className="clock">{time}</div>;
};

export default observer(Clock);
