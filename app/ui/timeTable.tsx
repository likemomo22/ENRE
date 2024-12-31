import React from "react";

type Props = {
  days: string[];
  periods: string[];
  selectedCells: { [key: number]: boolean[] };
  onCellToggle: (periodIndex: number, dayIndex: number) => void;
};

export default function TimeTableComponent({
  days,
  periods,
  selectedCells,
  onCellToggle,
}: Props) {
  return (
    <div>
      <h1 className="text-lg font-bold">
        授業や大学での予定がある時間を
        <br />
        タップしてください
      </h1>
      <div className="grid grid-cols-4 text-center text-xs">
        <div className="border p-6 border-white rounded-sm m-0.5 bg-green-600"></div>
        {days.map((day) => (
          <div
            key={day}
            className="border p-6 border-white bg-green-600 text-white font-bold rounded-sm m-0.5 flex items-center justify-center"
          >
            {`${day}`}
          </div>
        ))}
        {periods.map((period, periodIndex) => (
          <React.Fragment key={period}>
            <div
              key={period}
              className="border p-6 border-white bg-green-600 text-white font-bold rounded-sm m-0.5 flex items-center justify-center"
            >
              {`${period}`}
            </div>
            {days.map((day, dayIndex) => (
              <div
                key={`${day}-${period}`}
                className={`border p-6 cursor-pointer border-white rounded-sm m-0.5 ${
                  selectedCells[periodIndex][dayIndex] ? "bg-blue-200" : ""
                }`}
                onClick={() => onCellToggle(periodIndex, dayIndex)}
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
