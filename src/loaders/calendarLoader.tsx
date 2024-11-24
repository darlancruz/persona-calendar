import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

const PathNames = {
  gameId: '/calendar/:gameId',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.gameId>>;
}

export interface CalendarData {
  game: string,
  limit_date:{
    initial_month: string,
    last_month: string,
    initial_year: number,
    last_year: number
  },
  events:{
    [year: string]: {
      [month: string]: {
        [date: string]: {
          event?: string;
          day_time?: string;
          school?: string;
          after_school?: string;
          night_time?: string;
        };
      };
    };
  }
}


export default async function calendarLoader({params}:Args) {
  const gameId = params.gameId as string;
  const response = await fetch(`/data/${gameId}.json`);

  try{
    const calendar = await response.json() as CalendarData;
    return calendar;
  }
  catch(e){
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
}