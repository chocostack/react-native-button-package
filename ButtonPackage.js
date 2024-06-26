import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class DefaultButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }

        return <TouchableOpacity onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={{
                borderColor: '#404040',
                borderWidth: 1,
                padding: 8,
                borderRadius: 6,
                backgroundColor: 'white',
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
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
                <Text style={{ fontSize: 18, color: '#404040', ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }

}

export class BorderlessButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }

        return <TouchableOpacity
            className={'clickable react-button ' + this.props.className}
            onPress={() => {
                if (!this.props.disabled && this.props.onPress)
                    this.props.onPress();
            }}
            to={this.props.to}
        >
            <View
                style={{
                    padding: 8,
                    flexDirection: 'row',
                    justifyContent: this.props.alignText ? this.props.alignText : 'center',
                    ...this.props.style,
                    ...disabledStyle
                }}>
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ fontSize: 18, color: '#404040', textAlign: 'center', ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
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


        return <TouchableOpacity onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={{
                backgroundColor: '#404040',
                padding: 8,
                borderRadius: 6,
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ color: 'white', fontSize: 18, ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }

}

export class ThemeButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};
        let textStyle = {};

        if (this.props.disabled) {
            disabledStyle = {
                backgroundColor: '#CCCCCC',
                boxShadow: 'none'
            }
            textStyle = {
                color: 'gray'
            }
        }


        return <TouchableOpacity onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={{
                backgroundColor: '#f05423',
                padding: 8,
                borderRadius: 6,
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ color: 'white', fontSize: 18, ...this.props.textStyle, ...textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }

}

export class BlueButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }


        return <TouchableOpacity onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={{
                backgroundColor: '#037C87',
                padding: 8,
                borderRadius: 6,
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ color: 'white', fontSize: 18, ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }
}

export class RedButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }


        return <TouchableOpacity onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={{
                backgroundColor: '#DD0D02',
                padding: 8,
                borderRadius: 6,
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ color: 'white', fontSize: 18, ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }
}

export class QuantityPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: props.quantity
        }
    }

    render() {
        let disabledMinusStyle = {};

        if (this.state.quantity == 1) {
            disabledMinusStyle = { opacity: 0.5 }
        }


        return <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'flex-end', 
                ...this.props.style 
            }}>
            <TouchableOpacity
                onPress={() => {
                    if(this.state.quantity == 1){
                        return;
                    }

                    const quantity = this.state.quantity - 1;

                    this.setState({
                        quantity: quantity
                    });

                    this.props.onChange(quantity);
                }}
            >
                <Text style={{
                    color: '#404040',
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                    backgroundColor: '#DDDDDD',
                    padding: 13,
                    paddingTop: 2,
                    paddingBottom: 2,
                    fontSize: 23,
                    ...disabledMinusStyle
                }}>
                    -
                </Text>
            </TouchableOpacity>
            <Text style={{
                color: '#404040',
                backgroundColor: '#DDDDDD',
                padding: 13,
                paddingTop: 7,
                paddingBottom: 7,
            }}>
                {this.state.quantity}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    const quantity = this.state.quantity + 1;

                    this.setState({
                        quantity: quantity
                    });

                    this.props.onChange(quantity);
                }}
            >
                <Text style={{
                    color: '#404040',
                    borderBottomRightRadius: 7,
                    borderTopRightRadius: 7,
                    backgroundColor: '#DDDDDD',
                    padding: 13,
                    paddingTop: 2,
                    paddingBottom: 2,
                    fontSize: 23
                }}>
                    +
                </Text>
            </TouchableOpacity>
        </View>;
    }
}

export class FloatingButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{ position: 'absolute', right: 25, bottom: 50, borderRadius: 60 / 2 }}>
                <TouchableOpacity onPress={this.props.onPress} >
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60 / 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#404040',
                        elevation: 3
                    }}>
                        {this.props.icon ?
                            this.props.icon
                            :
                            null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

export class TagButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }

        return <TouchableOpacity
            onPress={() => {
                if (!this.props.disabled && this.props.onPress)
                    this.props.onPress();
            }}
        >
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 3,
                paddingBottom: 3,
                borderRadius: 25,
                backgroundColor: '#404040',
                flexDirection: 'row',
                ...this.props.style,
                ...disabledStyle
            }}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text className={"ws-nowrap"} style={{
                    fontSize: 16,
                    color: 'white',
                    ...this.props.textStyle
                }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>;
    }

}