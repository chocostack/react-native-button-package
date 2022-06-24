import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

export default class DefaultButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }

        return <TouchableWithoutFeedback onPress={() => {
                if (!this.props.disabled)
                    this.props.onPress();
            }}>
                <View style={[{
                    borderColor: '#404040',
                    borderWidth: 1,
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    ...disabledStyle
                }, this.props.style]}>
                    {this.props.loading ?
                        <ActivityIndicator size={18} color={'#404040'} />
                        :
                        null
                    }
                    {this.props.icon && !this.props.loading ?
                        this.props.icon
                        :
                        null}
                    {this.props.icon && this.props.text ?
                        <View style={{ width: 5 }}>
                        </View>
                        :
                        null}
                    <Text style={{ fontSize: 15, color: '#404040', ...this.props.textStyle }}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>;
    }

}

export class DarkButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }


        return <TouchableWithoutFeedback onPress={() => {
                if (!this.props.disabled)
                    this.props.onPress();
            }}>
                <View style={[{
                    backgroundColor: '#404040',
                    padding: 8,
                    borderRadius: 8,
                    flexDirection: 'row',
                    ...disabledStyle
                }, this.props.style]}>
                    {this.props.icon ?
                        this.props.icon
                        :
                        null}
                    {this.props.icon && this.props.text ?
                        <View style={{ width: 5 }}>
                        </View>
                        :
                        null}
                    <Text style={{ color: 'white', fontSize: 15, ...this.props.textStyle }}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>;
    }

}