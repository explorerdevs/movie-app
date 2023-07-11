import { cn } from "@/lib";

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string;
  imageClassName?: string;
}

// !! Refactor this component later
const ResponsiveImage = ({
  alt,
  src,
  className,
  width = 700,
  height = 475,
  loading = "lazy",
  imageClassName,
  ...rest
}: Props) => (
  <figure className={cn(className)}>
    <img
      src={src}
      alt={alt}
      className={cn("", imageClassName)}
      width={width}
      height={height}
      placeholder="blur"
      {...rest}
    />
  </figure>
);

export { ResponsiveImage };
