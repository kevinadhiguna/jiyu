import { Space, Table } from "antd";

import { al_mvp_2021 } from "../mock-data/mvp-data";
import { al_cyyoung_2021 } from "../mock-data/cyyoung-data";

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

const getMVPtableTitle = () => {
  return "MLB AL MVP 2021";
}

const getCyYoungTableTitle = () => {
  return "MLB Cy Young 2021";
};

const AntdTable = () => {
  return (
    <Space direction="vertical" size={"middle"} align="center">
      <Table
        // title={"MLB AL MVP 2021"} // <- Don't
        title={getMVPtableTitle} // <- Do ('title' must be a function)
        columns={columns}
        dataSource={al_mvp_2021}
      />
      <Table
        // title={"MLB AL Cy Young 2021"} // <- Don't
        title={getCyYoungTableTitle} // <- Do ('title' must be a function)
        columns={columns}
        dataSource={al_cyyoung_2021}
      />
    </Space>
  );
};

export default AntdTable;
