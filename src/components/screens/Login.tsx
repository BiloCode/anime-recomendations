import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";

import useLoginPage from "@hooks/useLoginPage";

const Login: FC = () => {
  const { loading, status, onSendConfirmationEmail, emailRef, passwordRef } =
    useLoginPage();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box w="96" flexShrink={0}>
        {status !== "success" && (
          <>
            <Grid>
              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <Input ref={emailRef} type="email" />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Password</FormLabel>
                <Input ref={passwordRef} type="password" />
              </FormControl>
            </Grid>
            <Button
              w="full"
              isLoading={loading}
              onClick={onSendConfirmationEmail}
            >
              Ingresar
            </Button>
            {status === "error" && <Text>Error</Text>}
          </>
        )}
        {status === "success" && (
          <Text>Se acaba de enviar un correo de confirmacion</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Login;
