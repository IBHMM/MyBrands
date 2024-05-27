import { Rating } from "@material-tailwind/react";


function RatingSize({ value }) {

  value = (Math.round(value) * 2) / 2;
  return (
    <Rating 
      precision={0.5}
      value={value}
      readonly
      size="small"
      name="customized-color"
      color="#fff"
    />
  );
}

export default RatingSize;
