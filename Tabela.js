import React, {Fragment} from 'react';
import { 
    Container, Header, Title, Content, Body,
    Button, Right, Fab, Icon, List, ListItem, Text 
} from 'native-base';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const Tabela = () => (
    <ScrollView>
        <View style={styles.fragmento}>
            <List>
                <ListItem style={{backgroundColor: "#c9d1f0"}}>
                    <Body>
                        <Text>Situação do aluno(a): Ouvinte</Text>
                    </Body>
                </ListItem>
                <ListItem style={{backgroundColor: "#aab9fa"}}>
                    <Body>
                        <Text>ATIVIDADES</Text>
                    </Body>
                    <Right>
                        <Text>Pontos</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Congressos, Simpósios</Text>
                    </Body>
                    <Right>
                        <Text>10</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Workshops e Seminários</Text>
                    </Body>
                    <Right>
                        <Text>4</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Semanas Científicas</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos Extra Curriculares 20h/a</Text>
                    </Body>
                    <Right>
                        <Text>4</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos Extra Curriculares 40 h/a</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Projeto de Conclusão de Curso</Text>
                    </Body>
                    <Right>
                        <Text>4</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Feiras e Mostras/ Palestras/ Visitas Técnicas</Text>
                    </Body>
                    <Right>
                        <Text>4</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Oficinas</Text>
                    </Body>
                    <Right>
                        <Text>2</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos à distância (até 10 horas)</Text>
                    </Body>
                    <Right>
                        <Text>2</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos à distância (de 10 a 19 horas)</Text>
                    </Body>
                    <Right>
                        <Text>4</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos à distância (de 20 a 39 horas)</Text>
                    </Body>
                    <Right>
                        <Text>6</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos à distância (de 40 horas ou mais)</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
            </List>
            <View style={{marginBottom: 10}}></View>
            <List>
                <ListItem style={{backgroundColor: "#c9d1f0"}}>
                    <Body>
                        <Text>Situação do aluno(a): Participantes / Realizadores</Text>
                    </Body>
                </ListItem>
                <ListItem style={{backgroundColor: "#aab9fa"}}>
                    <Body>
                        <Text>ATIVIDADES</Text>
                    </Body>
                    <Right>
                        <Text>Pontos</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Congressos, Simpósios</Text>
                    </Body>
                    <Right>
                        <Text>20</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Workshops e Seminários</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos Extra Curriculares 20h/a</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Cursos Extra Curriculares 40 h/a</Text>
                    </Body>
                    <Right>
                        <Text>12</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Feiras e Mostras/ Palestras/ Visitas Técnicas</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Projetos de Pesquisa Científicas</Text>
                    </Body>
                    <Right>
                        <Text>24</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Oficinas</Text>
                    </Body>
                    <Right>
                        <Text>6</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Monitoria (mínimo 1 ano)</Text>
                    </Body>
                    <Right>
                        <Text>20</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Laboratoristas (mínimo 1 ano)</Text>
                    </Body>
                    <Right>
                        <Text>20</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Disciplinas especiais não previstas no currículo e ministradas em outros cursos do ISEPI</Text>
                    </Body>
                    <Right>
                        <Text>20</Text>
                    </Right>
                </ListItem>
            </List>
            <View style={{marginBottom: 10}}></View>
            <List>
                <ListItem style={{backgroundColor: "#c9d1f0"}}>
                    <Body>
                        <Text>Artigos Científicos publicados em revista ou periódico impresso ou on-line</Text>
                    </Body>
                </ListItem>
                <ListItem style={{backgroundColor: "#aab9fa"}}>
                    <Body>
                        <Text>ATIVIDADES</Text>
                    </Body>
                    <Right>
                        <Text>Pontos</Text>
                    </Right>
                </ListItem>
                <ListItem>
                    <Body>
                        <Text>Artigos Científicos publicados em revista ou periódico impresso ou on-line</Text>
                    </Body>
                    <Right>
                        <Text>8</Text>
                    </Right>
                </ListItem>
            </List>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    fragmento: {
        flex: 8,
        padding: 5
    }
});


export default Tabela;