import React from "react";
import StackNavigation from "./src/routes/StackNavigation/StackNavigation";
import { StatusBar } from "expo-status-bar";
import { ClickableProvider } from './src/context/ClickableContext';


export default function App() {
  return (
    <>
      <ClickableProvider>
        <StatusBar hidden={false} translucent={true} style="dark" />
        <StackNavigation />
      </ClickableProvider>
    </>);
}
