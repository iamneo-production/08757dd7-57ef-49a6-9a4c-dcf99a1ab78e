import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <Input type="text" name="username" id="username" placeholder="Full Name" />
        <Input type="text" name="mobilenumber" id="mobilenumber" placeholder="Mobile Number" />
        <Input type="password" name="password" id="password" placeholder="Password" />
        <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" name="submitButton" id="submitButton">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already a member?
        <BoldLink href="#" onClick={switchToSignin} id="submitButtons">
          click here
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
