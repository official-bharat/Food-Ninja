import React, { useState } from "react";
import { Block, Text, ImageComponent, Input, CustomButton, Button } from './src/components'
import { ImageBackground } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Signup = () => {

  return (
    <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('./src/assets/icons/Pattern.png')}>
      <Block >
        <Block flex={false} center padding={[hp(4)]}>
          <ImageComponent
            name="logo1"
            height="190"
            width="190"
          />
          <Text center size={17}>Deliever Favorite Food</Text>
        </Block>
        <Text bold center size={20} margin={[wp(2)]}>Sign Up For Free</Text>
        <Block flex={false} padding={[hp(1), wp(6)]} >
          <Input
            placeholder="Account"
            style={{ height: 50 }}
          />
          <Input
            placeholder="Email"
            style={{ height: 50 }}
          />
           <Input
            placeholder="Password"
            style={{ height: 50 }}
          />
        </Block>
       
        <Block flex={false} padding={[hp(2) , wp(25)]}>
          <Button color="secondary" >
            Create Account
          </Button>
        </Block>
        <CustomButton>
          <Text size={15} color="secondary" center>already have an account?</Text>
        </CustomButton>
      </Block>
    </ImageBackground>
  )

}

export default Signup;