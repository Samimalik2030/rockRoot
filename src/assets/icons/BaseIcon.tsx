import { ReactNode } from "react";
import { COMMON_ICON_PROPS } from "../../constants/COMMON_ICON_PROPS";

export type CommonIconProps = {
  size?: number;
  color?: string;
  fill?: string;
};




interface BaseIconProps extends CommonIconProps {
  children: ReactNode;
}

function BaseIcon({
  color = COMMON_ICON_PROPS.color,
  size = COMMON_ICON_PROPS.size,
  children
}: BaseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default BaseIcon;
