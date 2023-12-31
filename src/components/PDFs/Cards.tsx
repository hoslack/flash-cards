import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { QuestionType } from '../../interfaces';

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  card: {
    width: '50%',
    height: 150,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    paddingLeft: 40,
    paddingRight: 10,
    borderRightWidth: 1,
  },
  answer: {
    paddingLeft: 10,
    paddingRight: 40,
  },

  cardText: {
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document component

type CardsProps = {
  cards: QuestionType[];
};

const Cards: React.FC<CardsProps> = ({ cards }) => (
  <PDFViewer
    style={{
      width: '100%',
      height: '90%',
    }}
  >
    <Document>
      <Page size="A4" style={styles.page}>
        {cards.map((card: QuestionType, index: number) => {
          return (
            <React.Fragment key={index}>
              <View style={[styles.question, styles.card]}>
                <Text style={styles.cardText}>{card.question}</Text>
              </View>
              <View key={index} style={[styles.answer, styles.card]}>
                <Text style={styles.cardText}>{card.answer}</Text>
              </View>
            </React.Fragment>
          );
        })}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  </PDFViewer>
);

export default Cards;
