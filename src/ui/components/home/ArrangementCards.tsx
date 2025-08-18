import { useEffect, useState } from "react";
import ArrangementCard from "./ArrangementCard";
import type { ArrangementData } from "../../../../lib/definition";

const ArrangementCards = () => {
  const [arrangements, setArrangement] = useState<ArrangementData>([]);

  useEffect(() => {
    const fetchArrangement = async () => {
      const fetchData = await fetch("/api/arrangement");
      const data: ArrangementData = await fetchData.json();
      setArrangement(data);
    };
    fetchArrangement();
  }, []); // ✅ Only runs once on mount

  return (
    <div className="flex gap-10 flex-col lg:flex-row">
      {arrangements.map((data) => (
        <ArrangementCard key={data.name} data={data} />
      ))}
    </div>
  );
};

export default ArrangementCards;
