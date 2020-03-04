import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ActionButtonItem extends Component {

  render() {
    const offsetX = this.props.radius * Math.cos(this.props.angle);
    const offsetY = this.props.radius * Math.sin(this.props.angle);
    return (
      <Animated.View
        style={[{
          opacity: this.props.anim,
          width: this.props.size,
          height: this.props.size,
          transform: [
            {
              translateY: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetY],
              }) },
            {
              translateX: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetX],
              }) },
            {
              rotate: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [`${this.props.startDegree}deg`, `${this.props.endDegree}deg`],
              }) },
            {
              scale: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }) },
          ]
        }, this.props.buttonStyle]}
      >
        <TouchableOpacity style={styles.actionButtonWrapper} activeOpacity={this.props.activeOpacity || 0.85} onPress={this.props.onPress}>
          <View>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

}

ActionButtonItem.propTypes = {
  angle: PropTypes.number,
  radius: PropTypes.number,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  startDegree: PropTypes.number,
  endDegree: PropTypes.number,
  buttonStyle: PropTypes.object
};

ActionButtonItem.defaultProps = {
  onPress: () => {},
  startDegree: 0,
  endDegree: 720,
  buttonStyle: null
};

const styles = StyleSheet.create({
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
    backgroundColor: 'red',
    position: 'absolute',
  },
  actionButtonWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
