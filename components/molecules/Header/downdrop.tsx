import { ExpandMore } from "@mui/icons-material";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface DropdownItem {
  label: string;
  url: string;
}

interface DropdownMenuProps {
  label: string;
  url: string;
  items?: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, url }) => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const hasDropdownItems = items && items.length > 0;

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isActive = (url: string) => {
    return router.asPath === url;
  };

  return (
    <div
      className={`relative group`}
      onMouseEnter={handleDropdownToggle}
      onMouseLeave={handleDropdownToggle}
    >
      {hasDropdownItems ? (
        <div className='relative h-full w-full z-[100]'>
          <Link
            href={url.toLowerCase()}
            className={`flex items-center gap-1.5 justify-center text-[#676C7A] text-base capitalize duration-300 transition relative ${
              router.asPath.includes(url.toLowerCase())
                ? "!text-[#4E4BED] font-bold"
                : "hover:scale-95"
            }`}
          >
            {router.asPath.includes(url.toLowerCase()) && (
              <span className='w-6 h-1 rounded-full bg-[#4E4BED] absolute -bottom-1 left-[40%] -translate-x-1/2'></span>
            )}
            <span className='text-base'>{label}</span>
            <ExpandMore
              className={`text-2xl transition-all ease-in-out duration-300 transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
          <div
            className={`absolute -left-14 bg-white shadow-[0px_10px_80px_rgba(0,_0,_0,_0.32)] space-y-2 w-[200px] block ${
              isDropdownOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }  transition-all ease-in-out duration-300 transform ${
              isDropdownOpen ? "" : "pointer-events-none"
            }`}
          >
            {items!.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className={`flex items-center !pl-4 !pr-10 !py-4 whitespace-nowrap w-full my-auto last:border-none border-b border-[#0E0D3570] ${
                  isActive(item.url) ? "" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <span className='cursor-not-allowed text-[#676C7A] text-base pl-4 pr-10'>
          {label}
        </span>
      )}
    </div>
  );
};

export default DropdownMenu;
