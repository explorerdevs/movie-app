interface IParams {
  readonly [key: string]: string | undefined;
}

interface IRoutesProps extends Array<IRoute> {}
interface IRoute {
  alt: string;
  href: string;

  icon: IconRFCType;
}

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}
type IconRFCType = (props: IconProps) => React.JSX.Element;
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
