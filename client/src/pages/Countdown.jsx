import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 18 2022 12:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const timeInterval = countdownDate - now;

      const days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeInterval % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);

      if (timeInterval < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <main className="bg-white h-screen">
      <Container className="px-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl text-primary mb-8 max-[576px]:text-3xl">
            Countdown Timer
          </h2>
          <div className="w-[1048px] max-[1080px]:w-[900px] max-[900px]:w-[768px] max-[768px]:w-[600px] max-[600px]:w-[576px] max-[576px]:w-[400px] max-[400px]:w-[350px]">
            <div className="bg-counterBg w-[1048px] h-[507px] max-[1080px]:w-[900px] max-[1080px]:h-[450px] max-[900px]:w-[768px] max-[768px]:w-[600px] max-[768px]:h-[400px] max-[600px]:w-[576px] max-[576px]:w-[400px] max-[576px]:h-[350px] max-[400px]:w-[350px] rounded-[20px] flex flex-col items-center py-[39px]">
              <p className="text-[90px] leading-[104px] max-[1080px]:text-7xl max-[576px]:text-5xl text-white">HNG ENDS</p>
              <p className="text-[#E9E9E9] text-[32px] leading-[36.9px] my-11">
                T - MINUS:
              </p>
              <div className="flex gap-[27px] max-[576px]:gap-4">
                <div className="bg-[#080F1A] w-[199px] h-[199px] max-[1080px]:w-[150px] max-[1080px]:h-[150px] max-[768px]:w-[100px] max-[768px]:h-[100px] max-[576px]:w-[70px] max-[576px]:h-[70px] rounded-[22px] flex flex-col items-center justify-center">
                  <p className="text-white font-black text-[64px] max-[768px]:text-5xl max-[576px]:text-3xl">
                    {timerDays}
                  </p>
                  <p className="text-[#BF4F7F] text-base max-[768px]:text-xs">DAYS</p>
                </div>
                <div className="bg-[#080F1A] w-[199px] h-[199px] max-[1080px]:w-[150px] max-[1080px]:h-[150px] max-[768px]:w-[100px] max-[768px]:h-[100px] max-[576px]:w-[70px] max-[576px]:h-[70px] rounded-[22px] flex flex-col items-center justify-center">
                  <p className="text-white font-black text-[64px] max-[768px]:text-5xl max-[576px]:text-3xl">
                    {timerHours}
                  </p>
                  <p className="text-[#BF4F7F] text-base max-[768px]:text-xs">HOURS</p>
                </div>
                <div className="bg-[#080F1A] w-[199px] h-[199px] max-[1080px]:w-[150px] max-[1080px]:h-[150px] max-[768px]:w-[100px] max-[768px]:h-[100px] max-[576px]:w-[70px] max-[576px]:h-[70px] rounded-[22px] flex flex-col items-center justify-center">
                  <p className="text-white font-black text-[64px] max-[768px]:text-5xl max-[576px]:text-3xl">
                    {timerMinutes}
                  </p>
                  <p className="text-[#BF4F7F] text-base max-[768px]:text-xs">MINUTES</p>
                </div>
                <div className="bg-[#080F1A] w-[199px] h-[199px] max-[1080px]:w-[150px] max-[1080px]:h-[150px] max-[768px]:w-[100px] max-[768px]:h-[100px] max-[576px]:w-[70px] max-[576px]:h-[70px] rounded-[22px] flex flex-col items-center justify-center">
                  <p className="text-white font-black text-[64px] max-[768px]:text-5xl max-[576px]:text-3xl">
                    {timerSeconds}
                  </p>
                  <p className="text-[#BF4F7F] text-base max-[768px]:text-xs">SECONDS</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-14 mt-[54px] max-[576px]:justify-center">
              <Button className="bg-white text-secondary py-[17px] px-8 rounded-[64px] border border-secondary">
                Email Link
              </Button>
              <Button className="bg-secondary hover:bg-backgroundHover text-white py-[17px] px-8 rounded-[64px]">
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Countdown;
