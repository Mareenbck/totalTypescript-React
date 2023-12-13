import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const NavBar = (props: {
    title: string;
    links: string[];
    children: React.ReactNode;
  }) => {
    return <div>Some content</div>;
  };
  
  
  type NavBarProps = ComponentProps<typeof NavBar>;

  type test = Expect<
    Equal<
      NavBarProps,
      {
        title: string;
        links: string[];
        children: React.ReactNode;
      }
    >
  >;