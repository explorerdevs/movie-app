interface IParams {
  [key: string]: string | undefined;
}

interface IRoutesProps extends Array<IRoute> {}
interface IRoute {
  alt: string;
  href: string;
  icon: (props: IconProps) => JSX.Element;
}
