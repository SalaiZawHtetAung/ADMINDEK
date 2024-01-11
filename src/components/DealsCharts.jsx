// ApexLineChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";

const DealsChart = () => {
  const chartData = {
    series: [
      {
        name: "My First Series",
        data: [50, 40, 45, 30, 29, 15, 22, 71],
        // Adding an array of data to represent the filled area under the line
        // Set the values to cover the entire area you want to fill (in this case, the same as the line)
        fillColor: "#4285f4", // Color for the filled area
      },
    ],
    options: {
      chart: {
        type: "area", // Use 'area' type to fill the entire area under the line
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Jan", "Feb", "Feb", "Mar", "Mar", "Apr", "Apr"],
        title: {
          text: "Time",
        },
        labels: {
          rotate: -45,
          rotateAlways: true,
        },
        tickPlacement: "between",
      },
      yaxis: {
        title: {
          text: "Values",
        },
      },
      fill: {
        type: "solid",
        opacity: 0.3, // Adjust the opacity as desired
      },
      dataLabels: {
        enabled: false, // Optional: Disable data labels if not needed
      },
    },
  };

  return (
    <div className="bg-slate-50 p-4 rounded-lg shadow-md">
      <div className="px-8 mb-5 ">
        <h3 className="text-gray-700 font-semibold ">Deals Analytics</h3>
        <div className="w-16 border border-t-0 border-slate-400 mt-5"></div>
      </div>
      <ReactApexChart {...chartData} type="area" height={350} />
    </div>
  );
};

export default DealsChart;
