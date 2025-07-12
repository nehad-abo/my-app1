import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import TheProvider from '@/constants/TheProvider'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <TheProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            href: null,
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="descr"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="mov"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="car"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="carPage"
          options={{
            href: null,
          }}
        />


      </Tabs>
    </TheProvider>

  );
}
