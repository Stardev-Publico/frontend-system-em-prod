import { Input, Button } from "@chakra-ui/react";
import { Container } from "../home/styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const save = async (data: any) => {
    try {
      await api.post("/product", data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(save)}>
        <label>Nome</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input placeholder="digite o nome do produto" {...field} />
          )}
        />
        {errors?.name && <p>{errors.name.message}</p>}
        <div style={{ marginBottom: 50 }} />
        <label>Preço</label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Input placeholder="digite o preço do produto" {...field} />
          )}
        />
        {errors?.price && <p>{errors.price.message}</p>}
        <div style={{ marginBottom: 50 }} />
        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
};

export default Formulario;
