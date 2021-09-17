import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Headline, Button, Title, Subheading, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedNumbers from 'react-native-animated-numbers';

const Question1 = (props) => {
  const { navigation } = props;
  const [animateToNumber, setAnimateToNumber] = React.useState(0);

  return (
    <View style={styles.mainView}>
      <View style={styles.heading}>
        <Icon name="menu" size={30} />
        <Title style={styles.title} >InsureMe Choose</Title>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
      >
      <ScrollView>
        <View>
          <Headline style={styles.headline}>
            Please select 3 providers you frequently visit
          </Headline>
          <Subheading style={styles.subheading}>
            We want to confirm that they participate in your new network
          </Subheading>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.buttonBar}>
          <Button
            style={styles.buttonP}
            onPress={()=>navigation.goBack()}
          >Previous</Button>
          <Button
            style={styles.buttonN}
            onPress={()=>navigation.navigate("Recommendation")}
          >Next ></Button>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  heading: {
    height:100,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20
  },
  title: {
    color: "navy",
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  headline: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 40,
    marginTop: 30
  },
  subheading: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  inputView: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  input: {
    height: 40
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 40
  },
  buttonN: {
    backgroundColor: "yellow",
    borderRadius: 20,
    width: 120,
  },
  buttonP: {
    width: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "navy"
  }
});

export default Question1;
