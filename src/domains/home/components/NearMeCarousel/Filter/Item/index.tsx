import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { twMerge } from "tailwind-merge"

interface FilterItemProps {
  itemKey: string;
  label: string;
  activeKey: string;
  onClick: () => void;
  Icon: IconDefinition;
}

const FilterItem = ({ itemKey, label, activeKey, onClick, Icon }: FilterItemProps) => {
  return (
    <div
      className={twMerge(
        'flex gap-2 items-center rounded-xl p-2 border-[1px] shadow-input',
        activeKey === itemKey
          ? 'text-primary-30 border-primary-30'
          : 'border-neutral-200 text-neutral-500',
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={Icon} className="w-4 h-4" />
      <span>{label}</span>
    </div>
  )
}

export default FilterItem