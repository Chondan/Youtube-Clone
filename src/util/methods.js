function publishedTimeCalculator(DateTime) {
	const obj = { 
		dayInAYear: 365, monthInAYear: 12, secondInADay: 24 * 60 * 60, 
		hourInADay: 24, minuteInADay: 24 * 60,
	};
	const prefix = { minute: "minutes ago", hour: "hours ago", day: "days ago", month: "months ago", year: "years ago" };

	const today = new Date();
	const targetDate = new Date(DateTime);
	const secondDiff = (Date.parse(today) - Date.parse(targetDate)) / 1000;

	const dayDiff = secondDiff / obj.secondInADay;
	const yearDiff = dayDiff / obj.dayInAYear;
	const monthDiff = yearDiff * obj.monthInAYear;
	const hourDiff = dayDiff * obj.hourInADay;
	const minuteDiff = dayDiff * obj.minuteInADay;

	function floorAndPrefix(num, type) {
		return `${Math.floor(num)} ${prefix[type]}.`;
	}

	if (Math.floor(yearDiff) <= 0) {
		if (Math.floor(monthDiff) <= 0) {
			if (Math.floor(dayDiff) <= 0) {
				if (Math.floor(hourDiff) <= 0) {
					return floorAndPrefix(minuteDiff, "minute");
				}
				return floorAndPrefix(hourDiff, "hour");
			}
			return floorAndPrefix(dayDiff, "day");
		}
		return floorAndPrefix(monthDiff, "month");
	}
	return floorAndPrefix(yearDiff, "year");
}

export { publishedTimeCalculator };
