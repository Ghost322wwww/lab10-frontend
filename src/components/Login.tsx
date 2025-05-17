import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }: { setToken: (t: string) => void }) => {
  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    const { username, password } = values;

    if (!username || !password) {
      message.error("Username and password are required.");
      return;
    }

    const token = btoa(`${username}:${password}`); 
    setToken(token); 

    message.success("Login successful!");
    navigate('/newarticle'); 
  };

  return (
    <Form onFinish={handleLogin} style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;


