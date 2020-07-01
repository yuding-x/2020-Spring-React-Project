import React, { Component } from "react";

import "./detail.less";
import logo1 from "./img/target1.svg";
import logo2 from "./img/target2.svg";
import logo3 from "./img/target3.svg";
import pdf from './img/pdf.svg'
import zip from './img/zip.svg'
import doc from './img/doc.svg'

export default class Detail extends Component {
  render() {
    return (
      <div id="detailWholeSpace">
        <div className="detailSpace">
          <div className="detailTitleSpace">
            <img src={logo1} alt="failed" />
            <p className="detailTitle">授课目标</p>
          </div>
          <div className="detailWord">
            课程的定位是入门级课程，本课程的目标是为学生搭建起通向“大数据知识空间”的桥梁和纽带。
            本课程将系统梳理总结大数据相关技术，介绍大数据技术的基本原理和大数据主要应用，
            帮助学生形成对大数据知识体系及其应用领域的轮廓性认识，
            为学生在大数据领域“深耕细作”奠定基础、指明方向
          </div>
        </div>
        <div>
          <div className="detailSpace">
            <div className="detailTitleSpace">
              <img src={logo2} alt="failed" />
              <p className="detailTitle">必备知识</p>
            </div>
            <div className="detailWord">
              前置课程：面向对象编程（比如Java）、数据库、操作系统
            </div>
          </div>
        </div>
        <div>
          <div className="detailSpace">
            <div className="detailTitleSpace">
              <img src={logo3} alt="failed" />
              <p className="detailTitle">参考资料</p>
            </div>
            <div className="detailWord">
              <div className="documentSpace">
                  <img className="documentImg" src={pdf} alt="failed"/>
                  <a className="detailBookName" href="#">《LINUX 就该这么学》</a>
                  
              </div>
              <div className="documentSpace">
                  <img className="documentImg" src={doc} alt="failed"/>
                  <a className="detailBookName" href="#">《LINUX权威指南》</a>
              </div>
              <div className="documentSpace">
                  <img className="documentImg" src={zip} alt="failed"/>
                  <a className="detailBookName" href="#">《深入理解 Linux 内核》</a>
              </div>
              <div className="documentSpace">
                  <img className="documentImg" src={pdf} alt="failed"/>
                  <a className="detailBookName" href="#">《 Linux命令行与shell脚本编程大全（第3版）》</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
