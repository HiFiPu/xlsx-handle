import React, { Component } from 'react'
import Excel from "exceljs"
import { Table } from 'antd';
export default class index extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
          columns:[
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ],
          dataSource:[
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ]
        }
    }
     handleFile = async(ev)=> {
      const file = await ev.target.files?.[0]?.arrayBuffer();
      const workbook = new Excel.Workbook();
      await workbook.xlsx.load(file);
      const SHEET = workbook.worksheets[0];
      const columns = []
      const dataSource = []
      SHEET.eachRow((row, rowNumber) => {
        if(rowNumber==1){
          row.values.forEach((v,i,a)=>{
            console.log(v,i)
            columns.push({title:v,dataIndex:v,key:v})
          })
        }else{
          let cachObj = {key:''}
          for(let i =0;i<columns.length;i++){
            cachObj[columns[i]?.dataIndex] = `${row.values[i+1]}`
          }  
          dataSource.push(cachObj)
        }
          
      });
      this.setState({columns,dataSource})
      // console.log(ev.target.files,'data.....',columns,dataSource)
    }
  render() {
   const {columns,dataSource} = this.state
    
    return (
      <div>
        <h1>请上传文件</h1>
        <input type="file" onChange={this.handleFile} />
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    )
  }
}
