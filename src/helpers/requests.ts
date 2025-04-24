import type { ResultData } from "./models";

const CAL_URL = import.meta.env.VITE_CALENDAR_API_URL;

export function getCalendar(startDate: string, endDate: string): Promise<ResultData> {
	const searchParams = new URLSearchParams();
	searchParams.append("starts_after", startDate);
	searchParams.append("starts_before", endDate);

	return fetch(`${CAL_URL}?${searchParams.toString()}`, { method: "GET" }).then((res) => res.json());
}
