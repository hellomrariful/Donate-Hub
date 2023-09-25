import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [donation, setDonation] = useState([]);
  
  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    setDonation(donationItem || []);
  }, []);

  const totalDonation = 12;

  const yourDonationPercentage = (donation.length / totalDonation) * 100;
  const remainingPercentage = 100 - yourDonationPercentage;

  const data = [
    { name: "Your Donation", value: yourDonationPercentage },
    { name: "Remaining", value: remainingPercentage },
  ];

  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius =
      innerRadius +
      (yourDonationPercentage === 0 ? 0 : (outerRadius - innerRadius) * 0.5);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <style>
        {`
          .custom-pie-chart path:focus {
            outline: none;
          }
        `}
      </style>
      <div className="flex justify-center mt-52">
        <PieChart width={400} height={400} className="custom-pie-chart">
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={196}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center mt-20 gap-10">
        <div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-xl">Your Donation</div>
            <div className=" border-y-8 border-[#00C49F]"></div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="text-xl">Total Donation</div>
            <div className="border-y-8 border-[#FF444A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
