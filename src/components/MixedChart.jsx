import React from "react";
import ReactApexChart from "react-apexcharts";

const MixedChart = () => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        background: "#5287fa", // Set the background color to #5287fa
      },
      colors: ["#FFFFFF", "#72a1f7"], // Set the color for the line and #72a1f7 for the bar
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 0], // Set the width of the line stroke for the first series
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          show: false, // Set to false to hide x-axis labels
        },
      },
      yaxis: [
        {
          show: false, // Set to false to hide left y-axis
          axisTicks: {
            show: false, // Set to false to hide ticks on the left y-axis
          },
          axisBorder: {
            show: false, // Set to false to hide the axis line on the left y-axis
          },
          labels: {
            show: false, // Set to false to hide labels on the left y-axis
            style: {
              colors: "#FFFFFF", // Set the color for the line
            },
          },
          title: {
            text: "Line Chart",
            style: {
              color: "#FFFFFF", // Set the color for the line
            },
          },
        },
        {
          opposite: true,
          show: false, // Set to false to hide right y-axis
          axisTicks: {
            show: false, // Set to false to hide ticks on the right y-axis
          },
          axisBorder: {
            show: false, // Set to false to hide the axis line on the right y-axis
          },
          labels: {
            show: false, // Set to false to hide labels on the right y-axis
            style: {
              colors: "#72a1f7", // Set #72a1f7 color for the bar
            },
          },
          title: {
            text: "Bar Chart",
            style: {
              color: "#72a1f7", // Set #72a1f7 color for the bar
            },
          },
          grid: {
            show: false, // Set to false to hide horizontal grid lines
          },
        },
      ],
      legend: {
        show: false, // Set to false to hide the legend
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "lightblue",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#FFFFFF", "#72a1f7"], // Set the color for the line and #72a1f7 for the bar
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
    },
    series: [
      {
        name: "Line Chart",
        type: "line",
        data: [30, 40, 25, 50, 49, 21, 70],
      },
      {
        name: "Bar Chart",
        type: "bar",
        data: [23, 12, 54, 61, 32, 56, 81],
      },
    ],
  };

  return (
    <div className=" rounded-xl overflow-hidden bg-[#5287fa]">
      <div className="row  flex justify-between bg-[#5287fa] text-slate-50 p-3">
        <div className="">
          <h6 className="mb-1">Sales In July</h6>
          <h5 className="font-semi">$2665.00</h5>
        </div>
        <div className="flex">
          <div className=" text-center mr-5">
            <p className="mb-1">Direct Sale</p>
            <h6 className="">$1768</h6>
          </div>
          <div className=" text-center">
            <p className="mb-1">Referal</p>
            <h6 className="">$897</h6>
          </div>
        </div>
      </div>

      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default MixedChart;
