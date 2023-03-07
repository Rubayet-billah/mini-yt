import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTag, selectTag } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const selectedTag = tags.includes(title);

  const toggleSelect = () => {
    if (selectedTag) {
      dispatch(removeTag(title));
    } else {
      dispatch(selectTag(title));
    }
  };

  const style = selectedTag
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  return (
    <div className={style} onClick={toggleSelect}>
      {title}
    </div>
  );
};

export default Tag;

/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
  redux
</div> */
