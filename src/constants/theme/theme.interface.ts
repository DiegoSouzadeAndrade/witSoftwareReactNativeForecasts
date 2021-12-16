type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: Array<number>;
  text: {
    small: number;
    middle: number;
    big: number;
  };
};

export default Theme;
