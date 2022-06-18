import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 350px 20px 50px;
  width: 100%;

  border-bottom: 4px solid #4e4e4e;
  background-color: #e7e7e7;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding-right: 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 20px 20px 10px;
  }

  p {
    width: 500px;
    color: #464646;
    font-size: 18px;
    text-align: center;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 14px;
    }
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
  }
`

export const Title = styled.p`
  margin: 50px;
  text-align: center;
  font-size: 32px;
`

export const ButtonGroups = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 10px 20px;

  font-size: 16px;
  color: #fff;
  background-color: #207a47;
  border: none;
  border-radius: 5px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const AllGroups = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Groups = styled.p`
  width: 60%;
  margin: 10px 0 10px 0;
  padding: 10px 20px;

  border-radius: 5px;
  background-color: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 10px;
  width: 60%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 30%;
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 30%;
    width: 80%;
  }
`

export const PersonList = styled.div`
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(204, 209, 210);

  h3 {
    border-bottom: 1px solid rgb(204, 209, 210);
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #404040;
    font-size: 16px;
  }
`

export const Person = styled.div`
  color: #404040;
  font-size: 16px;
  font-weight: normal;
`

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(204, 209, 210);
`
