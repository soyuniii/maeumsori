import { NumberProp, SvgProps } from "react-native-svg";

import * as Icons from "~/assets/icons";

export interface IconProps extends Omit<SvgProps, "width" | "height"> {
  name: keyof typeof Icons;
  size?: NumberProp;
}

export default function Icon({
  name,
  size = 50,
  fill = "#000",
  ...props
}: IconProps) {
  const IconComponent = (
    Icons as Record<string, React.ComponentType<SvgProps>>
  )[name];
  return <IconComponent width={size} height={size} fill={fill} {...props} />;
}
