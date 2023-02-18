import { Form, Input, Button } from 'antd';

export function StateEffectForm() {
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
