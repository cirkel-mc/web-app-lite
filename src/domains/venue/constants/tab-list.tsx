import { TabItemType } from "@/views/common/ui/components/Tabs/types";
import Schedule from "../components/Schedule";
import About from "../components/About";

export const TAB_ITEMS: TabItemType[] = [
  { label: 'Schedule', component: <Schedule /> },
  { label: 'About', component: <About /> },
  { label: 'Terms & Condition', component: <div /> }
];