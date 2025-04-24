import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
// import { HugeiconsIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
// import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { HeartbreakIcon } from "@hugeicons/core-free-icons";
import { PlusSignSquareIcon } from "@hugeicons/core-free-icons";
import { User02FreeIcons } from "@hugeicons/core-free-icons";
import { useRouter } from "expo-router";
import Avatar from "../../components/Avatar";

const Home = () => {
  const {user ,setAuth } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    setAuth(null);
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Sign out", "error signing out ");
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>LinkUp</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push('/notifications')}>
              <HugeiconsIcon
                icon={HeartbreakIcon}
                size={hp(3.2)}
                color={theme.colors.text}
                strokeWidth={2}
              />
            </Pressable>{" "}
            <Pressable onPress={() => router.push('/newPost')}>

              <HugeiconsIcon
                icon={PlusSignSquareIcon}
                size={hp(3.2)}
                color={theme.colors.text}
                strokeWidth={2}
              />
            </Pressable>{" "}
            <Pressable onPress={() => router.push('/profile')}>

            
             <Avatar 
              uri={user?.image}
              size={4.3}
              rounded={theme.raduis.sm}
              style={{borderWidth: 2}}
             />
            </Pressable>
          </View>
        </View>
      </View>
      <Button title="logout" onPress={onLogout} />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.font.bold,
  },
  avatarImage: {
    height: hp(4.3),
    width: wp(4.3),
    borderRadius: theme.raduis.sm,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
    borderWidth: 3,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 18
  },
  listStyle :{ 
    padding: 20,
    paddingHorizontal: wp(4)
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text
  }
});
