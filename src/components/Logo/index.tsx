import * as React from 'react'
import { SVGProps } from 'react'

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m.746 10.576-.04-1.714 10.022-4.11.046 1.993-7.48 2.974 7.62 2.999.046 2.016L.746 10.576M13.1 16.6 17.395.67h1.992L15.092 16.6H13.1Zm18.731-6.024-10.02 4.158-.047-2.016 7.478-2.999-7.617-2.974-.047-1.992 10.213 4.109.04 1.714Z"
      fill="#fff"
    />
  </svg>
)
