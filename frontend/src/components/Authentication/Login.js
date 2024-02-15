import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory from 'react-router-dom'

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Change Loading to loading (camelCase)

  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        // Destructure data directly
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successfully",
        status: "success", // Correct status name
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/Chats"); // Redirect to '/Chats' after successful login
    } catch (error) {
      toast({
        title: "Error!",
        description: error.response.data.message,
        status: "error", // Correct status name
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px" color="black">
      <FormControl id="Email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            style={{ backgroundColor: "white", width: "100%" }}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1rem" size="sm" onClick={handleClick} marginTop="-6px">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        variant="solid"
        colorScheme="blue"
        style={{ width: "100%" }}
        onClick={submitHandler}
        isLoading={loading} // Use camelCase for isLoading prop
      >
        <b>Login</b>
      </Button>
    </VStack>
  );
};

export default Login;
