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
        <SubMenu key="sub1" title={<span><Icon type="file-text" /><span>订单</span></span>}>
          <Menu.Item key="2">外卖处理</Menu.Item>
          <Menu.Item key="3">自提处理</Menu.Item>
          <Menu.Item key="4">订单查询</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="contacts" /><span>会员</span></span>}>
          <Menu.Item key="3"><Link to="/members">全部会员</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="printer" /><span>营收</span></span>}>
          <Menu.Item key="16">订单查询</Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="appstore-o" />
          <span>商品</span>
        </Menu.Item>
        <SubMenu key="sub5" title={<span><Icon type="environment-o" /><span>门店</span></span>}>
          <Menu.Item key="5"><Link to="/shop">门店信息</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/shop">配送规则</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="database" /><span>数据</span></span>}>
          <Menu.Item key="7">维度报表</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="mail" /><span>营销</span></span>}>
          <Menu.Item key="8">广告投放</Menu.Item>
          <Menu.Item key="9">站内推送</Menu.Item>
          <Menu.Item key="10">关键词</Menu.Item>
        </SubMenu>
        <SubMenu key="sub8" title={<span><Icon type="user" /><span>账号</span></span>}>
          <Menu.Item key="11">我的账号</Menu.Item>
        </SubMenu>
        <SubMenu key="sub9" title={<span><Icon type="setting" /><span>设置</span></span>}>
          <Menu.Item key="12">账号权限</Menu.Item>
          <Menu.Item key="13">数据校正</Menu.Item>
          <Menu.Item key="14">订单模版</Menu.Item>
          <Menu.Item key="15">接口日志</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;

