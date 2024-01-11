import React from "react";

const ProductTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className=" mb-3 mx-5 ">
        <h3>New Products</h3>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-6">
              Name
            </th>
            <th scope="col" className="px-6 py-6">
              Product Code
            </th>
            <th scope="col" className="px-6 py-6">
              customer
            </th>
            <th scope="col" className="px-6 py-6">
              Status
            </th>
            <th scope="col" className="px-6 py-6">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white    border-b group ">
            <th
              scope="row"
              className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap  "
            >
              Sofa
            </th>
            <td className="px-6 py-4">#PHD001</td>
            <td className="px-6 py-4">abc@gmail.com</td>
            <td className="px-6 py-4">Out Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>
          <tr className="bg-slate-50   border-b ">
            <th
              scope="row"
              className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap "
            >
              Computer
            </th>
            <td className="px-6 py-4">#PHD002</td>
            <td className="px-6 py-4">cdc@gmail.com</td>
            <td className="px-6 py-4">In Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>
          <tr className="bg-slate-50     border-b ">
            <th
              scope="row"
              className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap d"
            >
              Mobile
            </th>
            <td className="px-6 py-4">#PHD003</td>
            <td className="px-6 py-4">pqr@gmail.com</td>
            <td className="px-6 py-4">Out Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>
          <tr className="bg-slate-50   border-b">
            <th
              scope="row"
              className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap "
            >
              Coat
            </th>
            <td className="px-6 py-4">#PHD004</td>
            <td className="px-6 py-4">bcs@gmail.com</td>
            <td className="px-6 py-4">In Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>
          <tr className="bg-slate-50    border-b ">
            <th
              scope="row"
              className="px-6 py-6  font-medium text-gray-900 whitespace-nowrap "
            >
              Watch
            </th>
            <td className="px-6 py-4">#PHD005</td>
            <td className="px-6 py-4">cdc@gmail.com</td>
            <td className="px-6 py-4">In Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>

          <tr className="bg-slate-50    border-b ">
            <th
              scope="row"
              className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap "
            >
              Shoes
            </th>
            <td className="px-6 py-4">#PHD006</td>
            <td className="px-6 py-4">pqr@gmail.com</td>
            <td className="px-6 py-4">out Stock</td>
            <td className="px-6 py-4 text-yellow-300 ">
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
              <td className=" fa fa-star f-12"></td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
