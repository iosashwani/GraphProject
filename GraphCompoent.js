import React from 'react'
import { LineChart, Grid, YAxis, AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View, StyleSheet } from 'react-native'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'

class AreaChartExample extends React.PureComponent {
  
    render() {
       const detete =  this.props.datachart && this.props.datachart.data && this.props.datachart.data.datasets
       console.log(detete,"ashwani rajput")
    // let deteteData = detete.datasets
    //  console.log(deteteData,"ashwni rajput")
        const data = [86,
            114,
            106,
            106,
            107,
            111,
            133,
            221,
            783,
            2478]
        const data2 = [282,
            350,
            411,
            502,
            635,
            809,
            947,
            1402,
            3700,
            5267]
        const yData = [1500,
            1600,
            1700,
            1750,
            1800,
            1850,
            1900,
            1950,
            1999,
            2050]

        const HorizontalLine = (({ y }) => (
            <Line
                key={'zero-axis'}
                x1={'0%'}
                x2={'100%'}
                y1={y(50)}
                y2={y(50)}
                stroke={'grey'}
                strokeDasharray={[4, 8]}
                strokeWidth={2}
            />
        ))

        const Tooltip = ({ x, y }) => (
            <G x={300 / 2}>
                {/* <Line
                        y1={50 + 40}
                        y2={y(data[5])}
                        stroke={'grey'}
                        strokeWidth={2}
                    /> */}
                <Circle
                    cy={y(data[5])}
                    r={6}
                    stroke={'rgb(134, 65, 244)'}
                    strokeWidth={2}
                    fill={'white'}
                />
            </G>
            // </G>
        )
        const contentInset = { top: 15, bottom: 15 }


        return (
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>


                <YAxis
                    data={yData}
                    contentInset={contentInset}
                    svg={{
                        fill: '',
                        fontSize: 10,
                    }}
                    numberOfTicks={8}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    numberOfTicks={8}
                    svg={{ strokeWidth: 3, stroke: '#4df1a1', }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                >
                    <Grid />
                    <Tooltip />
                </LineChart>
                <LineChart
                    style={StyleSheet.absoluteFill}
                    data={data2}
                    svg={{ strokeWidth: 3, stroke: '#f24750', }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}>
                    {/* <Tooltip/> */}
                </LineChart>

            </View>
        )
    }

}


export default AreaChartExample