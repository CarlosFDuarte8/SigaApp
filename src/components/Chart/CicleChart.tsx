// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Gastos</Text>
      <PieChart
        data={[
          {
            name: 'Energia',
            population: 140,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Cartão',
            population: 1200,
            color: '#FF0000',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Aluguel',
            population: 850,
            color: '#00FF00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Carro',
            population: 400,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
        ]}
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="Orçamento"
        backgroundColor="transparent"
        paddingLeft="5"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};

export default MyPieChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
