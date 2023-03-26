import { TableDataType } from "@app/types/home";
import type { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<TableDataType> = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
    width: 100,
  },
  {
    title: "Title",
    key: "title",
    dataIndex: "title",
    render: (text: string) => (text ? text : <>Unknown</>),
  },
  {
    title: "Site URL",
    key: "siteUrl",
    dataIndex: "siteUrl",
    render: (text: string) => (text ? text : <>Unknown</>),
  },
];
