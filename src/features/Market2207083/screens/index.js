import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_151_409}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I151_409_144_381}
        />
        <View style={styles.View_I151_409_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I151_409_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I151_409_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I151_409_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I151_409_144_400}
        />
      </View>
      <View style={styles.View_151_2}>
        <View style={styles.View_I151_2_144_2324}>
          <Text style={styles.Text_I151_2_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I151_2_144_2323}>
          <Text style={styles.Text_I151_2_144_2323}>Market</Text>
        </View>
        <View style={styles.View_I151_2_144_2329}>
          <Text style={styles.Text_I151_2_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_151_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I151_3_144_2659}
        />
        <View style={styles.View_I151_3_144_2660}>
          <Text style={styles.Text_I151_3_144_2660}>Search</Text>
        </View>
      </View>
      <View style={styles.View_151_100}>
        <View style={styles.View_151_86}>
          <View style={styles.View_I151_86_151_68} />
          <View style={styles.View_I151_86_151_69}>
            <Text style={styles.Text_I151_86_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_86_151_74}>
            <Text style={styles.Text_I151_86_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_92}>
          <View style={styles.View_I151_92_151_68} />
          <View style={styles.View_I151_92_151_69}>
            <Text style={styles.Text_I151_92_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_92_151_74}>
            <Text style={styles.Text_I151_92_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_96}>
          <View style={styles.View_I151_96_151_68} />
          <View style={styles.View_I151_96_151_69}>
            <Text style={styles.Text_I151_96_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_96_151_74}>
            <Text style={styles.Text_I151_96_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_217}>
          <View style={styles.View_I151_217_151_68} />
          <View style={styles.View_I151_217_151_69}>
            <Text style={styles.Text_I151_217_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_217_151_74}>
            <Text style={styles.Text_I151_217_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_90}>
          <Text style={styles.Text_151_90}>Hot deals</Text>
        </View>
      </View>
      <View style={styles.View_151_101}>
        <View style={styles.View_151_102}>
          <View style={styles.View_I151_102_151_68} />
          <View style={styles.View_I151_102_151_69}>
            <Text style={styles.Text_I151_102_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_102_151_74}>
            <Text style={styles.Text_I151_102_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_103}>
          <View style={styles.View_I151_103_151_68} />
          <View style={styles.View_I151_103_151_69}>
            <Text style={styles.Text_I151_103_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_103_151_74}>
            <Text style={styles.Text_I151_103_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_104}>
          <View style={styles.View_I151_104_151_68} />
          <View style={styles.View_I151_104_151_69}>
            <Text style={styles.Text_I151_104_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_104_151_74}>
            <Text style={styles.Text_I151_104_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_221}>
          <View style={styles.View_I151_221_151_68} />
          <View style={styles.View_I151_221_151_69}>
            <Text style={styles.Text_I151_221_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_221_151_74}>
            <Text style={styles.Text_I151_221_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_105}>
          <Text style={styles.Text_151_105}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_151_115}>
        <View style={styles.View_151_116}>
          <View style={styles.View_I151_116_151_68} />
          <View style={styles.View_I151_116_151_69}>
            <Text style={styles.Text_I151_116_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_116_151_74}>
            <Text style={styles.Text_I151_116_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_117}>
          <View style={styles.View_I151_117_151_68} />
          <View style={styles.View_I151_117_151_69}>
            <Text style={styles.Text_I151_117_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_117_151_74}>
            <Text style={styles.Text_I151_117_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_118}>
          <View style={styles.View_I151_118_151_68} />
          <View style={styles.View_I151_118_151_69}>
            <Text style={styles.Text_I151_118_151_69}>
              Item #1 Name Goes Here
            </Text>
          </View>
          <View style={styles.View_I151_118_151_74}>
            <Text style={styles.Text_I151_118_151_74}>$19.99</Text>
          </View>
        </View>
        <View style={styles.View_151_119}>
          <Text style={styles.Text_151_119}>Deals</Text>
        </View>
      </View>
      <View style={styles.View_151_6}>
        <View style={styles.View_I151_6_150_580}>
          <View style={styles.View_I151_6_150_581} />
          <View style={styles.View_I151_6_150_582}>
            <View style={styles.View_I151_6_150_583} />
          </View>
        </View>
        <View style={styles.View_I151_6_150_584}>
          <View style={styles.View_I151_6_150_618} />
          <View style={styles.View_I151_6_150_619} />
          <View style={styles.View_I151_6_150_620} />
          <View style={styles.View_I151_6_150_621} />
          <View style={styles.View_I151_6_150_622} />
        </View>
        <View style={styles.View_I151_6_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_409: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I151_409_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I151_409_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I151_409_144_387: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.33349609375,
    top: 0.002685546875
  },
  ImageBackground_I151_409_144_391: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.02685546875,
    top: 0
  },
  ImageBackground_I151_409_144_395: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.3359375
  },
  ImageBackground_I151_409_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_151_2: {
    flexGrow: 1,
    width: 343,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_2_144_2324: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    top: 8
  },
  Text_I151_2_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_2_144_2323: {
    flexGrow: 1,
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 0
  },
  Text_I151_2_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_2_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I151_2_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_3: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I151_3_144_2659: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I151_3_144_2660: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  Text_I151_3_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_100: {
    width: 488,
    minWidth: 488,
    height: 222,
    minHeight: 222,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 210
  },
  View_151_86: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_86_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_86_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_86_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_86_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_86_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_92: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_92_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_92_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_92_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_92_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_92_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_96: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_96_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_96_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_96_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_96_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_96_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_217: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 378,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_217_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_217_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_217_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_217_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_217_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_90: {
    width: 110,
    minWidth: 110,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_151_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_101: {
    width: 488,
    minWidth: 488,
    height: 222,
    minHeight: 222,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 464
  },
  View_151_102: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_102_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_102_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_102_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_102_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_102_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_103: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_103_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_103_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_103_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_103_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_103_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_104: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_104_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_104_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_104_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_104_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_104_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_221: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 378,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_221_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_221_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_221_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_221_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_221_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_105: {
    width: 102,
    minWidth: 102,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_151_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_115: {
    width: 362,
    minWidth: 362,
    height: 222,
    minHeight: 222,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 718
  },
  View_151_116: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_116_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_116_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_116_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_116_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_116_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_117: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_117_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_117_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_117_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_117_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_117_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_118: {
    width: 110,
    minWidth: 110,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_118_151_68: {
    flexGrow: 1,
    width: 110,
    height: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I151_118_151_69: {
    flexGrow: 1,
    width: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  Text_I151_118_151_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_118_151_74: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  Text_I151_118_151_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_119: {
    width: 64,
    minWidth: 64,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_151_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_6: {
    flexGrow: 1,
    width: 375,
    height: 83.5,
    minHeight: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 729,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_6_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I151_6_150_581: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I151_6_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I151_6_150_583: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I151_6_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I151_6_150_618: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_619: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_620: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_621: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_622: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I151_6_150_614: {
    flexGrow: 1,
    width: 375,
    height: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(189, 197, 205, 1)"
  },
  View_2: { height: 812 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
