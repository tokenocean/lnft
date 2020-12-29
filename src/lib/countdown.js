import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
  subSeconds,
  subMinutes,
  subHours,
} from "date-fns";

export default (d) => {
  let now = new Date();
  let days = differenceInDays(d, now);
  d = subDays(d, days);
  let hours = differenceInHours(d, now);
  d = subHours(d, hours);
  let minutes = differenceInMinutes(d, now);
  d = subMinutes(d, minutes);
  let seconds = differenceInSeconds(d, now);

  return `${days} days ${hours}:${minutes}:${seconds}`;
};