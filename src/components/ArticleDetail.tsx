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
    axios.get(`${api.uri}/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error('Error fetching article detail:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <Card title={article.title} bordered style={{ width: '60%', margin: 'auto' }}>
      <p><strong>ID:</strong> {article.id}</p>
      <p><strong>Content:</strong> {article.alltext}</p>
      {article.summary && <p><strong>Summary:</strong> {article.summary}</p>}
      {article.datecreated && <p><strong>Created:</strong> {article.datecreated}</p>}
    </Card>
  );
};

export default ArticleDetail;
