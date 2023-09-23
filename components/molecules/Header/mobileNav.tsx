import React, { useState } from "react";
import { NavItem } from "@/components/data/navigationData";
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";

interface MobileNavProps {
  data: NavItem[];
}

const SubNav = ({ items }: { items: NavItem[] }) => (
  <ul className='pl-3 pt-4'>
    {items.map((item) => (
      <li key={item.label} className='py-2.5'>
        <Link
          href={item.url}
          className={`text-[17px] text-[#0E0D35B2]`}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const MobileNav = ({ data }: MobileNavProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSubNav = (label: string) => {
    if (activeItem === label) {
      setActiveItem(null);
    } else {
      setActiveItem(label);
    }
  };

  return (
    <nav className='bg-white h-full pt-5 w-full'>
      <ul>
        {data.map((item) => (
          <li
            key={item.label}
            className='last:border-none border-b border-[#0E0D3570] px-3.5 py-5'
          >
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleSubNav(item.label)}
            >
              {item.items ? (
                <span
                  className={`text-[17px] font-medium text-[#0E0D35B2] ${
                    activeItem === item.label && item.items
                      ? " !text-[#4E4BED]"
                      : ""
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className={`text-[17px] font-medium text-[#0E0D35B2]`}
                >
                  {item.label}
                </Link>
              )}
              {item.items && (
                <ExpandMore
                  className={`text-2xl transition-all ease-in-out duration-300 transform ${
                    activeItem === item.label && item.items
                      ? "rotate-180 text-[#4E4BED]"
                      : ""
                  }`}
                />
              )}
            </div>
            {activeItem === item.label && item.items && (
              <SubNav items={item.items} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
