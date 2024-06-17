import { TabItemType } from "@/views/common/ui/components/Tabs/types";
import DateRange from "../components/DateRange";

export const TAB_ITEMS: TabItemType[] = [
  { label: 'Schedule', component: <DateRange /> },
  { label: 'About', component: <div /> }
];