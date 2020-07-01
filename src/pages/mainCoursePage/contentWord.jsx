import React, { Component } from "react";
import PropTypes from "prop-types";

import { Collapse } from "antd";

import "./contentWord.less";
import startLogo from "./img/start.svg";

const { Panel } = Collapse;

const text = ['Linux 文件系统调用及Shell编程','Linux 文件系统调用','（1）掌握Linux提供的文件系统调用的使用方法。（2）熟悉文件系统的系统调用用户接口。']
;

const headTxt =["Linux 文件系统调用及Shell编程","Linux 文件系统调用","Linux提供的文件系统"] 
export default class ContentWord extends Component {
  render() {
    return (
        
      <div id="contentWordSpace">
      
        <Collapse accordion defaultActiveKey={["1"]}>
          <Panel header={headTxt[0]} key="1">
            <p>{text[0]}</p>
            <div  className="contentWordStart">
              <img src={startLogo} alt="failed" />
              <a href="#">
                开始实验
              </a>
            </div>
          </Panel>
          <Panel header={headTxt[1]} key="2">
            <p>{text[1]}</p>
            <div  className="contentWordStart">
              <img src={startLogo} alt="failed" />
              <a href="#">
                开始实验
              </a>
            </div>
          </Panel>
          <Panel header={headTxt[2]} key="3">
           <p>{text[2]}</p>
            <div  className="contentWordStart">
              <img src={startLogo} alt="failed" />
              <a href="#">
                开始实验
              </a>
            </div>
          </Panel>
          <Panel header="This is panel header 4" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 5" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 6" key="6">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 7" key="7">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 8" key="8">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 9" key="9">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 10" key="10">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 11" key="11">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 12" key="12">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
