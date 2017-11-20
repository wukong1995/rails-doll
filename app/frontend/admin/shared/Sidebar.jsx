import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const Sidebar = () => {
  return (
    <div style={{ width: 240 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>首页</span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>订单</span></span>}>
          <Menu.Item key="2">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>会员</span></span>}>
          <Menu.Item key="3">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>营收</span></span>}>
          <Menu.Item key="4">Option 5</Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="pie-chart" />
          <span>商品</span>
        </Menu.Item>
        <SubMenu key="sub5" title={<span><Icon type="mail" /><span>门店</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="mail" /><span>数据</span></span>}>
          <Menu.Item key="6">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="mail" /><span>营销</span></span>}>
          <Menu.Item key="7">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub8" title={<span><Icon type="mail" /><span>账号</span></span>}>
          <Menu.Item key="8">Option 5</Menu.Item>
        </SubMenu>
        <SubMenu key="sub9" title={<span><Icon type="mail" /><span>设置</span></span>}>
          <Menu.Item key="9">Option 5</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;

