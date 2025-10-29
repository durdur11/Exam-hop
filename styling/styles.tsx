import { StyleSheet } from "react-native";

export const lightStyles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  scrollContainer: 
  {
    flexGrow: 1,
    backgroundColor: "#333333",
  },
  text: 
  {
    color: "#000000",
    fontSize: 20,
    padding: 20
  },
  tabBar: { 
    backgroundColor: '#fff' 
  }
});

export const darkStyles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: "#333333",
  },
  scrollContainer: 
  {
    flexGrow: 1,
    backgroundColor: "#333333",
  },
  text: 
  {
    color: "#ffffff",
    fontSize: 20,
    padding: 20
  },
  tabBar: 
  { 
    backgroundColor: '#333' 
  }
});
