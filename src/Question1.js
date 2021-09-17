import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Headline, Button, Title, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Question1 = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.heading}>
        <Icon name="menu" size={30} />
        <Title style={styles.title} >InsureMe Choose</Title>
      </View>
      <View>
        <Headline style={styles.headline}>
          Do you already have medical insurance?
        </Headline>
        <Subheading style={styles.option}>
          I currently have medical insurance
          <Icon name="check" size={24} color="green" />
        </Subheading>
        <Subheading style={styles.option}>
          I don't have medical insurance
        </Subheading>
      </View>
      <View style={styles.buttonBar}>
        <Button
          style={styles.buttonP}
          onPress={()=>navigation.goBack()}
        >Previous</Button>
        <Button
          style={styles.buttonN}
          onPress={()=>navigation.navigate("Question2")}
        >Next ></Button>
      </View>
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
  option: {
    paddingHorizontal: 20,
    marginTop: 20
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
