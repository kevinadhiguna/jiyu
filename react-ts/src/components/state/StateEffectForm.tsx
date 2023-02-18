import { useState } from 'react';
import { Form, Input, Button } from 'antd';

export function StateEffectForm() {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  return(
    <Form>
      <Form.Item>
        <Input placeholder='Name'>Name</Input>
        <Input placeholder='Address'>Address</Input>
        <Button htmlType='submit' type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  ); 
}
