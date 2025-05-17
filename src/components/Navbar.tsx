import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
        📰 ArticleApp
      </div>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="/newarticle">New Article</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
