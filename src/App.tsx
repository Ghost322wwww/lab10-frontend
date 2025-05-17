import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import NewArticle from './components/NewArticle';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

const { Content } = Layout;

function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        <Navbar />
        <Content
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '20px',
            background: '#fff',
          }}
        >
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
