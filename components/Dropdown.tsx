import {View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, TouchableWithoutFeedback, Platform} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import {AntDesign} from '@expo/vector-icons';
import {Colors} from './../constants/Colors';

type OptionItem ={
    value: string;
    label: string;
}

interface DropDownProps{
    data: OptionItem[];
    onChange:(item:OptionItem)=>void;
    placeholder: string;
}

export default function Dropdown({
    data, 
    onChange, 
    placeholder,
}: DropDownProps){

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded= useCallback(() => setExpanded(!expanded), [expanded]);
    const [value, setValue] = useState('');
    const buttonRef = useRef<View>(null);
    const [top, setTop] = useState(0);
    const onSelect = useCallback((item: OptionItem) => {
        onChange(item)
        setValue(item.label);
        setExpanded(false);
    }, []);

    return(
        <View ref = {buttonRef}
        onLayout={(event)=> {
            const layout = event.nativeEvent.layout;
            const topOffset = layout.y;
            const heightOfComponent = layout.height;
            const finalValue = topOffset + heightOfComponent + (Platform.OS === 'android' ? -32 : 3);
            //garante que as opções do dropdown ficarão abaixo do campo; talvez tenha que ajustar os números

            setTop(finalValue);
        }}>
            <TouchableOpacity 
            style = {styles.button} 
            activeOpacity={0.8} 
            onPress={toggleExpanded}
            > 
                <Text style = {styles.text}> (value || placeholder) </Text>
                <AntDesign nome={expanded ? 'caretup' : 'caretdown'} />
            </TouchableOpacity>
            {expanded? (
                <Modal visible={expanded} transparent>
                    <TouchableWithoutFeedback onPress={()=> setExpanded(false)}> 
                        <View style={styles.backdrop}> 
                            <View style ={[styles.options, {top},]}> 
                                <FlatList
                                    keyExtractor={(item)=>item.value}
                                    data={data}
                                    renderItem = {({item}) => (
                                        <TouchableOpacity 
                                        activeOpacity={0.8} 
                                        style={styles.optionItem} 
                                        onPress={()=> onSelect(item)}>
                                            <Text> {item.label} </Text> 
                                        </TouchableOpacity> 
                                    )}    
                                    ItemSeparatorComponent={()=> 
                                    <View style={styles.separator} />}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            ) : null}
        </View>
        
    );
}

const styles = StyleSheet.create({
    backdrop:{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    separator:{
        height: 10,
    },
    optionItem:{
        height: 40,
        justifyContent: 'center',
    },
    options:{
        position: 'absolute',
        //top: 53,
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
    },
    text:{
        fontSize: 15,
        opacity: 0.8,
    },
    button:{ /** ajustar altura*/
        color: Colors.colorText,
        borderColor: Colors.stroke,
        borderWidth: 1.5,
        width: 320,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 12,
    }
})