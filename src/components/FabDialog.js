import React, { Component } from 'react'
import { View, Animated, TouchableWithoutFeedback, Dimensions,Button, StyleSheet, UIManager, Text, findNodeHandle, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { metrics, fonts } from './MaterialValue'
import Fab from './Fab'
FAB_COLOR 
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

// initial aspect ratio 4:3, collapsed: 16:9
const HERO_WIDTH = WINDOW_WIDTH;
const HERO_HEIGHT = WINDOW_WIDTH * 3 / 4;
const HERO_HEIGHT_COLLAPSED = WINDOW_WIDTH * 9 / 16;
const HERO_DELTA_Y_COLLAPSED = HERO_HEIGHT - HERO_HEIGHT_COLLAPSED;
const HERO_ELEVATION_COLLAPSED = metrics.elevation.appBar - 1;
const FAB_CONTAINER_INIT_SIZE = FAB_SIZE + 40;
const DIALOG_WIDTH = metrics.baselineGrid * 40;
const DIALOG_HEIGHT = DIALOG_WIDTH * 9 / 16;
const FAB_SIZE = metrics.fabSize;
const FAB_COLOR = '#ff6f00';

const TOOLBAR_ICON_COLOR_LIGHT = '#FEFEFE';
const TOOLBAR_ICON_COLOR_DARK = '#222222';


export default class FabDialog extends React.PureComponent {
  // state: {
  //   dialogActivated: boolean,
  // }
  constructor(props) {
    super(props);
    this.state = {
      dialogActivated: false,
    }
    this._dialogTransformProgress = new Animated.Value(this.state.dialogActivated ? 1 : 0);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.dialogActivated !== prevState.dialogActivated) {
      Animated.timing(this._dialogTransformProgress, {
        toValue: this.state.dialogActivated ? 1 : 0,
        duration: 375,
      }).start(() => {
        if (this.state.dialogActivated === false) this.setState({ containerOrigin: null });
      });
    }
  }
   getFabContainerStyleOnTransform(progress: Animated.Value, origin) {
    const inputRange = [0, 0.2, 0.7, 1];
    const sizeWhenMoveEnds = FAB_CONTAINER_INIT_SIZE * 1.5;
    const width = progress.interpolate({
      inputRange,
      outputRange: [FAB_CONTAINER_INIT_SIZE, sizeWhenMoveEnds, DIALOG_WIDTH, DIALOG_WIDTH],
    });
    const height = progress.interpolate({
      inputRange,
      outputRange: [FAB_CONTAINER_INIT_SIZE, sizeWhenMoveEnds, DIALOG_HEIGHT, DIALOG_HEIGHT],
    });
    let styleWhenDialogActivated = {};
    if (origin) {
      // move the fab container to target when progress is 1, and back when progress is 0.
      const dialogPos = {
        left: (WINDOW_WIDTH - DIALOG_WIDTH) / 2,
        top: (WINDOW_HEIGHT - DIALOG_HEIGHT) / 2,
      }
      const targetWhenMoveEnds = {
        left: (WINDOW_WIDTH - sizeWhenMoveEnds) / 2,
        top: (WINDOW_HEIGHT - sizeWhenMoveEnds) / 2,
      }
      const left = progress.interpolate({
        inputRange,
        outputRange: [origin.x, targetWhenMoveEnds.left, dialogPos.left, dialogPos.left],
      });
      const top = progress.interpolate({
        inputRange,
        outputRange: [origin.y, targetWhenMoveEnds.top, dialogPos.top, dialogPos.top],
      });
      styleWhenDialogActivated = {
        left,
        top,
        transform: [], // cancel out translateY set in getFabContainerStyleOnScroll()
      };
    }
  
    return {
      width,
      height,
      ...styleWhenDialogActivated,
    }
  }
  
  render() {
    const onFabPress = async () => {
      const containerOrigin = await measureInWindow(this._fabContainer);
      this.setState({ dialogActivated: true, containerOrigin });
    };
    const onBackgroundPress = () => this.setState({ dialogActivated: false });
    const AnimatedFab = Animated.createAnimatedComponent(Fab);
    const animatedModalStyle = {
      elevation: metrics.elevation.appBar + 1,
      backgroundColor: this._dialogTransformProgress.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
      }),
      transform: [
        {
          translateY: this._dialogTransformProgress.interpolate({
            inputRange: [0, 0.1, 1],
            outputRange: [-10000, 0, 0], // move it offscreen initially so that it doesn't block touches
          })
        }
      ]
    };
    const MOVE_END = 0.2;
const TRANSFORM_END = 0.7;
const SIZE_RATIO_WHEN_MOVE_END = 1.5;

    const getFabStyleOnTransform = (progress: Animated.Value) => {
      const maxSize = Math.sqrt(Math.pow(DIALOG_WIDTH / 2, 2) + Math.pow(DIALOG_HEIGHT / 2, 2)) * 2;
      const inputRange = [0, MOVE_END, TRANSFORM_END, 1];
    
      // TODO exercise
      //  Animate opacity, width and height
      const opacity = 1;
      const width = FAB_SIZE;
      const height = width;
    
      // TODO exercise
      // Animate backgroundColor to #FAFAFA to make the FAB blends to the dialog content better
      const backgroundColor = FAB_COLOR;
    
      return {
        opacity,
        width,
        height,
        borderRadius: maxSize / 2,
        backgroundColor,
      }
    }
    const origin = this.state.containerOrigin;
    const fabContainerStyleOnTransform = this.getFabContainerStyleOnTransform(this._dialogTransformProgress, origin);
    const fabContainerStyle = [styles.fabContainer, this.props.style, fabContainerStyleOnTransform];
    return (
      <View style={[styles.fullScreen, { justifyContent: 'center' }]}>
        <TouchableWithoutFeedback onPress={onBackgroundPress}>
          <Animated.View style={[styles.fullScreen, animatedModalStyle]} />
        </TouchableWithoutFeedback>
        <Animated.View style={fabContainerStyle} ref={v => this._fabContainer = v} >
          <AnimatedFab icon='add-shopping-cart' backgroundColor={FAB_COLOR}
            style={[styles.fab, getFabStyleOnTransform(this._dialogTransformProgress)]}
            onPress={onFabPress} />
          <Animated.View style={[styles.dialog, 0]}
            pointerEvents='box-none'>
            <Text style={{ marginBottom: 50 }}>Please log in first!</Text>
            <Button title="LOG IN" color={FAB_COLOR} onPress={() => console.log("Log in pressed.")} />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}
const measureInWindow = (ref) => {
  return new Promise((resolve, reject) => {
    const tag = findNodeHandle(ref);
    UIManager.measureInWindow(tag, (x, y, width, height) => {
      if ([x, y, width, height].every(n => _.isNumber(n))) {
        resolve({ x, y, width, height });
      } else {
        reject(`Failed to measure ${tag}. x=${x}, y=${y}, width=${width}, height=${height}`);
      }
    });
  });
}
const styles = StyleSheet.create({
    window: {
      backgroundColor: '#FAFAFA',
      flex: 1,
    },
    heroImage: {
      width: HERO_WIDTH,
      height: HERO_HEIGHT,
    },
    titleContainer: {
      backgroundColor: '#efefef',
      padding: metrics.screenEdgeMarginHorizontal,
    },
    titleText: {
      ...fonts.sizes.headline,
      ...fonts.families.sansSerifCondensed
    },
    descriptionText: {
      ...fonts.sizes.body2,
      margin: metrics.screenEdgeMarginHorizontal,
    },
    fullScreen: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    priceContainer: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      paddingLeft: metrics.screenEdgeMarginHorizontal,
      paddingRight: metrics.screenEdgeMarginHorizontal,
      paddingTop: metrics.gutterVertical,
      paddingBottom: metrics.gutterVertical,
    },
    priceText: {
      ...fonts.sizes.display1,
      color: 'white',
    },
    dialog: {
      backgroundColor: '#FAFAFA',
      elevation: metrics.elevation.dialog,
      alignSelf: 'center',
      paddingLeft: metrics.baselineGrid * 8,
      paddingRight: metrics.baselineGrid * 8,
      paddingTop: metrics.baselineGrid * 4,
      paddingBottom: metrics.baselineGrid * 4,
      width: DIALOG_WIDTH,
      height: DIALOG_HEIGHT,
      justifyContent: 'center',
      opacity: 0,
      // alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
    },
    fabContainer: {
      position: 'absolute',
      right: -4,
      elevation: metrics.elevation.fabResting,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    fab: {
    },
    toolbarHeart: {
      width: 160,
      height: 160,
      marginRight: -64,
    }
  })

//////////// Transform dialog functions /////////
