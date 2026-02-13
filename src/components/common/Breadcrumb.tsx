import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: Props) => {
  return (
    <nav className="mx-auto w-full max-w-[1220px] text-[16px] text-[#888888] md:text-[24px]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="">{item.label}</span>
            )}

            {index < items.length - 1 && (
              <span className="text-gray-500">{`>`}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
