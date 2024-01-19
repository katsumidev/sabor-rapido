import React, { useState } from "react";
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
} from "./styles";
import Dropzone from "react-dropzone";
import { AiFillCamera } from "../../styles/Icons";
import simple_logo from "../../assets/simple_logo.png";

function UploadedImage(props) {
  return (
    <ImageContainer>
      <Preview src={props.preview} />
      <p>{props.name}</p>
    </ImageContainer>
  );
}

function Register() {
  const [name, setName] = useState("");
  const [pictureInfo, setPictureInfo] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCEP] = useState(0);

  function createUserAccount() {
    const data = new FormData();

    data.append("file", pictureInfo.file);
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("cep", cep);

    if (
      cep != null &&
      name != null &&
      email != null &&
      pictureInfo.file != null &&
      password != null
    ) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
        method: "post",
        headers: {
          Accept: "application/json",
        },
        body: data,
      }).then(async (res) => {
        let data = await res.json();

        switch (res.status) {
          case 200:
            if (data.token) {
              alert("conta criada com sucesso!");
              localStorage.setItem("access_token", data.token);
              window.location.href = "/";
            }
            break;
        }
      });
    } else {
      alert("Há um campo faltando");
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

  function handleUpload(file) {
    file.map((item) => {
      setPictureInfo({
        file: item,
        name: item.name,
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
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Nome</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label">Email</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label">Senha</label>
          </Input>

          <Input>
            <FormInput placeholder="Senha" type="password" />
            <label className="form-label">Senha Novamente</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Seu CEP"
              type="text"
              onChange={(e) => setCEP(e.target.value)}
            />
            <label className="form-label">Seu CEP</label>
          </Input>

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
            ></UploadedImage>
          )}

          <RegisterBtn onClick={() => createUserAccount()}>Criar Conta</RegisterBtn>
          <sub>
            Já tem uma conta? <span>Entre</span>
          </sub>
        </Form>
      </RegisterWrapper>
    </Container>
  );
}

export default Register;
