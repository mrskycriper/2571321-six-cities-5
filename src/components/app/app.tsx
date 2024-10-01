import Main from "../../pages/main/main";
import { PlaceCardEntity } from "../place-card/entities/interfaces";

const samplePlaces: PlaceCardEntity[] = [
    {
        mark: 'Premium',
        imageSrc: 'img/apartment-01.jpg',
        priceValue: 120,
        priceType: 'night',
        starRating: 4,
        name: 'Beautiful &amp; luxurious apartment at great location',
        type: 'Apartment',
    },
    {
        imageSrc: 'img/room.jpg',
        priceValue: 80,
        priceType: 'night',
        starRating: 4,
        name: 'Wood and stone place',
        type: 'Room',
    },
    {
        imageSrc: 'img/apartment-02.jpg',
        priceValue: 132,
        priceType: 'night',
        starRating: 4,
        name: 'Canal View Prinsengracht',
        type: 'Apartment',
    },
    {
        mark: 'Premium',
        imageSrc: 'img/apartment-03.jpg',
        priceValue: 180,
        priceType: 'night',
        starRating: 4,
        name: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
    },
    {
        imageSrc: 'img/room.jpg',
        priceValue: 80,
        priceType: 'night',
        starRating: 4,
        name: 'Wood and stone plact',
        type: 'Room',
    },
];

function App(): JSX.Element {
    return (
        <Main places={samplePlaces}/>
    );
}

export default App;