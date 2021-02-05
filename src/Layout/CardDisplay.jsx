
import {useMemo} from 'react'
import Card from "../components/Cards";

export const CardDisplay = () => {
  const cardDetails = useMemo(() => [
    {
      num: 31454,
      item: "Ongoing metric",
    },
    {
      num: 2344,
      item: "Past metric",
    },
    {
      num: 14224,
      item: "Missed metric",
    },
    {
      num: 635,
      item: "Failed metric",
    },
    {
      num: 11334,
      item: "Pending metric",
    },
  ],[]);
  return (
    <div className="card-container flex-item">
      {cardDetails.map((detail) => (
        <Card {...detail} key={detail.num} />
      ))}
    </div>
  );
}
