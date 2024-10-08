/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {useColorScheme} from 'nativewind';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from '~/components/ui/button';

import './global.css';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View className="mt-8 pl-6 pr-6">
      <Text className="text-2xl font-semibold dark:text-white text-black">
        {title}
      </Text>
      <Text className="mt-2 text-lg font-normal dark:text-white text-black">
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View className="dark:bg-black bg-white">
          <Button className='bg-primary'>
            <Text>button2</Text>
          </Button>
          <Section title="Nativewind">
            <Text>blue square:</Text>
          </Section>
          <View className="w-10 h-10 bg-blue-500" />
          <Section title="Step One">
            Edit <Text className="font-bold">App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
