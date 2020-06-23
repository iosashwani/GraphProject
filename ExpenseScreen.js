import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import AreaChartExample from './GraphCompoent'
import { Reducer } from 'react-native-router-flux';
import Axios from 'axios';


class ExpenseScreen extends Component {
    state = {
        dataArray: []
    }


    componentDidMount() {
        Axios.get('https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439')
            .then(res => {
                const dataArray = res.data
                this.setState({ dataArray })
                console.log(dataArray, "helloe friends")
            })
    }



    render() {
        const { dataArray } = this.state;

        return (
            <View style={styles.mainViewStyle}>
                <View style={styles.expenseViewStyle}>
                    <View style={styles.expenseTextViewStyle}>
                        <Text style={styles.expenseTextStyle}>Expenses</Text>
                    </View>
                    <View style={styles.expenseIconViewStyle}>
                    </View>
                </View>
                <View style={styles.cardBalanceView}>
                    <Text style={styles.cardBalanceTextStyle}>Card Balance</Text>
                    <View style={styles.upArrowMainViewStyle}>
                        <View style={styles.upArrowViewStyle}>
                        </View>
                        <Text style={styles.upArrowTextStyle}>$3,214</Text>

                    </View>
                </View>


                <View style={{ flex: .07, marginLeft: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.BalanceTextStyle}>${dataArray.cardBalance}</Text>
                    </View>
                    <View style={{ alignContent: 'space-between', marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.downArrowViewStyle}>
                        </View>
                        <Text style={styles.downBalanceTextStyle}>$3,214</Text>

                    </View>

                </View>
                <View style={styles.calenderView}>
                    <View style={{ marginLeft: 20, justifyContent: 'center'}}>
                        <Text style={{alignItems:'center'}}>
                            Monthly
                       </Text>
                    </View>
                    <FlatList
                        data={dataArray.month}
                        renderItem={this.renderMonth}
                        horizontal={true}>
                    </FlatList>
                </View>

                <View style={styles.graphViewStyle}>
                    <AreaChartExample 
                     datachart = {this.state.dataArray}
                    >
                    </AreaChartExample>
                </View>
                <View style={{ flex: .1 }}>
                    <FlatList
                        data={dataNumbers}
                        renderItem={({ item }) => <DataItem title={item.title} />}
                        horizontal={true}>
                    </FlatList>
                </View>
                <View style={{ flex: .3, marginLeft: 15, marginRight: 15, marginTop: 15 }}>
                    <Text style={{ color: '042c5c', fontSize: 20 }}>Spending Breakdown</Text>
                    <View style={{ flex: .9, marginTop: 15 }}>
                        <FlatList
                            data={dataArray.spending}
                            renderItem={this.renderSpendingBreakDownList}
                            showsVerticalScrollIndicator={false}
                        >
                        </FlatList>
                    </View>

                </View>

            </View>
        )
    }
    renderSpendingBreakDownList = ({ item }) => {
        for (let [key, value] of Object.entries(item)) {
            var dataBreakDown = key
            return (
                <View style={styles.bottomFlatListView}>

                    <View style={styles.bottomLeftIConViewstyle}>
                    </View>
                    <View style={styles.bootomMiddleViewStyle}>
                        <Text style={styles.bottomDataBreakDownTextStyle }>{dataBreakDown}</Text>
                        <View style={{ marginTop: 10 }}>
                           <Text>{item.date}</Text> 
                        </View>
                    </View>
                        <Text style={styles.bottomPriceTextStyle}>- $279,90</Text>
                
                </View>
            )
        }
    }

    renderMonth = ({item}) => {
        return (
            <View style={styles.monthItemMainViewStyle}>
                <View style={styles.monthItemViewSyle}>
                    <Text style={styles.monthTextStyle}>{item}</Text>
                </View>
            </View>
        );
    }

}

function DataItem({ title }) {
    return (
        <View style={{ marginTop: 15, flex: 1, flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between' }}>
            <View style={{ height: 25, width: 25, marginLeft: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 18 }}>{title}</Text>
            </View>
        </View>
    );
}
function MonthItem({ title }) {
    return (
        <View style={styles.monthItemMainViewStyle}>
            <View style={styles.monthItemViewSyle}>
                <Text style={styles.monthTextStyle}>{title}</Text>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: '#f8f9f9',
        flex: 1
    },
    expenseViewStyle: {
        flex: .09,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    expenseTextViewStyle: {
        alignContent: 'space-between'
    },
    expenseTextStyle: {
        fontWeight: "bold",
        fontSize: 20
    },
    expenseIconViewStyle: {
        alignContent: 'space-between',
        marginRight: 20,
        height: 20,
        width: 20,
        backgroundColor: '#0047cc'
    },
    cardBalanceView: {
        flex: .040,
        marginLeft: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    cardBalanceTextStyle: {
        color: '#77869e',
        fontSize: 16,
    },
    graphViewStyle: {
        flex: .6,
    },
    calenderView: {
        flex: .1, 
        marginTop: 15,
        flexDirection: 'row'
    },
    monthItemMainViewStyle: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'space-between'
    },
    monthItemViewSyle: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    monthTextStyle: {
        color: '#77869e',
        fontSize: 15
    },
    BalanceTextStyle: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    upArrowMainViewStyle: {
        alignContent: 'space-between',
        marginRight: 20,
        flexDirection: 'row'
    },
    upArrowViewStyle: {
        height: 20,
        width: 20,
        backgroundColor: '#e2f2eb'
    },
    upArrowTextStyle: {
        color: '#1bc773',
        fontSize: 18,
        marginLeft: 15
    },
    downBalanceTextStyle: {
        color: 'red',
        fontSize: 18,
        marginLeft: 15
    },
    downArrowViewStyle: {
        height: 20,
        width: 20,
        backgroundColor: '#f6e6e7'
    },
    bottomFlatListView:{
        marginTop: 15, 
        flex: 1,
        borderRadius: 8,
        backgroundColor: 'white', 
        flexDirection: 'row'
    },
    bottomLeftIConViewstyle:{
        height: 40, 
        width: 40, 
        backgroundColor: "#ff7e87", 
        marginLeft: 15,
         borderRadius: 5, 
         alignItems: 'center', 
         justifyContent: 'center', 
         marginTop: 5 
    },
    bootomMiddleViewStyle:
    {
         flexDirection: "column", 
         marginLeft: 20 
    },
        bottomDataBreakDownTextStyle:{
        color: '#042c5c', 
        fontSize: 20
        },
    bottomPriceTextStyle:{
        color: '#ee5a55',
         fontSize: 20,
         alignSelf: 'center',
          justifyContent: 'flex-end',
    }    
})

const dataNumbers = [
    {
        title: '01',
    },
    {
        title: '02',
    },
    {
        title: '03',
    },
    {
        title: '04',
    }, {
        title: '05',
    }, {
        title: '06',
    }, {
        title: '07',
    }, {
        title: '08',
    }, {
        title: '09',
    },
];

export default ExpenseScreen