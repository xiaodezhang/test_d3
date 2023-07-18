import { getData } from "./data";
import { Heatmap } from "./Heatmap";
import { useEffect, useState } from "react";

export const DynamicHeatmap = () => {
  const [data, setData] = useState(getData());
  console.log(data);
  useEffect(() => {
    const inter = setInterval(() => {
      setData(getData());
    }, 500);
    return clearInterval(inter);
  });
  return <Heatmap data={data} width={700} height={400} />;
};
