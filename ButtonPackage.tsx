import React, {FC, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

interface BaseButtonProps {
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    text?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
}

/**
 * DefaultButton
 */
export const DefaultButton: FC<BaseButtonProps> = ({
                                                       disabled,
                                                       loading,
                                                       icon,
                                                       text,
                                                       style,
                                                       textStyle,
                                                       onPress,
                                                   }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        borderColor: '#404040',
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 6,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="#404040"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text style={[{fontSize: 18, color: '#404040'}, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

interface BorderlessButtonProps extends BaseButtonProps {
    className?: string; // for web usage, if needed
    alignText?: 'left' | 'center' | 'right' | string;
    to?: string; // for web usage with React Navigation or link props
}

/**
 * BorderlessButton
 */
export const BorderlessButton: FC<BorderlessButtonProps> = ({
                                                                disabled,
                                                                loading,
                                                                icon,
                                                                text,
                                                                style,
                                                                textStyle,
                                                                onPress,
                                                                className,
                                                                alignText,
                                                                to,
                                                            }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            className={`clickable react-button ${className ?? ''}`}
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
            // for web usage, if needed
            to={to}
        >
            <View
                style={[
                    {
                        padding: 8,
                        flexDirection: 'row',
                        justifyContent: alignText ?? 'center',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="#404040"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text
                    style={[{fontSize: 18, color: '#404040', textAlign: 'center'}, textStyle]}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

/**
 * DarkButton
 */
export const DarkButton: FC<BaseButtonProps> = ({
                                                    disabled,
                                                    loading,
                                                    icon,
                                                    text,
                                                    style,
                                                    textStyle,
                                                    onPress,
                                                }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        backgroundColor: '#404040',
                        padding: 8,
                        borderRadius: 6,
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="white"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text style={[{color: 'white', fontSize: 18}, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

/**
 * ThemeButton
 */
export const ThemeButton: FC<BaseButtonProps> = ({
                                                     disabled,
                                                     loading,
                                                     icon,
                                                     text,
                                                     style,
                                                     textStyle,
                                                     onPress,
                                                 }) => {
    const disabledStyle = disabled
        ? {
            backgroundColor: '#CCCCCC',
            // 'boxShadow' is not standard in RN but might be for web usage
            boxShadow: 'none' as const, // Type assertion
        }
        : {};

    const disabledTextStyle = disabled
        ? {
            color: 'gray',
        }
        : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        backgroundColor: '#f05423',
                        padding: 8,
                        borderRadius: 6,
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="white"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text
                    style={[{color: 'white', fontSize: 18}, textStyle, disabledTextStyle]}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

/**
 * BlueButton
 */
export const BlueButton: FC<BaseButtonProps> = ({
                                                    disabled,
                                                    loading,
                                                    icon,
                                                    text,
                                                    style,
                                                    textStyle,
                                                    onPress,
                                                }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        backgroundColor: '#037C87',
                        padding: 8,
                        borderRadius: 6,
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="white"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text style={[{color: 'white', fontSize: 18}, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

/**
 * RedButton
 */
export const RedButton: FC<BaseButtonProps> = ({
                                                   disabled,
                                                   loading,
                                                   icon,
                                                   text,
                                                   style,
                                                   textStyle,
                                                   onPress,
                                               }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        backgroundColor: '#DD0D02',
                        padding: 8,
                        borderRadius: 6,
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="white"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text style={[{color: 'white', fontSize: 18}, textStyle]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

interface QuantityPickerProps {
    quantity: number;
    onChange: (newQuantity: number) => void;
    style?: StyleProp<ViewStyle>;
}

/**
 * QuantityPicker
 */
export const QuantityPicker: FC<QuantityPickerProps> = ({
                                                            quantity,
                                                            onChange,
                                                            style,
                                                        }) => {
    const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

    const handleDecrease = () => {
        if (currentQuantity === 1) return;

        const newQty = currentQuantity - 1;
        setCurrentQuantity(newQty);
        onChange(newQty);
    };

    const handleIncrease = () => {
        const newQty = currentQuantity + 1;
        setCurrentQuantity(newQty);
        onChange(newQty);
    };

    const disabledMinusStyle = currentQuantity === 1 ? {opacity: 0.5} : {};

    return (
        <View style={[{flexDirection: 'row', justifyContent: 'flex-end'}, style]}>
            <TouchableOpacity onPress={handleDecrease}>
                <Text
                    style={[
                        {
                            color: '#404040',
                            borderBottomLeftRadius: 7,
                            borderTopLeftRadius: 7,
                            backgroundColor: '#DDDDDD',
                            padding: 13,
                            paddingTop: 2,
                            paddingBottom: 2,
                            fontSize: 23,
                        },
                        disabledMinusStyle,
                    ]}
                >
                    -
                </Text>
            </TouchableOpacity>
            <Text
                style={{
                    color: '#404040',
                    backgroundColor: '#DDDDDD',
                    padding: 13,
                    paddingTop: 7,
                    paddingBottom: 7,
                }}
            >
                {currentQuantity}
            </Text>
            <TouchableOpacity onPress={handleIncrease}>
                <Text
                    style={{
                        color: '#404040',
                        borderBottomRightRadius: 7,
                        borderTopRightRadius: 7,
                        backgroundColor: '#DDDDDD',
                        padding: 13,
                        paddingTop: 2,
                        paddingBottom: 2,
                        fontSize: 23,
                    }}
                >
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

interface FloatingButtonProps {
    onPress?: () => void;
    icon?: React.ReactNode;
}

/**
 * FloatingButton
 */
export const FloatingButton: FC<FloatingButtonProps> = ({onPress, icon}) => {
    return (
        <View style={{position: 'absolute', right: 25, bottom: 50, borderRadius: 30}}>
            <TouchableOpacity onPress={onPress}>
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#404040',
                        elevation: 3, // Android-only style
                    }}
                >
                    {icon}
                </View>
            </TouchableOpacity>
        </View>
    );
};

interface TagButtonProps extends BaseButtonProps {
}

/**
 * TagButton
 */
export const TagButton: FC<TagButtonProps> = ({
                                                  disabled,
                                                  loading,
                                                  icon,
                                                  text,
                                                  style,
                                                  textStyle,
                                                  onPress,
                                              }) => {
    const disabledStyle = disabled ? {opacity: 0.5} : {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (!disabled && onPress) {
                    onPress();
                }
            }}
        >
            <View
                style={[
                    {
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 3,
                        paddingBottom: 3,
                        borderRadius: 25,
                        backgroundColor: '#404040',
                        flexDirection: 'row',
                    },
                    style,
                    disabledStyle,
                ]}
            >
                {loading && <ActivityIndicator size={18} color="white"/>}
                {!loading && icon}
                {icon && text && !loading && <View style={{width: 5}}/>}
                <Text
                    className="ws-nowrap"
                    style={[{fontSize: 16, color: 'white'}, textStyle]}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
