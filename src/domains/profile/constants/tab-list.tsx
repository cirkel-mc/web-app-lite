import { TabItemType } from "@/views/common/ui/components/Tabs/types";
import ReviewsWidget from "@/domains/profile/components/ReviewsWidget"

export const TAB_ITEMS: TabItemType[] = [
  { label: 'Review', component: <ReviewsWidget /> },
  { label: 'Activity', component: <div>Activity</div> }
];