import {
  Box,
  Text,
  Input,
  Button,
  Heading,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import useAccountValidation from "@hooks/useAccountValidation";

const AccountValidation = () => {
  const { isLoading, onSendValidation, emailRef } = useAccountValidation();

  return (
    <Box>
      <Heading color="white">Verificacion de correo electronico</Heading>
      <Text color="white">Rellene el formulario para completar el proceso</Text>
      <FormControl>
        <FormLabel color="white">Correo Electronico</FormLabel>
        <Input ref={emailRef} />
      </FormControl>

      <Button isLoading={isLoading} onClick={onSendValidation}>
        Terminar Proceso
      </Button>
    </Box>
  );
};

export default AccountValidation;
