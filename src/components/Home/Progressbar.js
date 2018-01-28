import React, { Component } from 'react';
import { View, ProgressBarAndroid, Text } from 'react-native'

const ProgressBar = ({}) => {
    var progressBar =
        <View style={styles.container}>
        <ProgressBar styleAttr="Inverse" />
        </View>;
    return(
        <View>
        <ProgressBarAndroid
            componentView={componentView}
            loadingView={progressBar}
            style={styles.loadingComponent}
        />
        </View>
    )
}
export default ProgressBar;