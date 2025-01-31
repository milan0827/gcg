"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface UserType {
  id: number;
  name: string;
  email: string;
}

const user: UserType[] = [
  {
    id: 1,
    name: "Milan Rokaya",
    email: "milanrokaya2014@gmail.comx",
  },
  {
    id: 2,
    name: "Hari karki",
    email: "harikarki@gmail.comx",
  },
];

const columnHelper = createColumnHelper<UserType>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "Name",
    cell: (info) => <p>{info.getValue()}</p>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
  }),
];
const data = [...user];

const Table = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default Table;
