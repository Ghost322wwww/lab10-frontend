import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import NewArticle from './components/NewArticle';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'; // ✅ 導覽列

const { Content } = Layout;

function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Navbar />
        <Content style={{ padding: '20px 50px', background: '#fff', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Article />} />
            <Route path="/a/:id" element={<ArticleDetail />} />
            <Route path="/newarticle" element={<NewArticle token={token} />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
