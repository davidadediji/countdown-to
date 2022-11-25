import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
// import getRemainingTime from "../components/CountdownTimer";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('December 18 2022 12:00:00').getTime();

    interval.current = setInterval(() => {
        const now = new Date().getTime();
        const timeInterval = countdownDate - now;

        const days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);

        if (timeInterval < 0) {
            clearInterval(interval.current);
        } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current);
    };
  }, []);


  return (
    <main className="bg-background counterdown-height">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl text-primary mb-8">
            Countdown Timer
          </h2>
          <div className="bg-counterBg w-[1048px] h-[507px] rounded-[20px] flex flex-col items-center py-[39px]">
            <p className="text-[90px] leading-[104px] text-white">HNG ENDS</p>
            <p className="text-[#E9E9E9] text-[32px] leading-[36.9px] my-11">
              T - MINUS:
            </p>
            <div className="flex gap-[27px]">
              <div className="bg-[#080F1A] w-[199px] h-[199px] rounded-[22px] flex flex-col items-center justify-center">
                <p className="text-white font-black text-[64px]">
                  {timerDays}
                </p>
                <p className="text-[#BF4F7F] text-base">DAYS</p>
              </div>
              <div className="bg-[#080F1A] w-[199px] h-[199px] rounded-[22px] flex flex-col items-center justify-center">
                <p className="text-white font-black text-[64px]">
                  {timerHours}
                </p>
                <p className="text-[#BF4F7F] text-base">HOURS</p>
              </div>
              <div className="bg-[#080F1A] w-[199px] h-[199px] rounded-[22px] flex flex-col items-center justify-center">
                <p className="text-white font-black text-[64px]">
                  {timerMinutes}
                </p>
                <p className="text-[#BF4F7F] text-base">MINUTES</p>
              </div>
              <div className="bg-[#080F1A] w-[199px] h-[199px] rounded-[22px] flex flex-col items-center justify-center">
                <p className="text-white font-black text-[64px]">
                  {timerSeconds}
                </p>
                <p className="text-[#BF4F7F] text-base">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Countdown;
