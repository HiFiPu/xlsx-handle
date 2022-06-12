import { Table,Space,Button } from "antd";
import React from "react";
import {downloadExcel, downloadFiles2Zip, downloadFiles2ZipWithFolder} from "../../utils/excelUtils";
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

function onExportExcel() {
  let list = data
  downloadExcel({
    filename: 'test',
    sheets: [{
      sheetName: 'test',
      columns: columns,
      dataSource: list
    }]
  })
}

const App = () => (
  <>
    <Space style={{ marginBottom: 10 }}>
      <Button type={"primary"}>
        导出excel
      </Button>
      <Button type={"primary"}>
        导出带样式excel
      </Button>
      <Button type={"primary"} onClick={onExportExcel}>
        封装方法导出excel
      </Button>
      <Button type={"primary"}>
        导出zip
      </Button>
      <Button type={"primary"}>
        导出分文件夹zip
      </Button>
    </Space>
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
        y: 300,
      }}
    />
  </>
);

export default App;
