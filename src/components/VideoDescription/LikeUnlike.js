import React from "react";
import likeSvg from "../../assets/like.svg";
import unlikeSvg from "../../assets/unlike.svg";

const LikeUnlike = () => {
  return (
    <div class="flex gap-10 w-48">
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={likeSvg} alt="Like" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={unlikeSvg} alt="Unlike" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
