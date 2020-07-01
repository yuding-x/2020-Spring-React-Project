import React  from "react";
import { Link } from "react-router-dom";

import "./style.less";
import logo from "../../pages/login/images/logo.svg";

class Head extends React.Component {
  render() {
    return (
      <header className="main_header">
        <img src={logo} alt="logo" />
        <Link to="/" className={"title"}>网络安全虚拟实验平台</Link>

      </header>
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
export default Head;
