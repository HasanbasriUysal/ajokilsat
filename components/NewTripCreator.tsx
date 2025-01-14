import {useState} from 'react';
import {Trip} from '../types/Trip';
import {saveTrip} from '../utils/store';
import NewTripForm from './NewTripForm';
import { ScrollView } from 'react-native';

type Props = {
    onSubmit?: (trip: Trip) => void;
};

export default function NewTripCreator({onSubmit}: Props) {
    const [latestTripId, setLatestTripId] = useState<string | null>(null);

    return (
        <ScrollView>
            <NewTripForm
                key={latestTripId ?? ''}  // Vaihda Form aina kun tallennetaan
                onSubmit={async (trip: Trip) => {
                    setLatestTripId(trip.id);
                    await saveTrip(trip);
                    onSubmit?.(trip);
                }}
            />
        </ScrollView>
    );
}