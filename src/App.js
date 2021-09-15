import React, { Component } from 'react';
import { Menu,Button, Table } from 'antd';
import './App.css';

import axios from 'axios'
import MenuList from './page/menu';
 class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      collapsed: false
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  editPomisson() { // 按钮点击
    console.log(this);
  }

  componentDidMount() {

    var api = "https://www.fastmock.site/mock/43500c531963a5a5fda54cdac12c982e/xianju//property/list"
    axios.get(api).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })

    
    const data = [
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London ',
      },
      {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney ',
      },
      {
        key: '4',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney',
      },
      {
        key: '5',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney',
      },
      {
        key: '6',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '7',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '8',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '9',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '10',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '11',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '12',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '13',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London ',
      },
      {
        key: '14',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney ',
      },
      {
        key: '15',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney',
      },
      {
        key: '16',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '17',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London ',
      },
      {
        key: '18',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney ',
      },
      {
        key: '19',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney',
      },
      {
        key: '20',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York',
      },
      {
        key: '21',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London ',
      },
      {
        key: '22',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney ',
      },
      {
        key: '23',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney',
      },
    ];
    this.setState({
      dataSource: data
    })
  }

  render() {
    const { dataSource } = this.state;
    const columns = [
      {
        title: 'id',
        dataIndex: 'name',
        align: 'left'
      },
      {
        title: '姓名',
        className: 'column-money',
        dataIndex: 'money',
        align: 'left',
      },
      {
        title: '登录名',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '部门',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '联系方式',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '所在医院',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '创建时间',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '状态',
        align: 'left',
        dataIndex: 'address',
      },
      {
        title: '操作',
        align: 'left',
        render: (value, item) => {
          return <div>
            <Button type={'primary'} onClick={this.editPomisson.bind(this, item)}>编辑权限</Button>
          </div>
        }
      }
    ];

    // 页面切换
    function onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    }

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // 选择
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      // <Table
      //   size={"small"}
      //   columns={columns}
      //   dataSource={dataSource}
      //   scroll={{ y: 340 }}
      //   bordered
      //   // title={() => 'Header'}
      //   // footer={() => 'Footer'}
      //   rowSelection={rowSelection}
      //   pagination={{
      //     showQuickJumper: true,
      //     showSizeChanger: true,
      //     defaultCurrent: 1,
      //     defaultPageSize: 10,
      //     total: dataSource.length
      //   }}
      // />
      <div>
        <MenuList/>
      </div>
    )
  }
}

export default App;