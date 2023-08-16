import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <div className="md:col-span-4 text-justify mb-4">
      <Component components={components} />
    </div>
  );
}
