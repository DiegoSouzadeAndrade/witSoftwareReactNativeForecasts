import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tempDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFAF32',
  },
  container: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#f2f2f2',
    elevation: 5,
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  column2: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  column3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  weatherIcon: {width: 100, height: 100},
  textCity: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textTemp: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textSimple: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textMax: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
