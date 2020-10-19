import styled from 'styled-components/native';

const Container = styled.View`
  background: #FCA311;
  height: 450px;
  width: 320px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  /* height: 120px; */
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding: 20px;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 600;
`;

const Description = styled.Text`
  padding: 15px;
  padding-top: 0px;
  color: #FFFFFF;
  font-size: 15px;
`;

export {Container, Cover, Image, Content, Title, Description};
