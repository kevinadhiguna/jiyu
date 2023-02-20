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

  useEffect(() => {
    console.log('Component mounted');
    return(() => {
      console.log('Component will be unmounted');
    });
  }, []);

  useEffect(() => {
    console.log(`Name (useEffect without dependency array) : ${name}`);
    console.log(`Address (useEffect without dependency array) : ${address}`);
  });

  useEffect(() => {
    console.log(`Name changed : ${name}`);
  }, [name]);

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
