import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      height={props.height}
      width={props.width}
      fill={props.color}
      {...props}
      stroke={props.color}

    >
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
    </Svg>
  )
}

export default SvgComponent
