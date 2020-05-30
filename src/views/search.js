import { Button } from "react-native";
import * as React from "react"

import BoxCenter from "../components/box-center";

function SearchView({navigation}) {
    return (
        <BoxCenter flex={1} justifyContent="center" alignItems="center">
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </BoxCenter>
    );
}

export default SearchView