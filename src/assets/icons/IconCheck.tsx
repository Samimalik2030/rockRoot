import BaseIcon, { CommonIconProps } from "./BaseIcon";



function IconCheck(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </BaseIcon>
  );
}

export default IconCheck;
