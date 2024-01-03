import { Container } from "./styles";
import { getProducts, removeProduct } from "./requests";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const request = async () => {
      const get = await getProducts();
      setProducts(get);
    };

    request();
  }, []);

  const handleRemove = async (id: number) => {
    await removeProduct(id);
  };

  return (
    <>
      <Container>
        <Button onClick={() => navigate("/formulario")}>Criar Produto</Button>
        <div style={{ marginBottom: 50 }} />
        <TableContainer maxWidth="100%">
          <Table variant="simple" style={{ width: "100%" }}>
            <TableCaption>Produtos Cadastrados</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Nome</Th>
                <Th>Preço</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products?.length
                ? products.map((data: any, i: number) => (
                    <Tr key={i}>
                      <Td>{data.id}</Td>
                      <Td>{data.name}</Td>
                      <Td>{data.price}</Td>
                      <Td>
                        <Button onClick={() => handleRemove(data.id)}>
                          Excluir
                        </Button>
                      </Td>
                    </Tr>
                  ))
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;
