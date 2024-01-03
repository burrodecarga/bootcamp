import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const Search = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 15 15"
    fill="none"
    {...props}
    stroke={props.color}
  >
    <Path
      d="M14.5 14.5L10.5 10.5M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5Z"
      stroke={props.color}
    />
  </Svg>
)
export default Search
