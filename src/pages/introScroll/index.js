import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";

const data = [
  {
    key: "1",
    title: "Understanding Statistics",
    content: "It's hard to tell the truth without statistics.",
    topImage: require("../../../assets/introImgTop1.png"),
    bottomImage: require("../../../assets/introImg1.png"),
  },
  {
    key: "2",
    title: "Reminders & Notifications",
    content: "Don't forget to take care of yourself",
    topImage: require("../../../assets/introImgTop2.png"),
    bottomImage: require("../../../assets/introImg2.png"),
  },
  {
    key: "3",
    title: "Earn coins & Coupons",
    content: "Keep calm, Earn Coins and redeem Coupons",
    topImage: require("../../../assets/introImgTop3.png"),
    bottomImage: require("../../../assets/introImg3.png"),
  },
];

const { height, width } = Dimensions.get("window");

const IntroScroll = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={styles.screenContainer}>
      <View style={styles.screen}>
        <View style={styles.screenTop}>
          <Image
            source={item.topImage}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </View>

        <ImageBackground
          source={item.bottomImage}
          style={styles.screenBottom}
          resizeMode="stretch"
        >
          <View style={styles.screenBottomText}>
            <Text style={[styles.text, styles.textHeading]}>{item.title}</Text>
            <Text style={[styles.text, styles.textBody]}>{item.content}</Text>
          </View>
          <View style={styles.dotContainer}>
            {index === data.length - 1 ? (
              <TouchableOpacity
                style={[styles.button, shadowStyle]}
                onPress={() => navigation.replace("LoginScreen")}
              >
                <Text style={[styles.buttonText]}>Get Started</Text>
              </TouchableOpacity>
            ) : (
              data.map((e, i) => {
                if (i === activeIndex) {
                  return <View key={i} style={styles.activeDot} />;
                } else {
                  return <View key={i} style={styles.inactiveDot} />;
                }
              })
            )}
          </View>
        </ImageBackground>
      </View>
    </View>
  );

  return (
    <View>
      <StatusBar animated={true} />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
    </View>
  );
};

const shadowStyle = Platform.select({
  ios: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
});

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#000",
    width,
    height,
  },
  screenTop: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width / 1.25,
    height: height / 2,
  },
  screenBottom: {
    height: height / 2,
  },
  screenBottomText: {
    padding: 25,
    paddingTop: 120,
  },
  text: {
    color: "white",
    lineHeight: 40,
  },
  textHeading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  textBody: {
    fontSize: 23,
  },
  dotContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#7322f7",
    marginHorizontal: 5,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e6e6e6",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#8D4AF8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default IntroScroll;
