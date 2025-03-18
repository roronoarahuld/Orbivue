import { View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import useGlobalStyles, { palette } from '@/theme/globalStyle';
import { Text, PlatformPressable } from '@react-navigation/elements';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function TabBar({ state, descriptors, navigation }) {
  // Icon declarations
  const icons = {
    dashboard: (props) => <Feather name="home" size={24} color="#cc672e" {...props} />,
    hobbies: (props) => <FontAwesome name="star-o" size={24} color="#cc672e" {...props}/>,
    personal: (props) => <AntDesign name="filetext1" size={24} color="#cc672e" {...props}/>,
    education: (props) => <Ionicons name="school" size={24} color="#cc672e" {...props}/>,
    employment: (props) => <Ionicons name="bag-outline" size={24} color="#cc672e" {...props}/>
  }
  const defaultStyles = useGlobalStyles()
  const { colors } = useTheme();
  return (
    <View style={[styles.tabBar]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {
              icons[route.name]({
                color: isFocused ? "#fff" : "#793006"
              })
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
    tabBar :{
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        backgroundColor: '#cc672e',
        padding: 25,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 20,
        borderRadius: 50,
        borderCurve: 'continuous',
    },
    tabBarItem:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})