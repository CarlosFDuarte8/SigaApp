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

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>Resumo</Text>
      <BarChart
        data={{
          labels: ['Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
          datasets: [
            {
              data: [1200.00, 1200.00, 1200.00, 2117.50, 2117.50, 2213.00],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={250}
        yAxisLabel={'R$'}
        yAxisSuffix={''}
        chartConfig={{
          backgroundColor: '#00FF00',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#CCCCCC',
          decimalPlaces: 1,
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

export default MyBarChart;

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
