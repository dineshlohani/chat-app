import React from 'react'
import { FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, colorScheme } from '@chakra-ui/react';

import { useState } from "react";
function Login() {

 const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
   
    const handelClick = () => setShow(!show);

   
    const submitHandler = () => { };
 
    return <VStack spacing= '10px' color='black' >
       
         <FormControl id="Email" isRequired >
            <FormLabel>Email</FormLabel>
                <input  style={{backgroundColor:'white',width:'100%'}}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)} 
                />
            
        </FormControl>
         <FormControl id="Password" isRequired>
            <FormLabel >Password</FormLabel>
            <InputGroup >
                
                        <input style={{backgroundColor:'white',width:'100%'}}
                type={show? "text":'password' }
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)} 
                    
                />
                <InputRightElement Element width="4.5rem">
                    <Button h="1rem" size="sn" onClick={handelClick} marginTop={-4}>
                        {show ? "hide":"show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
            
      
        <Button
            variant='solid'
            colorScheme='blue'
            style={{width:'100%'}}
           onClick={submitHandler}
           
        >
           <b>Login</b> 
        </Button>
           
        <Button
            variant='solid'
            colorScheme='red'
            style={{width:'100%'}}
            onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
            }}
        >
           <b>Get Guest User Credentials</b> 
        </Button>
        
        
  </VStack>
}

export default Login
