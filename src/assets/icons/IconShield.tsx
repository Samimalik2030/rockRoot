


import BaseIcon, { CommonIconProps } from "./BaseIcon";



function IconShield(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
    </BaseIcon>
  );
}

export default IconShield;
