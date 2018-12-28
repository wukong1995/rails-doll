import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const Sidebar = () => {
  return (
    <div style={{ width: 240 }}>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1">
          <Icon type="home" />
          <Link to="/index">首页</Link>
        </Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="contacts" /><span>用户</span></span>}>
          <Menu.Item key="3"><Link to="/users">全部用户</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="appstore-o" />
          <Link to="/recommends">推荐</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;

