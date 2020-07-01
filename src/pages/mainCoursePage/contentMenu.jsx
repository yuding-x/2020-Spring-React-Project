import React, { Component } from "react";
import {} from "react-router-dom";
import { Tabs } from "antd";
// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
import "./contentMenu.less";
import ContentWord from "./contentWord.jsx"
import Detail from "./detail.jsx"

const { TabPane } = Tabs;

export default class contentMenuItem extends Component {
  state = {
    current: "mail"
  };

  render() {
    function callback(key) {
      console.log(key);
    }
    return (
      <div >
        <Tabs defaultActiveKey="1" onChange={callback} id="contentMainMenu">
          <TabPane tab="实验" key="1" id="firstMenuItem">
            <ContentWord />
          </TabPane>
          <TabPane tab="详情" key="2" id="secondMenuItem">
            <Detail />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
