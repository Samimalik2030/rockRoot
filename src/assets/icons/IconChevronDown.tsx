import BaseIcon, { CommonIconProps } from "./BaseIcon";



function IconChevronDown(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </BaseIcon>
  );
}

export default IconChevronDown;
