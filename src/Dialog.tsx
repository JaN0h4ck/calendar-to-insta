import { useQuery } from "@tanstack/react-query";
import { getCalendar } from "./helpers/requests";
import type { ResultData } from "./helpers/models";
import { useState } from "react";
import { format, nextSunday, previousMonday } from "date-fns";

export function Dialog() {
	const [startDate, setStartDate] = useState<string>(format(previousMonday(new Date()), "yyyy-MM-dd"));
	const [endDate, setEndDate] = useState<string>(format(nextSunday(new Date()), "yyyy-MM-dd"));

	console.log(startDate);

	const { data } = useQuery<ResultData, Error, ResultData, Array<string>>({
		queryKey: [startDate, endDate],
		queryFn: ({ queryKey }) => getCalendar(queryKey[0], queryKey[1]),
	});

	return (
		<>
			<h1>Calendar to Insta App</h1>
			<div>
				<div>
					<p>Select a period</p>
					<label htmlFor="startDate">Start Date: </label>
					<input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
					<label htmlFor="endDate"> End Date: </label>
					<input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
				</div>
			</div>
		</>
	);
}
