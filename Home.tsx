
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';

const largura = Dimensions.get('window').width;

export default function Home({ navigation }: any) {
  const [fontsLoaded] = useFonts({
    DancingScript_700Bold,
  });

  if (!fontsLoaded) return null;

  const secoes = [
    {
      numero: '01',
      nome: 'Som da Fé',
      descricao: 'Músicas que aproximam',
      rota: 'Músicas',
      icone: 'musical-notes-outline',
      cor: '#E9A63B',
    },
    {
      numero: '02',
      nome: 'Santos',
      descricao: 'Vidas que inspiram',
      rota: 'Santos',
      icone: 'sunny-outline',
      cor: '#E66B58',
    },
    {
      numero: '03',
      nome: 'Fé em Ação',
      descricao: 'A fé que se transforma em gestos',
      rota: 'Desafios',
      icone: 'heart-outline',
      cor: '#6C9B78',
    },
    {
      numero: '04',
      nome: 'Minha Jornada',
      descricao: 'Registre sua caminhada',
      rota: 'Perfil',
      icone: 'book-outline',
      cor: '#719BCB',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#142D50" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* ABERTURA ARTÍSTICA */}
        <View style={styles.abertura}>

          <View style={styles.topo}>
            <View>
              <Text style={styles.topoPequeno}>UMA JUVENTUDE</Text>
              <Text style={styles.topoPequeno}>EM MISSÃO.</Text>
            </View>

            <TouchableOpacity
              style={styles.perfil}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Ionicons name="person-outline" size={21} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.tituloArea}>
            <Text style={styles.tituloUm}>Juventude</Text>
            <View style={styles.tituloSegundaLinha}>
              <Text style={styles.tituloDo}>do</Text>
              <Text style={styles.tituloPapa}>Papa</Text>
            </View>
            <Text style={styles.fraseAbertura}>
              "Leva-me aonde os homens
            </Text>
            <Text style={styles.fraseAbertura}>
              necessitem Tua palavra
            </Text>
            <Text style={styles.fraseAbertura}>
              necessitem de força de viver"
            </Text>
          </View>

          {/* COMPOSIÇÃO COM A FOTOGRAFIA */}
          <View style={styles.imagemArea}>
            <View style={styles.formaAzulClara} />
            <View style={styles.formaAmarela} />
            <View style={styles.formaVermelha} />

            <Image
              source={require('./assets/papaleao.jpeg')}
              style={styles.papa}
              resizeMode="cover"
            />

            <View style={styles.selo}>
              <Text style={styles.seloNumero}>2026</Text>
              <Text style={styles.seloTexto}>JOVENS</Text>
              <Text style={styles.seloTexto}>EM COMUNHÃO</Text>
            </View>
          </View>

          <View style={styles.mensagem}>
            <Text style={styles.mensagemDestaque}>
              Uma só fé.
            </Text>
            <Text style={styles.mensagemNormal}>
              Muitos caminhos. Uma juventude que caminha unida.
            </Text>
          </View>

          <View style={styles.indicador}>
            <View style={styles.indicadorLinha} />
            <Text style={styles.indicadorTexto}>DESCUBRA</Text>
          </View>
        </View>

        {/* TRANSIÇÃO PARA O APLICATIVO */}
        <View style={styles.conteudo}>
          <View style={styles.introducao}>
            <Text style={styles.etiqueta}>SEU ESPAÇO DE FÉ</Text>
            <Text style={styles.tituloConteudo}>
              Viva essa{'\n'}
              <Text style={styles.tituloConteudoDestaque}>experiência.</Text>
            </Text>
            <Text style={styles.textoIntroducao}>
              Descubra, aprenda, compartilhe e encontre novas formas de viver sua fé.
            </Text>
          </View>

          {/* ACESSOS */}
          {secoes.map((item) => (
            <TouchableOpacity
              key={item.numero}
              style={styles.secao}
              activeOpacity={0.75}
              onPress={() => navigation.navigate(item.rota)}
            >
              <View style={[styles.iconeSecao, { backgroundColor: item.cor }]}>
                <Ionicons
                  name={item.icone as any}
                  size={23}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.secaoTexto}>
                <Text style={styles.secaoNumero}>{item.numero}</Text>
                <Text style={styles.secaoNome}>{item.nome}</Text>
                <Text style={styles.secaoDescricao}>{item.descricao}</Text>
              </View>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#19385E"
              />
            </TouchableOpacity>
          ))}

          {/* ENCERRAMENTO */}
          <View style={styles.final}>
            <View style={styles.finalLinha} />
            <Text style={styles.finalFrase}>
              A juventude tem muito a oferecer.
            </Text>
            <Text style={styles.finalAssinatura}>
              Juventude do Papa
            </Text>
            <Text style={styles.finalRodape}>
              FÉ • COMUNHÃO • MISSÃO
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5EF',
  },

  scroll: {
    paddingBottom: 25,
  },

  abertura: {
    backgroundColor: '#a5e7f0',
    paddingTop: 55,
    paddingHorizontal: 25,
    paddingBottom: 28,
    overflow: 'hidden',
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topoPequeno: {
    color: '#1587aa',
    fontSize: 15,
    letterSpacing: 3,
    fontWeight: '700',
  },

  topoGrande: {
    color: '#1587aa',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 3,
  },

  perfil: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: '#ecf5ff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloArea: {
    marginTop: 35,
    zIndex: 2,
  },

  tituloUm: {
    fontFamily: 'DancingScript_700Bold',
    fontSize: 68,
    color: '#FFFFFF',
    lineHeight: 76,
  },

  tituloSegundaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -13,
  },

  tituloDo: {
    fontFamily: 'DancingScript_700Bold',
    fontSize: 48,
    color: '#E9B653',
    marginRight: 10,
  },

  tituloPapa: {
    fontFamily: 'DancingScript_700Bold',
    fontSize: 73,
    color: '#E9B653',
    lineHeight: 82,
  },

  fraseAbertura: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 13,
    letterSpacing: 0.4,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  imagemArea: {
    height: 340,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  papa: {
    width: largura * 0.77,
    height: 305,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 120,
    zIndex: 2,
  },

  formaAzulClara: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 110,
    backgroundColor: '#719BCB',
    right: -100,
    top: 15,
  },

  formaAmarela: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#E9A63B',
    left: -45,
    top: 80,
  },

  formaVermelha: {
    position: 'absolute',
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: '#D85E50',
    bottom: 5,
    right: 5,
  },

  selo: {
    position: 'absolute',
    left: 0,
    bottom: 16,
    zIndex: 3,
    backgroundColor: '#F2C15C',
    paddingVertical: 12,
    paddingHorizontal: 14,
    transform: [{ rotate: '-5deg' }],
  },

  seloNumero: {
    color: '#142D50',
    fontSize: 22,
    fontWeight: '900',
  },

  seloTexto: {
    color: '#142D50',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
  },

  mensagem: {
    marginTop: 24,
    paddingLeft: 4,
  },

  mensagemDestaque: {
    color: '#F1BD58',
    fontSize: 25,
    fontWeight: '700',
  },

  mensagemNormal: {
    color: '#D7E0EA',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
    maxWidth: 280,
  },

  indicador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    gap: 12,
  },

  indicadorLinha: {
    width: 35,
    height: 1,
    backgroundColor: '#E9B653',
  },

  indicadorTexto: {
    color: '#B8C8D9',
    fontSize: 9,
    letterSpacing: 3,
  },

  conteudo: {
    paddingHorizontal: 25,
    paddingTop: 42,
  },

  introducao: {
    marginBottom: 22,
  },

  etiqueta: {
    color: '#B18B45',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 3,
  },

  tituloConteudo: {
    color: '#183B62',
    fontSize: 35,
    fontWeight: '800',
    lineHeight: 42,
    marginTop: 12,
  },

  tituloConteudoDestaque: {
    color: '#C28B35',
    fontStyle: 'italic',
  },

  textoIntroducao: {
    color: '#75808B',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
    maxWidth: 300,
  },

  secao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E0D6',
  },

  iconeSecao: {
    width: 49,
    height: 49,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secaoTexto: {
    flex: 1,
    marginLeft: 15,
  },

  secaoNumero: {
    color: '#B18B45',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  secaoNome: {
    color: '#183B62',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 2,
  },

  secaoDescricao: {
    color: '#87909A',
    fontSize: 11,
    marginTop: 3,
  },

  final: {
    alignItems: 'center',
    marginTop: 50,
    paddingBottom: 15,
  },

  finalLinha: {
    width: 45,
    height: 2,
    backgroundColor: '#D5A64D',
    marginBottom: 20,
  },

  finalFrase: {
    color: '#183B62',
    fontSize: 14,
    fontStyle: 'italic',
  },

  finalAssinatura: {
    fontFamily: 'DancingScript_700Bold',
    color: '#183B62',
    fontSize: 32,
    marginTop: 7,
  },

  finalRodape: {
    color: '#A18A60',
    fontSize: 9,
    letterSpacing: 3,
    marginTop: 10,
  },
});
