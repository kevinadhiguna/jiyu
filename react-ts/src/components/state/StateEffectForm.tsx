import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

export function StateEffectForm() {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('name :', name);
    console.log('address :', address);
  }

  return(
    <Form layout='inline' onSubmitCapture={handleFormSubmit}>
      <Form.Item>
        <Input placeholder='Name' onChange={handleNameChange}>Name</Input>
        <Input placeholder='Address' onChange={handleAddressChange}>Address</Input>
        <Button htmlType='submit' type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  ); 
}
