import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useTheme, Text, Navbar } from "@nextui-org/react";

const CustomNavbar: FC = () => {
  const { theme } = useTheme();

  return (
    <Navbar isBordered variant="floating">
      <NextLink href="/">
        <Navbar.Brand>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la App"
            width={70}
            height={70}
          />
          <Text b color="inherit" hideIn="xs" h2>
            P
          </Text>
          <Text b color="inherit" hideIn="xs" h3>
            okemon
          </Text>
        </Navbar.Brand>
      </NextLink>

      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link isActive href="/favorites">
          Favorites
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
