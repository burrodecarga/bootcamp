import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LogoutIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height={props.height}
      width={props.width}
      fill={props.color}
      {...props}
      stroke={props.color}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" />
    </Svg>
  )
}

export default LogoutIcon
