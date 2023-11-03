import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

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
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBorder: {
    borderRightWidth: 1,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
  urlText: {
    fontSize: 10,
    color: 'gray',
    marginTop: 8,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document component
const Cards: React.FC = () => (
  <PDFViewer
    style={{
      width: '100%',
      height: '90%',
    }}
  >
    <Document>
      <Page size="A4" style={styles.page}>
        {[...Array(40)].map((_, index) => (
          <View
            key={index}
            style={[styles.card, index % 2 === 0 ? styles.rightBorder : {}]}
          >
            <Text style={styles.cardText}>YOUR BUSINESS CARD HERE</Text>
            <Text style={styles.urlText}>@DesignResources.com</Text>
          </View>
        ))}
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
