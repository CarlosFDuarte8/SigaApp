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

const MyLineChart = () => {
  return (
    <>
      <Text style={{
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
      }}>Histórico</Text>
      <LineChart
        data={{
          labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
          datasets: [
            {
              data: [1200.00, 1200.00, 1200.00, 2117.50, 2117.50, 2213.00],
              strokeWidth: 2,
            },
          ],
        }}
        yAxisLabel={'R$'}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 5,
        }}
      />
    </>
  );
};

export default MyLineChart;

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
