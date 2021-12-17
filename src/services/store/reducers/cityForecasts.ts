interface CityData {
  name: string;
  wheather: number;
  tempMax: number;
  tempMin: number;
  tempActual: number;
  windSpeed: number;
  humidity: number;
}

const initialState: Array<CityData> = [];

// const response = await api.get(
//   `/forecast?id=${cityId}appid=28c5e034b88b2e6954f92d3e8f237bb1`,
// );

interface ActionAddCity extends CityData {
  type: 'addCity';
}
interface ActionRemoveCity {
  type: 'removeCity';
  name: string;
}
type ActionCity = ActionAddCity | ActionRemoveCity;
export default (state = initialState, action: ActionCity) => {
  switch (action.type) {
    case 'addCity':
      const {type: _, ...rest} = action;
      return [...state, rest];
    default:
      return state;
  }
};
