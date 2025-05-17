import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { api } from '../common/http-common';
import axios from 'axios';

const Article = () => {
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios.get(`${api.uri}/articles`)
      .then(res => {
        console.log("✅ API 回傳資料:", res.data);
        const data = Array.isArray(res.data) ? res.data : res.data.data;
        setArticles(data);
      })
      .catch(err => {
        console.error("❌ 無法取得文章", err);
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
  }

  if (!articles.length) {
    return (
      <>
        <div style={{ textAlign: 'right', marginBottom: 16, marginRight: 20 }}>
          <Link to="/newarticle">
            <Button type="primary">+ New Article</Button>
          </Link>
        </div>
        <div>There is no article available now.</div>
      </>
    );
  }

  return (
    <>
      {/* 新增文章按鈕 */}
      <div style={{ textAlign: 'right', marginBottom: 16, marginRight: 20 }}>
        <Link to="/newarticle">
          <Button type="primary">+ New Article</Button>
        </Link>
      </div>

      {/* 文章卡片列表 */}
      <Row justify="space-around">
        {articles.map(({ id, title, alltext }) => (
          <Col span={8} key={id} style={{ marginBottom: 20 }}>
            <Card title={title} bordered>
              <p>{alltext}</p>
              <Link to={`/a/${id}`}>Details</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Article;
