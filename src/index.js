
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

// document.getElementById('root')

import React, { Component } from "react";
import { Form, Row, Col, Input, Icon, Button } from "antd";

import { Table, Pagination } from 'antd';
import App from './App';
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  ,
  document.getElementById('root'),
);

