import { View, Text, ScrollView, Switch} from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView>
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: 10,
            paddingTop: 20
            }}>
            <Text style={{fontSize: 20, fontFamily: "monospace"}}>Color mode</Text>
            
        </View>
    </ScrollView>
  );
}