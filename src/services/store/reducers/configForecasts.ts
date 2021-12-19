interface ForecastConfigData {
  units: string;
  lang: string;
}

const initialState: ForecastConfigData = {
  units: 'metric',
  lang: 'pt',
};

// const response = await api.get(
//   `/forecast?id=${cityId}appid=28c5e034b88b2e6954f92d3e8f237bb1`,
// );

interface ActionToggleUnit extends ForecastConfigData {
  type: 'changeUnit';
}
interface ActionToggleLang extends ForecastConfigData {
  type: 'changeLang';
}
type Action = ActionToggleUnit | ActionToggleLang;
export default (state = initialState, action: Action) => {
  switch (action.type) {
    case 'changeUnit':
      return {...state, units: action.units};
    case 'changeLang':
      return {...state, lang: action.lang};
    default:
      return state;
  }
};
