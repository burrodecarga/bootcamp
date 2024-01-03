import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height={props.height}
      width={props.width}
      stroke={props.color}
      {...props}>

      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </Svg >
  )
}

export default SvgComponent
