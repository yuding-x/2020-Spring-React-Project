import React from "react";

// import Head from "../headerfooter/header.jsx"
import "./mainCoursePage.less";
import title from "./img/title.jpg";
import ContentMenu from './contentMenu.jsx'

class MainCoursePage extends React.Component {
  render() {
    return (
      <div id="mainCourse">
        <div id="leftCoursePage">
          <div id="mainCoursePage_title">
            <div>
              <img src={title} alt="failed" />
            </div>
            <div id="mainCourseTitleWord">
              <h5>网络安全虚拟实验平台</h5>
              <div className="introText">
                为了实现网络安全实验的管理以及实验平台，方便管理者分配虚拟资源实验教学,方便学生实验的进行以及学习，网络安全实验室开发组运用docker减少学生电脑资源的占用率，以减少物理服务器的成本为目的搭建了网络安全虚拟实验平台。
                由于网络安全课程的实验比较分散，实验工具要求繁杂，难以统一管理，学生下载相关工具耗费时间长，期望通过分配虚拟资源的方式来节约时间空间和并统一提供给学生实验环境和工具。
              </div>
            </div>
          </div>
          <div className="mainCoursePage_contain">
            <ContentMenu />
          </div>
        </div>
        {/* <div id="rightCoursePage">
          <div className="mainCoursePage_right"></div>
        </div> */}
      </div>
    );
  }
}

export default MainCoursePage;
