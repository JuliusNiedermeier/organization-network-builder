import { Icon as HeroIcon } from "solid-heroicons";
import { Component, JSX } from "solid-js";

export type IconProps = {
  path: JSX.Element;
  outline?: boolean;
  mini?: boolean;
};

export const Icon: Component<{ path: IconProps }> = (props) => {
  return <HeroIcon path={props.path} height="1em" width="1em" />;
};
