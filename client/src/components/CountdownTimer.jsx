import dayjs from "dayjs";

const getRemainingTime = (timeStamp) => {
  const timeStampDayjs = dayjs(timeStamp);
  const nowDayjs = dayjs();
  return {
    seconds: getRemainingSeconds(nowDayjs, timeStampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timeStampDayjs),
    hours: getRemainingHours(nowDayjs, timeStampDayjs),
    days: getRemainingDays(nowDayjs, timeStampDayjs),
  };
};

export default getRemainingTime;

const getRemainingSeconds = (nowDayjs, timeStampDayjs) => {
  const seconds = timeStampDayjs.diff(nowDayjs, "seconds") % 60;
  return seconds;
};

const getRemainingMinutes = (nowDayjs, timeStampDayjs) => {
  const minutes = timeStampDayjs.diff(nowDayjs, "minutes") % 60;
  return minutes;
};

const getRemainingHours = (nowDayjs, timeStampDayjs) => {
  const hours = timeStampDayjs.diff(nowDayjs, "hours") % 24;
  return hours;
};

const getRemainingDays = (nowDayjs, timeStampDayjs) => {
  const days = timeStampDayjs.diff(nowDayjs, "days");
  return days;
};
