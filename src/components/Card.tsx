import { laryfy, Element, Container, useBreakPoints } from "@_ricecooker/lary";
import { Text as NativeText } from "react-native";
import { Image as NativeImage } from "react-native";
import { TouchableOpacity as PaperButton } from "react-native";

const Text = laryfy<React.ComponentProps<typeof NativeText>>(NativeText as React.ComponentType<unknown>);
const Image = laryfy<React.ComponentProps<typeof NativeImage>>(NativeImage as React.ComponentType<unknown>);
const Button = laryfy<React.ComponentProps<typeof PaperButton>>(PaperButton as React.ComponentType<unknown>);

const Card = (): JSX.Element => {
  const {isSm} = useBreakPoints()
  return (
    <Container row justifyCenter>
        <Element m1 r4 bgWarning style={{maxWidth: 500}} widthFull>
            <Container column widthFull>
                <Image
                    height={400}
                    r4
                    source={{
                        uri: 'https://img.freepik.com/free-vector/animal-doing-dabbing-movement_23-2147851266.jpg'
                    }}
                />
                <Container row m6 alignCenter justifyCenter>
                    <Text f3 inWhite bold textCenter text2xl>
                        {isSm ? "Unicorn" : "Dabbing Unicorn"}
                    </Text>
                    <Text f1 inWhite bold textCenter text2xl>
                        $5.6
                    </Text>
                    <Button f1 bgSecondary onPress={() => console.log('Pressed')} r4>
                        <Container row m1>
                            <Text f3 inWhite bold textCenter>
                                Buy
                            </Text>
                        </Container>
                    </Button>
                </Container>
            </Container>
        </Element>
    </Container>
  );
};

export default Card