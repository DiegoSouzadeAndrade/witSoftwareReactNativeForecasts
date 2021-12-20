interface CityData {
  name: string;
  wheather: string;
  tempMax: number;
  tempMin: number;
  tempActual: number;
  windSpeed: number;
  humidity: number;
  icon: string;
  description?: string;
  senderName?: string;
  event?: string;
  dt: number;
}

const initialState: Array<CityData> = [];

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
