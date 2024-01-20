import React, { useEffect, useState } from "react";
import {
  Container,
  RegisterWrapper,
  SideBanner,
  Input,
  FormInput,
  Form,
  RegisterBtn,
  DropContainer,
  ImageContainer,
  Preview,
  UploadMessage,
  ImageInfo,
  DoubleInput,
} from "./styles";
import Dropzone from "react-dropzone";
import { AiFillCamera } from "../../styles/Icons";
import simple_logo from "../../assets/simple_logo.png";
import axios from "axios";
import { consultCEP } from "../../services/api";
import { useNavigate } from "react-router";

function UploadedImage(props) {
  return (
    <ImageContainer>
      <Preview src={props.preview} />
      <ImageInfo>
        <p>{props.name}</p>
        <sub>{`${props.type} - ${(props.size / (1024 * 1024)).toFixed(
          2
        )} mb`}</sub>
      </ImageInfo>
    </ImageContainer>
  );
}

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    cep: 0,
    street: "",
    neighborhood: "",
    complement: "",
    uf: "",
  });
  const [pictureInfo, setPictureInfo] = useState({});

  async function createUserAccount() {
    try {
      if (
        !registerData.name ||
        !registerData.email ||
        !pictureInfo.file ||
        !registerData.password ||
        !registerData.street ||
        !registerData.neighborhood ||
        !registerData.number
      ) {
        throw new Error("Há um campo faltando");
      }

      const formData = new FormData();
      formData.append("file", pictureInfo.file);
      formData.append("name", registerData.name);
      formData.append("email", registerData.email);
      formData.append("password", registerData.password);
      formData.append("cep", registerData.cep);
      formData.append("street", registerData.street);
      formData.append("neighborhood", registerData.neighborhood);
      formData.append("complement", registerData.complement);
      formData.append("uf", registerData.uf);
      formData.append("number", registerData.number);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 && response.data.token) {
        alert("Conta criada com sucesso!");
        localStorage.setItem("access_token", response.data.token);
        window.location.href = "/";
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste sua imagem aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte-o!!</UploadMessage>;
  }

  useEffect(() => {
    if ((registerData.cep || []).length >= 8) {
      try {
        const getCepInfo = async () => {
          const response = await consultCEP(registerData.cep);

          setRegisterData((prevState) => ({
            ...prevState,
            street: response.logradouro,
            neighborhood: response.bairro,
            uf: response.uf,
          }));
        };

        getCepInfo();
      } catch (error) {
        console.log(error);
      }
    }
  }, [registerData.cep]);

  function handleUpload(file) {
    file.map((item) => {
      setPictureInfo({
        file: item,
        name: item.name,
        type: item.type,
        size: item.size,
        preview: URL.createObjectURL(item),
      });
    });
  }

  return (
    <Container>
      <SideBanner />
      <RegisterWrapper>
        <img src={simple_logo} className="logo" />
        <h1>Crie uma conta</h1>
        <p>E comece a pedir em mais de 50.000 restaurantes!</p>

        <Form>
          <Input>
            <FormInput
              placeholder="Nome"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            <label className="form-label">Nome</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Email"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <label className="form-label">Email</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Senha"
              type="password"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            <label className="form-label">Senha</label>
          </Input>

          <Input>
            <FormInput placeholder="Senha" type="password" />
            <label className="form-label">Senha Novamente</label>
          </Input>

          <b>Informações de Entrega</b>
          <Input>
            <FormInput
              placeholder="Seu CEP"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  cep: e.target.value,
                }))
              }
              type="text"
            />
            <label className="form-label">Seu CEP</label>
          </Input>

          <DoubleInput>
            <Input>
              <FormInput
                placeholder="Rua"
                type="text"
                disabled={registerData.cep ? true : false}
                value={registerData.street}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    street: e.target.value,
                  }))
                }
              />
              <label className="form-label">Rua</label>
            </Input>
            <Input>
              <FormInput
                placeholder="Seu Bairro"
                type="text"
                value={registerData.neighborhood}
                disabled={registerData.cep ? true : false}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    neighborhood: e.target.value,
                  }))
                }
              />
              <label className="form-label">Seu Bairro</label>
            </Input>
          </DoubleInput>

          <DoubleInput>
            <Input>
              <FormInput
                placeholder="Número"
                className="number"
                type="text"
                value={registerData.number}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    number: e.target.value,
                  }))
                }
              />
              <label className="form-label">Número</label>
            </Input>
            <Input>
              <FormInput
                placeholder="Complemento"
                type="text"
                value={registerData.complement}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    complement: e.target.value,
                  }))
                }
              />
              <label className="form-label">Complemento</label>
            </Input>
          </DoubleInput>

          <p>Sua foto de perfil</p>
          <Dropzone accept="image/*" onDropAccepted={handleUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <AiFillCamera size={30} color="gray" />
                <input {...getInputProps()} />
                {renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
            )}
          </Dropzone>
          {pictureInfo.name != null && (
            <UploadedImage
              preview={pictureInfo.preview}
              name={pictureInfo.name}
              type={pictureInfo.type}
              size={pictureInfo.size}
            ></UploadedImage>
          )}

          <RegisterBtn onClick={() => createUserAccount()}>
            Criar Conta
          </RegisterBtn>
          <sub>
            Já tem uma conta?{" "}
            <span onClick={() => navigate("/login")}>Entre</span>
          </sub>
        </Form>
      </RegisterWrapper>
    </Container>
  );
}

export default Register;
