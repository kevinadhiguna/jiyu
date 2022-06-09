import { Table } from "antd";
import { al_mvp_2021 } from "../mock-data/mvp-data";

const columns = [
  {
    title: "Player ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Club",
    dataIndex: "club",
    key: "club",
  },
];

const AntdTable = () => {
  <Table title={"MLB AL MVP 2021"} columns={columns} dataSource={al_mvp_2021} />;

};

export default AntdTable;
