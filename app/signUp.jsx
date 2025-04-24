import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Mail01FreeIcons,
  LockPasswordFreeIcons,
  User02Icon,
} from "@hugeicons/core-free-icons";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { hp, wp } from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";

const SignUp = () => {
  const router = useRouter();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the fields!");
      return;
    }

    let name = nameRef.current.trim()
    let email = emailRef.current.trim()
    let password = passwordRef.current.trim()

    setLoading(true)
    
    const {data: {session}, error} = await supabase.auth.signUp({
      email, 
      password,
      options: {
        data: {
          name
        }
      }
    })

    setLoading(false)


    // console.log('session', session);
    // console.log('error', error);
    if (error) {
      Alert.alert('sign up', error.message)
    }
    

  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* Welcome */} 
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Text>Please fill the details to create a new account</Text>
          <Input
            icon={
              <HugeiconsIcon
                icon={User02Icon}
                size={26}
                color={theme.colors.text}
                strokeWidth={1.6}
              />
            }
            placeholder="Enter Your Name"
            onChangeText={(value) => (nameRef.current = value)}
          />

          <Input
            icon={
              <HugeiconsIcon
                icon={Mail01FreeIcons}
                size={26}
                color={theme.colors.text}
                strokeWidth={1.6}
              />
            }
            placeholder="Enter Your email"
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Input
            icon={
              <HugeiconsIcon
                icon={LockPasswordFreeIcons}
                size={26}
                color={theme.colors.text}
                strokeWidth={1.6}
              />
            }
            placeholder="Enter Your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />
          {/* button */}
          <Button title="Sign Up" loading={loading} onPress={onSubmit} />
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("login")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.font.semibold,
                },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.font.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.font.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
