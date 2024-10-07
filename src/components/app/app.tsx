import Main from '../../pages/main/main';
import { PlaceCardEntity } from '../../components/place-card/entities/interfaces';

type AppProps = {
  places: PlaceCardEntity[];
};

function App({ places }: AppProps): JSX.Element {
  return (
    <Main places={places} />
  );
}

export default App;
