import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { api } from '../common/http-common';
import { Card, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${api.uri}/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.error('Error fetching article detail:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  if (!article) {
    return <div style={{ textAlign: 'center' }}>Article not found.</div>;
  }

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Card
        title={article.title}
        bordered
        style={{
          width: '100%',
          maxWidth: 600,
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          borderRadius: 10,
        }}
      >
        <p><strong>ID:</strong> {article.id}</p>
        <p><strong>Content:</strong> {article.alltext}</p>
        {article.summary && <p><strong>Summary:</strong> {article.summary}</p>}
        {article.datecreated && (
          <p><strong>Created:</strong> {new Date(article.datecreated).toLocaleString()}</p>
        )}
      </Card>
    </div>
  );
};

export default ArticleDetail;
