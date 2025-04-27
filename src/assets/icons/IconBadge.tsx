import BaseIcon, { CommonIconProps } from "./BaseIcon";



function IconBadge(props: CommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
    </BaseIcon>
  );
}

export default IconBadge;
