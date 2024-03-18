import React from "react";
import DataTable from "react-data-table-component";
import './home.scss'
export default function Home({ photos }) {
  const columns = [
    {
      name: "albumId",
      selector: (row) => row.albumId,
    },
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "URL",
      selector: (row) => row.url,
      cell: (row) => {
        return (
          <div>
            <img src={row.url} height={40} alt="url" />
          </div>
        );
      },
    },
    {
      name: "thumbnailUrl",
      selector: (row) => row.thumbnailUrl,
      cell: (row) => {
        return (
          <div>
            <img src={row.thumbnailUrl} height={40} alt="url" />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable pagination columns={columns} data={photos} />
    </div>
  );
}