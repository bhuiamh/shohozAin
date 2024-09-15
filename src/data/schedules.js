import { LucideTvMinimalPlay, ScrollText, TvMinimalPlay } from "lucide-react";

export const SCHEDULES = [
  {
    icon: ScrollText, // Storing the component reference, not JSX
    status: "Enrollment Starts",
    date: "10 December, 2024",
  },
  {
    icon: ScrollText,
    status: "Enrollment Ends",
    date: "24 December, 2024",
  },
  {
    icon: TvMinimalPlay,
    status: "Orientation Starts",
    date: "28 December, 2024",
  },
  {
    icon: LucideTvMinimalPlay,
    status: "Class Starts",
    date: "30 December, 2024",
  },
];
