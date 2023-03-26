import { TableDataType } from "@app/types/home";
import type { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<TableDataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
  },
  {
    title: "Romaji",
    dataIndex: "romaji",
    key: "romaji",
    render: (text: string) => (text ? text : <>Unknown</>),
  },
  {
    title: "English",
    dataIndex: "english",
    key: "english",
    render: (text: string) => (text ? text : <>Unknown</>),
  },
  {
    title: "Native",
    key: "native",
    dataIndex: "native",
    render: (text: string) => (text ? text : <>Unknown</>),
  },
];
