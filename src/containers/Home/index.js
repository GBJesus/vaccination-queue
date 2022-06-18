import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import React, { useState } from 'react'

import Logo from '../../assets/vacina.png'
import vaccinationList from '../../utils/vaccinationList'
import {
  Container,
  Header,
  Title,
  ButtonGroups,
  AllGroups,
  Groups,
  Person,
  Grid,
  PersonList,
  Date
} from './styles'

function Home() {
  const [visibility, setVisibility] = useState(false)

  const loadGroups = () => {
    if (visibility === true) {
      setVisibility(false)
    } else if (visibility === false) {
      setVisibility(true)
    }
  }
  console.log(visibility)

  const priorities = vaccinationList.pessoas.filter(priority => {
    return priority.idade >= 60
  })

  const groupB = vaccinationList.pessoas.filter(priority => {
    return (
      (priority.idade < 60 && priority.areaDeAtuacao === 'Saúde') ||
      priority.areaDeAtuacao === 'Educação' ||
      priority.areaDeAtuacao === 'Alimentícios' ||
      priority.areaDeAtuacao === 'Segurança'
    )
  })

  const groupsCD = vaccinationList.pessoas.filter(priority => {
    return (
      priority.idade < 60 &&
      priority.areaDeAtuacao !== 'Saúde' &&
      priority.areaDeAtuacao !== 'Educação' &&
      priority.areaDeAtuacao !== 'Alimentícios' &&
      priority.areaDeAtuacao !== 'Segurança'
    )
  })

  const groupC = groupsCD.slice(0, 4)

  const groupD = groupsCD.slice(4)

  return (
    <Container>
      <Header>
        <img src={Logo} alt="imagem-da-logo" style={{ width: 120 }} />
        <p>
          Confira abaixo o cronograma de vacinação dos próximos dias, e veja se
          seu nome consta nos grupos de vacinação.
        </p>
      </Header>

      <Title>Cronograma de Vacinação</Title>

      <ButtonGroups onClick={loadGroups}>
        Próximos Grupos{' '}
        {visibility ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </ButtonGroups>

      {visibility ? (
        <AllGroups>
          <Groups>Grupo 1</Groups>
          <Grid>
            <PersonList>
              <h3>Acima de 60 anos</h3>
              {priorities &&
                priorities.map(priority => (
                  <Person key={priority.nome}>
                    <p>{priority.nome}</p>
                  </Person>
                ))}
            </PersonList>
            <Date>
              <p>20 de junho</p>
            </Date>
          </Grid>

          <Groups>Grupo 2</Groups>
          <Grid>
            <PersonList>
              <h3>
                Profissionais da Saúde, Educação, Setor Alimentício e Segurança
              </h3>
              {groupB &&
                groupB.map(person => (
                  <Person key={person.nome}>
                    <p>{person.nome}</p>
                  </Person>
                ))}
            </PersonList>
            <Date>
              <p>21 de junho</p>
            </Date>
          </Grid>

          <Groups>Grupo 3</Groups>
          <Grid>
            <PersonList>
              {groupC &&
                groupC.map(person => (
                  <Person key={person.nome}>
                    <p>{person.nome}</p>
                  </Person>
                ))}
            </PersonList>
            <Date>
              <p>22 de junho</p>
            </Date>
          </Grid>

          <Groups>Grupo 4</Groups>
          <Grid>
            <PersonList>
              {groupD &&
                groupD.map(person => (
                  <Person key={person.nome}>
                    <p>{person.nome}</p>
                  </Person>
                ))}
            </PersonList>
            <Date>
              <p>23 de junho</p>
            </Date>
          </Grid>
        </AllGroups>
      ) : (
        <span></span>
      )}
    </Container>
  )
}

export default Home
