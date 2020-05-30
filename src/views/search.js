import { Button } from "react-native";
import * as React from "react"

import BoxCenter from "../components/box-center";
import Box from "../components/box";

function SearchView({navigation}) {
    return (
        <BoxCenter flex={1} justifyContent="center" alignItems="center">
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Box size={20} bg="blue" mt={20} />
        </BoxCenter>
    );
}

export default SearchView