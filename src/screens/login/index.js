import React, { useState } from "react";
import { Block, Text, ImageComponent, Input, CustomButton, Button } from './src/components'
import { ImageBackground } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Login = () => {

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
        <Text bold center size={20} margin={[wp(2)]}>Login To Your Account</Text>
        <Block flex={false} padding={[hp(1), wp(6)]} >
          <Input
            placeholder="Email"
            style={{ height: 50 }}
          />
          <Input
            placeholder="Password"
            style={{ height: 50 }}
          />
        </Block>
        <Text center>Or Continue With</Text>
        <Block flex={false} row center>
          <CustomButton
            borderWidth={1}
          >
            <Block flex={false} row>
              <ImageComponent
                name="Facebook"
                height="40"
                width="40"
              />
              <Text>Facebook</Text>
            </Block>
          </CustomButton>
          <CustomButton
            borderWidth={1}
          >
            <Block flex={false} row>
              <ImageComponent
                name="google"
                height="40"
                width="40"
              />
              <Text>Google</Text>
            </Block>
          </CustomButton>
        </Block>
        <CustomButton>
          <Text size={15} color="secondary" center>Forgot Your Password?</Text>
        </CustomButton>
        <Block flex={false} padding={[hp(2) , wp(30)]}>
          <Button color="secondary" >
            Login
          </Button>
        </Block>
      </Block>
    </ImageBackground>
  )

}

export default Login;