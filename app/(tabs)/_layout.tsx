import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Registrar Incidencias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ViewCases"
        options={{
          title: 'Ver Incidencias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="eye-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AboutMe"
        options={{
          title: 'Sobre Mi',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="information-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
