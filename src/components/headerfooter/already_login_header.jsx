/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { Menu,Popconfirm,message } from "antd";
import { createHashHistory } from "history";

import "./style.less";
import logo from "../../pages/login/images/logo.svg";

// const { HashRouter as Router, Route, Switch, Link, withRouter } = ReactRouterDOM;
// const {  Breadcrumb, Alert  } = antd;

const { SubMenu } = Menu;

const history = createHashHistory();

const text = 'Are you sure to delete this task?';

function confirm() {
  message.info('Clicked on Yes.');
}


class AlreadyLoginHead extends React.Component {
  constructor (props){
    super(props);
    console.log(this.props.current);
  }


  linkTo(item) {
    history.push(item.key);
  }

  render() {
    return (
      <div>
        <header className="main_header">
          <img src={logo} alt="logo" />
          <Link to="/user" className={"title"}>
            网络安全虚拟实验平台
          </Link>

          <Menu
            mode="horizontal"
            id="M=menuTitle"
            selectedKeys={[this.props.current]}
          >
            <Menu.Item key="course">
              <Link to="/user">课程</Link>
            </Menu.Item>
            <Menu.Item key="feedback">
              <Link to="/feedback">反馈</Link>
              {/* faaa */}
            </Menu.Item>
            <Menu.Item key="personalCenter">
              <Link to="/personalCenter">个人中心</Link>
              {/* kkkkk */}
            </Menu.Item>
            
          </Menu>
        </header>
      </div>
    );
  }
}

// 组件是否存在
/*
let UNMOUT = true;

function UserInfo() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        UNMOUT = true;
        const userFetch = async () => {
            let data = await axios_get('/verify');
            console.log(data)
            if (UNMOUT) {
                let { hash } = window.location;
                if (hash === '#/' || hash === '#/Login') {
                    window.location.href = '/#/Home';
                }
                setUser(data.usr);
            }
        }
        userFetch();
        return () => UNMOUT = false;
    }, []);

    const loginout = () => {
        axios_get('/verify/signout');
        window.location.href = '/#/';
        message.success('退出成功！', 1);
        localStorage.removeItem(TOKEN_KEY);
    }

    const menu = (
        <Menu>
            <Menu.Item key='logout' onClick={loginout}>
                <Icon type='logout' style={{ marginRight: 5 }} />
                退出登录
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            {
                user ? (
                    <Dropdown overlay={menu} placement='bottomLeft' overlayStyle={{ minWidth: 155 }}>
                        <span className='header-user'>
                            <span>{user}</span>
                        </span>
                    </Dropdown>
                ) : null
            }
        </>
    )
}
*/
export default AlreadyLoginHead;
