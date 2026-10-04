'use client'
import React from 'react';

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { signUp,signIn } from '@/lib/auth-client';


const SignUpPage = () => {

    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    // alert("Form submitted successfully!");
    

    const { data:resData, error } = await signUp.email({
    name:data.name ,
    email: data.email,
    password: data.password,
    // image: "https://example.com/image.png", // An optional profile image of the user.
    callbackURL: "/", // An optional URL to redirect to after the user signs up.
        });

        console.log('from submit data',resData,'error .......',error)
  };
 const handleGoogleClick = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  }
  

    return (
        <div className='flex justify-center mt-20'>
     <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
        //   if (!/[A-Z]/.test(value)) {
        //     return "Password must contain at least one uppercase letter";
        //   }
        //   if (!/[0-9]/.test(value)) {
        //     return "Password must contain at least one number";
        //   }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            {/* <FloppyDisk /> */}
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleGoogleClick}>Google Sign In</Button>
        </Fieldset.Actions>
        
      </Fieldset>
      
    </Form>


        </div>
    );
};

export default SignUpPage;