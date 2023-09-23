import React from "react";

interface FilterCardPropType {
  faculty: string;
  department: string;
  courses: string;
  level: string;
  setFaculty: (faculty: string) => void;
  setDepartment: (department: string) => void;
  setCourses: (courses: string) => void;
  setLevel: (level: string) => void;
}

const FilterCard: React.FC<FilterCardPropType> = ({
  faculty,
  department,
  courses,
  level,
  setCourses,
  setDepartment,
  setFaculty,
  setLevel,
}) => {
  return <div>FilterCard</div>;
};

export default FilterCard;
