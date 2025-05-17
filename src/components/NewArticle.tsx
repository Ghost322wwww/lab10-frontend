import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { api } from "../common/http-common";

const { TextArea } = Input;

const NewArticle = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = async (values: any) => {
    try {
      const response = await axios.post(`${api.uri}/articles`, values);
      if (response.status === 201) {
        message.success("Article created successfully!");
        form.resetFields();
      } else {
        message.error("Failed to create article.");
      }
    } catch (err) {
      console.error(err);
      message.error("Error while creating article.");
    }
  };

  return (
    <Form
      form={form}
      name="article"
      onFinish={handleFormSubmit}
      layout="vertical"
      style={{ maxWidth: 600, margin: "auto" }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="alltext"
        label="Content"
        rules={[{ required: true, message: "Please input the content" }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Article
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewArticle;
