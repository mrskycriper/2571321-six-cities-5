import Main from "../../pages/main/main";
import { PlaceCardEntity } from "../../components/place-card/entities/interfaces";

type Props = {
    places: PlaceCardEntity[];
};

function App({places}: Props): JSX.Element {
    return (
        <Main places={places}/>
    );
}

export default App;