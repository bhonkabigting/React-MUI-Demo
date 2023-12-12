import { Box } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { useState } from "react";

export const MuiDateRangePicker = () => {
	const [value, setValue] = useState<DateRange<Date>>([null, null]);

	console.log({ value });

	return (
		<Box width="500px">
			<DateRangePicker
				localeText={{ start: "Check-in", end: "Check-out" }}
				slotProps={{ fieldSeparator: { children: "to" } }}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			></DateRangePicker>
		</Box>
	);
};
