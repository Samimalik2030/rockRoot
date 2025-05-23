import { rem } from "@mantine/core";

interface LinkedInIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function LinkedInIcon({ size, style, ...others }: LinkedInIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
        <path
          fill="#FFF"
          d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
        ></path>
      </g>
    </svg>
  );
}
