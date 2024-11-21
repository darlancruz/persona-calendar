import { useState } from "react";

import dayjs from "dayjs";

import { getMonth } from "../lib/getMonth";
import { days} from "../lib/utils"

interface Props {
  game: string
}

export default function Page({game}:Props) {
  const monthId = 2;
  const year = 2024
  const month = getMonth(monthId, year);

  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(
    dayjs().year(year).month(monthId).date(1)
  );

  const getCalendarTheme = () => {
    if (game === "p3p") return "";
    if (game.includes("p3")) return "p3";
    if (game.includes("p4")) return "p4";
    if (game.includes("p5")) return "p5";
  };

  return (
    <div className={getCalendarTheme()+" "+"flex group flex-col items-center bg-secondary w-screen min-h-screen pb-5 font-persona3 overflow-hidden"}>
      <header className="group-[.p4]:p4_header group-[.p5]:lg:absolute flex flex-col md:flex-row group-[.p5]:justify-center lg:justify-center items-center h-auto mb-4 w-full bg-primary group-[.p5]:lg:bg-transparent group-[.p5]:bg-white p-2 z-20 group-[.p5]:-rotate-2 relative">
        <p className="group-[.p5]:hidden flex items-center justify-center w-full lg:w-4/5 h-full font-extrabold text-center max-w-2xl text-calendar-title text-2xl lg:text-5xl lg:leading-none uppercase group-[.p4]:capitalize">
          Calendar
        </p>

        <div className="flex gap-3 items-center group-[.p5]:lg:w-72 group-[.p5]:w-72 w-full max-w-3xl justify-between px-8 py-1 h-full rounded-lg group-[.p4]:bg-primary group-[.p5]:lg:ml-80">
          <button
            className="group-[.p5]:bg-black group-[.p5]:border-white group-[.p5]:border-solid group-[.p5]:border-4 group-[.p5]:p-1.5"
          >
            <img
              src="/arrow.svg"
              alt="previous moth"
              width={32}
              height={48}
            />
          </button>

          <span className="group-[.p5]:hidden flex justify-between text-white text-xl lg:text-2xl font-medium w-32">
            <span>{year}</span>
            <span className="font-extrabold">/</span>
            <span>{monthId + 1}</span>
          </span>

          <span className="hidden group-[.p5]:inline-block text-center uppercase w-16 text-secondary text-3xl font-extrabold bg-white">
            {dayjs(currentDate).format("MMM")}
          </span>

          <button
            className="group-[.p5]:bg-black group-[.p5]:border-white group-[.p5]:border-solid group-[.p5]:border-4 group-[.p5]:p-1.5"
          >
            <img
              className="rotate-180"
              src="/arrow.svg"
              alt="next moth"
              width={32}
              height={48}
            />
          </button>
        </div>
      </header>

      <div className="group-[.p5]:lg:flex-row flex flex-col lg:flex-row-reverse lg:items-start justify-center lg:gap-8 px-2 lg:px-10 group-[.p5]:p-8 items-center w-full max-w-screen-sm lg:max-w-7xl">
        <section className="group-[.p5]:-rotate-3">
          <div className="flex justify-between w-full text-center text-calendar-day-default drop-shadow-p3 font-bold lg:text-2xl">
            <span className="w-1/6 text-calendar-day-sunday">Su</span>
            <span className="w-1/6">M</span>
            <span className="w-1/6">Tu</span>
            <span className="w-1/6">W</span>
            <span className="w-1/6">Th</span>
            <span className="w-1/6">F</span>
            <span className="w-1/6 text-calendar-day-saturday">Sa</span>
          </div>

          <div className="w-full p-1 flex flex-wrap">
            {month.map((week, index) => {
              return (
                <span
                  className="flex fex-col justify-between items-center w-full mb-1"
                  key={index}
                >
                  {week.map((date, index) => {
                    const day = date?.get("day");

                    const isSelectedDate =
                      date?.get("date") === currentDate.get("date");

                    const isSaturday = day === 6;
                    const isSunday = day === 0;

                    return date ? (
                      <div
                        onClick={() => setCurrentDate(date)}
                        className={
                          `${
                            isSelectedDate
                              ? "bg-calendar-box-selected"
                              : "bg-calendar-bg"
                          }` +
                          " flex flex-col px-1 pb-1 items-center w-1/6 cursor-pointer"
                        }
                        key={index}
                      >
                        <span
                          className={
                            `${
                              isSelectedDate
                                ? "text-calendar-number-selected"
                                : isSaturday
                                ? "text-calendar-number-saturday"
                                : isSunday
                                ? "text-calendar-number-sunday"
                                : "text-calendar-number-default"
                            }` +
                            " leading-none text-base lg:text-xl text-center w-full group-[.p5]:w-3 font-bold group-[.p5]:lg:h-20 group-[.p5]:text-3xl group-[.p5]:sm:text-5xl group-[.p5]:lg:text-6xl group-[.p5]:font-extrabold group-[.p5]:flex group-[.p5]:items-center group-[.p5]:justify-center"
                          }
                        >
                          {date.get("date")}
                        </span>
                        <div
                          className={
                            `${
                              isSelectedDate
                                ? "bg-calendar-box-selected"
                                : isSaturday
                                ? "bg-calendar-box-saturday"
                                : isSunday
                                ? "bg-calendar-box-sunday"
                                : "bg-calendar-box-default"
                            }` +
                            " w-full min-h-8vmin lg:min-h-min lg:h-14 group-[.p5]:hidden"
                          }
                        ></div>
                      </div>
                    ) : (
                      <div key={index} className="px-2 w-1/6" />
                    );
                  })}
                </span>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-4 p-2  w-full lg:w-2/3 relative  group-[.p5]:mt-8  group-[.p5]:lg:mt-0  group-[.p5]:">
          <div className="hidden group-[.p5]:inline bg-primary h-[95rem] absolute -top-1 lg:-top-[90px] -right-64 lg:-right-[20%] w-[300%] lg:w-[120%] lg:rotate-12 z-0" />

          <header className="z-10 bg-primary group-[.p5]:bg-secondary rounded-md group-[.p5]:rounded-none group-[.p5]:-rotate-2 h-8 lg:h-10 flex gap-5 items-center px-5 text-white font-bold lg:text-xl group-[.p5]:w-1/2 group-[.p5]:self-center group-[.p5]:lg:ml-28  group-[.p5]:lg:mt-10 group-[.p5]:justify-center">
            <span>{currentDate.get("month") + 1}</span>
            <span className="font-extrabold">/</span>
            <span>{currentDate.get("date")}</span>
            <span>({days[currentDate.get("day")]})</span>
          </header>
          <div className="z-10 flex flex-col gap-2 capitalize group-[.p5]:lg:ml-24 group-[.p5]:lg:mt-16">
          <div className="flex flex-col w-full text-txt relative">
      <span className="font-extrabold drop-shadow-p3 lg:text-xl group-[.p4]:text-white group-[.p5]:text-white z-10  group-[.p5]:-rotate-1  group-[.p5]:lg:text-2xl">
        Teste      </span>
      <div className="hidden group-[.p5]:inline absolute bg-secondary w-screen h-4 left-3 top-3 lg:top-5" />
      <span className="font-bold border-primary border-solid group-[.p5]:border-none border-l-8 border-b-2 p-1 px-3 lg:text-lg z-10">
       TEste
      </span>
    </div>
          </div>
        </section>
      </div>
    </div>
  );
}




